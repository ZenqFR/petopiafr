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
  const LANG_KEY = 'petopiafr-lang';
  const THEME_KEY = 'petopiafr-theme';

  let lang = 'fr';

  function t(key, ...args) {
    const val = STRINGS[lang][key];
    return typeof val === 'function' ? val(...args) : val;
  }

  // ---------- Ability content helpers (language-aware) ----------

  function abilityName(a) { return lang === 'en' ? a.nameEn : a.nameFr; }
  function abilityOtherName(a) { return lang === 'en' ? a.nameFr : a.nameEn; }
  function abilityFamilies(a) { return lang === 'en' ? a.familiesEn : a.familiesFr; }
  function abilityDesc(a) { return lang === 'en' ? a.descEn : a.descFr; }
  function rankNote(r) { return lang === 'en' ? r.noteEn : r.noteFr; }

  function tagHtml(faction) {
    const cls = faction === 'Horde' ? 'tag-horde' : 'tag-neutre';
    return `<span class="tag ${cls}">${FACTION_LABEL[lang][faction]}</span>`;
  }

  function creatureNameHtml(s) {
    if (lang === 'en') {
      // English is the "native" language for every creature: no fallback tag needed.
      return `<span class="npc">${s.en || s.n}</span>`;
    }
    if (s.noFr) {
      return `<span class="npc">${s.n}</span> <span class="nofr" title="Aucune fiche française exploitable trouvée pour ce PNJ">${t('noFrTag')}</span>`;
    }
    if (s.en) {
      return `<span class="npc">${s.n}</span> <span class="en-orig">(${s.en})</span>`;
    }
    return `<span class="npc">${s.n}</span>`;
  }

  function sourceListHtml(sources) {
    if (!sources || !sources.length) return '';
    return `<ul class="source-list">${sources.map(s =>
      `<li>${tagHtml(s.f)} ${creatureNameHtml(s)} <span class="mob-lvl">${t('mobLvlPrefix')} ${mobLevelText(s.mob, lang)}</span> <span class="zone">— ${zoneName(s.z, lang)}</span></li>`
    ).join('')}</ul>`;
  }

  function cardHtml(ability, rank, variant) {
    const cls = variant === 'soon' ? 'card is-soon' : 'card';
    const note = rankNote(rank);
    const noteHtml = note ? `<p class="note">${note}</p>` : '';
    return `<li class="${cls}">
      <h3>${abilityName(ability)} <span class="heading-sub">(${abilityOtherName(ability)})</span></h3>
      <p class="rank-line">${t('rankLine', rank.r, rank.lvl)}</p>
      <p class="desc">${abilityDesc(ability)}</p>
      <p class="families-line"><span class="families-label">${t('familiesLabel')}</span> ${abilityFamilies(ability)}</p>
      <p class="src-label">${t('srcLabel')}</p>
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
    if (counts.newCount > 0) bits.push(`${t('announceNew', counts.newCount)} ${level}`);
    if (counts.soonCount > 0) bits.push(t('announceSoon', counts.soonCount));
    liveEl.textContent = bits.length
      ? `${t('announceLevel', level)} ${bits.join('. ')}.`
      : `${t('announceLevel', level)} ${t('announceNothing')}`;
  }

  function setLevel(level, { announceChange } = { announceChange: false }) {
    level = Math.min(70, Math.max(1, Math.round(level)));
    rangeEl.value = String(level);
    numberEl.value = String(level);
    outputEl.textContent = t('levelOutput', level);
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
      const note = rankNote(rank);
      const srcCell = rank.src && rank.src.length
        ? `<ul>${rank.src.map(s => `<li>${tagHtml(s.f)} ${creatureNameHtml(s)} <span class="mob-lvl">${t('mobLvlPrefix')} ${mobLevelText(s.mob, lang)}</span> — ${zoneName(s.z, lang)}</li>`).join('')}</ul>`
        : `<em>${note || t('noSourceKnown')}</em>`;
      const noteRow = note && rank.src && rank.src.length ? `<div class="note">${note}</div>` : '';
      return `<tr>
        <td class="num">${rank.r}</td>
        <td class="num">${rank.lvl}</td>
        <td class="src-cell">${srcCell}${noteRow}</td>
      </tr>`;
    }).join('');
    return `<div class="rank-table-wrap"><table class="rank-table">
      <caption>${t('rankTableCaption', abilityName(ability))}</caption>
      <thead><tr><th scope="col">${t('thRank')}</th><th scope="col">${t('thLevelReq')}</th><th scope="col">${t('thSource')}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function buildReference() {
    const locale = lang === 'en' ? 'en' : 'fr';
    const sorted = [...ABILITIES].sort((a, b) => abilityName(a).localeCompare(abilityName(b), locale));
    referenceEl.innerHTML = sorted.map(ability => `
      <details class="ref-item">
        <summary>
          <span>${abilityName(ability)} <span class="fam">(${abilityOtherName(ability)}) — ${t('refSummaryFamilies')} ${abilityFamilies(ability)}</span></span>
          <span class="chevron" aria-hidden="true">▶</span>
        </summary>
        <div class="ref-body">
          <p class="desc">${abilityDesc(ability)}</p>
          ${rankTableHtml(ability)}
        </div>
      </details>
    `).join('');
  }

  // ---------- Static UI strings ----------

  function applyStaticStrings() {
    document.documentElement.lang = lang;
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  }

  // ---------- Theme toggle ----------

  const toggleBtn = document.getElementById('theme-toggle');
  const labelEl = toggleBtn.querySelector('.theme-toggle-label');

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
      toggleBtn.setAttribute('aria-pressed', 'true');
      labelEl.textContent = t(theme === 'dark' ? 'themeDark' : 'themeLight');
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggleBtn.setAttribute('aria-pressed', 'false');
      labelEl.textContent = t('themeAuto');
    }
  }

  function currentTheme() { return document.documentElement.getAttribute('data-theme') || null; }

  function cycleTheme() {
    const current = currentTheme();
    const next = current === 'dark' ? 'light' : current === 'light' ? null : 'dark';
    applyTheme(next);
    try {
      if (next) localStorage.setItem(THEME_KEY, next);
      else localStorage.removeItem(THEME_KEY);
    } catch (e) { /* ignore */ }
  }

  toggleBtn.addEventListener('click', cycleTheme);

  // ---------- Language switch ----------

  const langButtons = [...document.querySelectorAll('.lang-btn')];

  function setLang(next, { persist } = { persist: true }) {
    if (!STRINGS[next]) return; // 'de' has no strings yet — button stays inert
    lang = next;
    langButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
    applyStaticStrings();
    applyTheme(currentTheme()); // refresh theme-toggle label in new language
    buildReference();
    setLevel(parseInt(numberEl.value, 10) || 17, { announceChange: false });
    if (persist) { try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ } }
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-disabled') === 'true') return; // DE: coming soon
      setLang(btn.dataset.lang);
    });
  });

  // ---------- Init ----------

  let savedTheme = null;
  let savedLevel = null;
  let savedLang = null;
  try {
    savedTheme = localStorage.getItem(THEME_KEY);
    savedLevel = parseInt(localStorage.getItem('petopiafr-level'), 10);
    savedLang = localStorage.getItem(LANG_KEY);
  } catch (e) { /* ignore */ }

  lang = (savedLang && STRINGS[savedLang]) ? savedLang : 'fr';
  langButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
  applyStaticStrings();
  applyTheme(savedTheme);
  buildReference();
  setLevel(Number.isFinite(savedLevel) ? savedLevel : 17, { announceChange: false });
})();
