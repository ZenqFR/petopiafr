(() => {
  'use strict';

  const rangeEl = document.getElementById('level-range');
  const numberEl = document.getElementById('level-number');
  const outputEl = document.getElementById('level-output');
  const liveEl = document.getElementById('live-announcer');

  const newList = document.getElementById('new-list');
  const newEmpty = document.getElementById('new-empty');
  const soonList = document.getElementById('soon-list');
  const soonEmpty = document.getElementById('soon-empty');
  const knownList = document.getElementById('known-list');

  const referenceEl = document.getElementById('reference-list');

  const SOON_WINDOW = 2;

  function tagHtml(faction) {
    const cls = faction === 'Horde' ? 'tag-horde' : 'tag-neutre';
    return `<span class="tag ${cls}">${faction}</span>`;
  }

  function sourceListHtml(sources) {
    if (!sources || !sources.length) return '';
    return `<ul class="source-list">${sources.map(s =>
      `<li>${tagHtml(s.f)} <span class="npc">${s.n}</span> <span class="zone">— ${s.z}</span></li>`
    ).join('')}</ul>`;
  }

  function cardHtml(ability, rank, variant) {
    const cls = variant === 'soon' ? 'card is-soon' : 'card';
    const noteHtml = rank.note ? `<p class="note">${rank.note}</p>` : '';
    return `<li class="${cls}">
      <h3>${ability.nameFr} <span class="heading-sub">(${ability.nameEn})</span></h3>
      <p class="rank-line">Rang ${rank.r} — niveau ${rank.lvl}</p>
      <p class="desc">${ability.desc}</p>
      ${sourceListHtml(rank.src)}
      ${noteHtml}
    </li>`;
  }

  function bestRankAtOrBefore(ability, level) {
    let best = null;
    for (const rank of ability.ranks) {
      if (rank.lvl <= level && (!best || rank.lvl > best.lvl)) best = rank;
    }
    return best;
  }

  function render(level) {
    const newItems = [];
    const soonItems = [];
    const knownItems = [];

    for (const ability of ABILITIES) {
      for (const rank of ability.ranks) {
        if (rank.lvl === level) newItems.push({ ability, rank });
        else if (rank.lvl > level && rank.lvl <= level + SOON_WINDOW) soonItems.push({ ability, rank });
      }
      const best = bestRankAtOrBefore(ability, level);
      if (best && best.lvl !== level) knownItems.push({ ability, rank: best });
    }

    soonItems.sort((a, b) => a.rank.lvl - b.rank.lvl);
    knownItems.sort((a, b) => b.rank.lvl - a.rank.lvl);

    newList.innerHTML = newItems.map(x => cardHtml(x.ability, x.rank, 'new')).join('');
    newEmpty.hidden = newItems.length > 0;

    soonList.innerHTML = soonItems.map(x => cardHtml(x.ability, x.rank, 'soon')).join('');
    soonEmpty.hidden = soonItems.length > 0;

    knownList.innerHTML = knownItems.map(x => cardHtml(x.ability, x.rank, 'known')).join('');

    return { newCount: newItems.length, soonCount: soonItems.length };
  }

  function announce(level, counts) {
    const bits = [];
    if (counts.newCount > 0) bits.push(`${counts.newCount} nouvelle${counts.newCount > 1 ? 's' : ''} capacité${counts.newCount > 1 ? 's' : ''} au niveau ${level}`);
    if (counts.soonCount > 0) bits.push(`${counts.soonCount} à venir dans les 2 prochains niveaux`);
    liveEl.textContent = bits.length
      ? `Niveau ${level}. ${bits.join('. ')}.`
      : `Niveau ${level}. Rien de nouveau à ce niveau précis.`;
  }

  function setLevel(level, { announceChange } = { announceChange: false }) {
    level = Math.min(70, Math.max(1, Math.round(level)));
    rangeEl.value = String(level);
    numberEl.value = String(level);
    outputEl.textContent = `Niveau ${level}`;
    const counts = render(level);
    if (announceChange) announce(level, counts);
    try { localStorage.setItem('petopiafr-level', String(level)); } catch (e) { /* ignore */ }
  }

  rangeEl.addEventListener('input', () => setLevel(rangeEl.value, { announceChange: false }));
  rangeEl.addEventListener('change', () => setLevel(rangeEl.value, { announceChange: true }));
  numberEl.addEventListener('input', () => setLevel(numberEl.value || 1, { announceChange: false }));
  numberEl.addEventListener('change', () => setLevel(numberEl.value || 1, { announceChange: true }));

  // ---------- Reference accordion ----------

  function rankTableHtml(ability) {
    const rows = ability.ranks.map(rank => {
      const srcCell = rank.src && rank.src.length
        ? `<ul>${rank.src.map(s => `<li>${tagHtml(s.f)} <span class="npc">${s.n}</span> — ${s.z}</li>`).join('')}</ul>`
        : `<em>${rank.note || 'Aucune source Horde/Neutre connue.'}</em>`;
      const noteRow = rank.note && rank.src && rank.src.length ? `<div class="note">${rank.note}</div>` : '';
      return `<tr>
        <td class="num">${rank.r}</td>
        <td class="num">${rank.lvl}</td>
        <td class="src-cell">${srcCell}${noteRow}</td>
      </tr>`;
    }).join('');
    return `<div class="rank-table-wrap"><table class="rank-table">
      <caption>Tous les rangs de ${ability.nameFr}, sources Horde et neutres</caption>
      <thead><tr><th scope="col">Rang</th><th scope="col">Niveau</th><th scope="col">Créature à apprivoiser (zone)</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function buildReference() {
    const sorted = [...ABILITIES].sort((a, b) => a.nameFr.localeCompare(b.nameFr, 'fr'));
    referenceEl.innerHTML = sorted.map(ability => `
      <details class="ref-item">
        <summary>
          <span>${ability.nameFr} <span class="fam">(${ability.nameEn}) — ${ability.families}</span></span>
          <span class="chevron" aria-hidden="true">▶</span>
        </summary>
        <div class="ref-body">
          <p class="desc">${ability.desc}</p>
          ${rankTableHtml(ability)}
        </div>
      </details>
    `).join('');
  }

  // ---------- Theme toggle ----------

  const THEME_KEY = 'petopiafr-theme';
  const toggleBtn = document.getElementById('theme-toggle');
  const labelEl = toggleBtn.querySelector('.theme-toggle-label');

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
      toggleBtn.setAttribute('aria-pressed', 'true');
      labelEl.textContent = theme === 'dark' ? 'Thème : sombre' : 'Thème : clair';
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggleBtn.setAttribute('aria-pressed', 'false');
      labelEl.textContent = 'Thème : automatique';
    }
  }

  function cycleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : current === 'light' ? null : 'dark';
    applyTheme(next);
    try {
      if (next) localStorage.setItem(THEME_KEY, next);
      else localStorage.removeItem(THEME_KEY);
    } catch (e) { /* ignore */ }
  }

  toggleBtn.addEventListener('click', cycleTheme);

  // ---------- Init ----------

  let savedTheme = null;
  let savedLevel = null;
  try {
    savedTheme = localStorage.getItem(THEME_KEY);
    savedLevel = parseInt(localStorage.getItem('petopiafr-level'), 10);
  } catch (e) { /* ignore */ }

  applyTheme(savedTheme);
  buildReference();
  setLevel(Number.isFinite(savedLevel) ? savedLevel : 17, { announceChange: false });
})();
