/* PetopiaFR — données de capacités de familier apprivoisables
 * Compilé depuis wow-petopia.com (classic_bc), le guide de dressage
 * Ten Ton Hammer (WoW Hunter Pet Skill List), et Wowhead + JudgeHype
 * (fiches EN + FR croisées par identifiant de PNJ) pour les noms de
 * créatures et leur niveau approximatif.
 *
 * Chaque créature a été recherchée sur Wowhead (fiche anglaise) puis
 * vérifiée sur une fiche française du même identifiant (Wowhead ou
 * JudgeHype). Quand aucune fiche française exploitable n'existe pour un
 * PNJ, le nom reste en anglais et `noFr: true` est posé — signalé dans
 * l'interface au lieu d'inventer une traduction non vérifiée.
 */

const FACTION = {
  HORDE: 'Horde',
  NEUTRE: 'Neutre',
};

const FACTION_LABEL = {
  fr: { Horde: 'Horde', Neutre: 'Neutre' },
  en: { Horde: 'Horde', Neutre: 'Neutral' },
};

// Zones : nom français -> nom anglais officiel (pour l'affichage en anglais).
const ZONE_EN = {
  'Mulgore': 'Mulgore',
  'Les Tarides': 'The Barrens',
  'Forêt des Pins Argentés': 'Silverpine Forest',
  'Blackfathom Deep (instance, Orneval)': 'Blackfathom Deep (instance, Ashenvale)',
  'Terres Ingrates': 'Badlands',
  'Féralas': 'Feralas',
  'Gangrebois': 'Felwood',
  'Spires de Blackrock (instance)': 'Blackrock Spire (instance)',
  'Forêt de Terokkar': 'Terokkar Forest',
  'Durotar': 'Durotar',
  'Orneval': 'Ashenvale',
  'Désolace': 'Desolace',
  'Steppes Ardentes': 'Burning Steppes',
  "Berceau de l'Hiver": 'Winterspring',
  'Nagrand': 'Nagrand',
  'Razorfen Kraul (instance, Les Tarides)': 'Razorfen Kraul (instance, The Barrens)',
  'Terres Foudroyées': 'Blasted Lands',
  "Maleterres de l'Est": 'Eastern Plaguelands',
  'Vallée de Strangleronce': 'Stranglethorn Vale',
  'Les Hinterlands': 'Hinterlands',
  'Tanaris': 'Tanaris',
  "Vallée d'Ombrelune": 'Shadowmoon Valley',
  'Les Tranchantes': "Blade's Edge Mountains",
  'Wailing Caverns (instance, Les Tarides)': 'Wailing Caverns (instance, The Barrens)',
  'Bois des Chants éternels': 'Eversong Woods',
  "Cratère d'Un'Goro": "Un'Goro Crater",
  'Péninsule des Flammes infernales': 'Hellfire Peninsula',
  "Zul'Farrak (instance, Tanaris)": "Zul'Farrak (instance, Tanaris)",
  'Orgrimmar': 'Orgrimmar',
};

function zoneName(z, lang) {
  if (lang === 'en') return ZONE_EN[z] || z;
  return z;
}

function mobLevelText(mob, lang) {
  if (lang === 'en') return mob.replace('Élite', 'Elite');
  return mob;
}

// Zones du menu déroulant, Horde ET neutres (chacune marquée), triées par
// niveau croissant. `lvl` est le niveau approximatif de la zone elle-même
// (pas celui d'une capacité). `match` teste la chaîne `src.z` d'une source
// (les zones d'instance type "X (instance, Les Tarides)" ou "Spires de
// Blackrock (instance)" retombent dans la zone extérieure qui les contient).
const ZONES = [
  { key: 'durotar', nameFr: 'Durotar', lvl: '1-11', faction: FACTION.HORDE, match: (z) => z === 'Durotar' },
  { key: 'mulgore', nameFr: 'Mulgore', lvl: '1-11', faction: FACTION.HORDE, match: (z) => z === 'Mulgore' },
  { key: 'chants-eternels', nameFr: 'Bois des Chants éternels', lvl: '1-20', faction: FACTION.HORDE, match: (z) => z === 'Bois des Chants éternels' },
  { key: 'pins-argentes', nameFr: 'Forêt des Pins Argentés', lvl: '10-20', faction: FACTION.HORDE, match: (z) => z === 'Forêt des Pins Argentés' },
  { key: 'tarides', nameFr: 'Les Tarides', lvl: '10-25', faction: FACTION.HORDE, match: (z) => z.includes('Les Tarides') },
  { key: 'orneval', nameFr: 'Orneval', lvl: '10-25', faction: FACTION.NEUTRE, match: (z) => z === 'Orneval' || z.includes('Blackfathom Deep') },
  { key: 'desolace', nameFr: 'Désolace', lvl: '30-40', faction: FACTION.NEUTRE, match: (z) => z === 'Désolace' },
  { key: 'strangleronce', nameFr: 'Vallée de Strangleronce', lvl: '30-45', faction: FACTION.NEUTRE, match: (z) => z === 'Vallée de Strangleronce' },
  { key: 'ingrates', nameFr: 'Terres Ingrates', lvl: '35-43', faction: FACTION.NEUTRE, match: (z) => z === 'Terres Ingrates' },
  { key: 'feralas', nameFr: 'Féralas', lvl: '38-48', faction: FACTION.NEUTRE, match: (z) => z === 'Féralas' },
  { key: 'tanaris', nameFr: 'Tanaris', lvl: '40-50', faction: FACTION.NEUTRE, match: (z) => z === 'Tanaris' || z.includes("Zul'Farrak") },
  { key: 'hinterlands', nameFr: 'Les Hinterlands', lvl: '40-50', faction: FACTION.NEUTRE, match: (z) => z === 'Les Hinterlands' },
  { key: 'foudroyees', nameFr: 'Terres Foudroyées', lvl: '45-50', faction: FACTION.NEUTRE, match: (z) => z === 'Terres Foudroyées' },
  { key: 'ungoro', nameFr: "Cratère d'Un'Goro", lvl: '48-55', faction: FACTION.NEUTRE, match: (z) => z === "Cratère d'Un'Goro" },
  { key: 'gangrebois', nameFr: 'Gangrebois', lvl: '48-55', faction: FACTION.NEUTRE, match: (z) => z === 'Gangrebois' },
  { key: 'ardentes', nameFr: 'Steppes Ardentes', lvl: '50-58', faction: FACTION.NEUTRE, match: (z) => z === 'Steppes Ardentes' || z.includes('Blackrock') },
  { key: 'maleterres-est', nameFr: "Maleterres de l'Est", lvl: '51-60', faction: FACTION.NEUTRE, match: (z) => z === "Maleterres de l'Est" },
  { key: 'berceau-hiver', nameFr: "Berceau de l'Hiver", lvl: '55-60', faction: FACTION.NEUTRE, match: (z) => z === "Berceau de l'Hiver" },
  { key: 'flammes-infernales', nameFr: 'Péninsule des Flammes infernales', lvl: '58-63', faction: FACTION.NEUTRE, match: (z) => z === 'Péninsule des Flammes infernales' },
  { key: 'terokkar', nameFr: 'Forêt de Terokkar', lvl: '62-65', faction: FACTION.NEUTRE, match: (z) => z === 'Forêt de Terokkar' },
  { key: 'tranchantes', nameFr: 'Les Tranchantes', lvl: '64-67', faction: FACTION.NEUTRE, match: (z) => z === 'Les Tranchantes' },
  { key: 'nagrand', nameFr: 'Nagrand', lvl: '64-67', faction: FACTION.NEUTRE, match: (z) => z === 'Nagrand' },
  { key: 'ombrelune', nameFr: "Vallée d'Ombrelune", lvl: '67-70', faction: FACTION.NEUTRE, match: (z) => z === "Vallée d'Ombrelune" },
];

// Uniquement les capacités qu'on APPREND en apprivoisant une créature qui
// les connaît déjà. Les capacités universelles enseignées par n'importe
// quel dresseur de familier (Grondement, Endurance phénoménale, Armure
// naturelle, les 5 résistances, Esquive, Réflexes de cobra) sont exclues :
// elles ne nécessitent aucun apprivoisage particulier.
//
// Pour chaque capacité :
//   - `familiesFr/familiesEn` = quelles familles de familiers PEUVENT apprendre ce sort
//   - `ranks[].src` = sur QUELLE créature précise (avec son niveau et sa
//     zone) on peut apprivoiser/rechercher ce rang précis
//   - `src[].n` = nom français (ou anglais si `noFr: true`), `src[].en` =
//     nom anglais d'origine (absent si identique / si noFr)
const ABILITIES = [
  {
    id: 'morsure', nameFr: 'Morsure', nameEn: 'Bite',
    familiesFr: 'La plupart des familles (sauf Crabes, Hiboux, Scorpides)',
    familiesEn: 'Most families (except Crabs, Owls, Scorpids)',
    descFr: "Mord l'ennemi et inflige des dégâts physiques.",
    descEn: 'Bites the enemy, dealing physical damage.',
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Loup des prairies', en: 'Prairie Wolf', mob: '5-6', z: 'Mulgore', f: FACTION.HORDE }] },
      { r: 2, lvl: 8, src: [{ n: "Gueule d'acier des oasis", en: 'Oasis Snapjaw', mob: '15-16', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 3, lvl: 16, src: [{ n: 'Flaire-sang worg', en: 'Bloodsnout Worg', mob: '16-17', z: 'Forêt des Pins Argentés', f: FACTION.HORDE }] },
      { r: 4, lvl: 24, src: [{ n: 'Ghamoo-ra', en: 'Ghamoo-Ra', mob: 'mini-boss', z: 'Blackfathom Deep (instance, Orneval)', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 32, src: [{ n: 'Coyote des rochers', en: 'Crag Coyote', mob: '35-36', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 40, src: [{ n: 'Messager Longues-dents', en: 'Longtooth Runner', mob: '40-41', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 7, lvl: 48, src: [{ n: 'Ravageur Gangrepatte', en: 'Felpaw Ravager', mob: '51-52', z: 'Gangrebois', f: FACTION.NEUTRE }] },
      { r: 8, lvl: 56, src: [{ n: 'Worg Bloodaxe', en: 'Bloodaxe Worg', mob: '56-60', z: 'Spires de Blackrock (instance)', f: FACTION.NEUTRE }] },
      { r: 9, lvl: 64, src: [{ n: "Rôdeuse croc-d'effroi", en: 'Dreadfang Lurker', mob: '63-64', z: 'Forêt de Terokkar', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'griffe', nameFr: 'Griffe', nameEn: 'Claw',
    familiesFr: 'Ours, Oiseaux charognards, Félins, Crabes, Hiboux, Raptors, Scorpides, Traqueurs de distorsion',
    familiesEn: 'Bears, Carrion Birds, Cats, Crabs, Owls, Raptors, Scorpids, Warp Stalkers',
    descFr: "Griffe l'ennemi et inflige des dégâts physiques.",
    descEn: 'Claws the enemy, dealing physical damage.',
    ranks: [
      { r: 1, lvl: 1, src: [{ n: "Clampant de l'écume pygmée", en: 'Pygmy Surf Crawler', mob: '5-6', z: 'Durotar', f: FACTION.HORDE }] },
      { r: 2, lvl: 8, src: [{ n: "Clampant de l'écume incrusté", en: 'Encrusted Surf Crawler', mob: '9-10', z: 'Durotar', f: FACTION.HORDE }] },
      { r: 3, lvl: 16, src: [{ n: "Ours d'Ashenvale", en: 'Ashenvale Bear', mob: '21-22', z: 'Orneval', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 24, src: [{ n: "Vieil ours d'Ashenvale", en: 'Elder Ashenvale Bear', mob: '25-26', z: 'Orneval', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 32, src: [{ n: 'Flagellant scorpashi', en: 'Scorpashi Lasher', mob: '34-35', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 40, src: [{ n: 'Ours Ferpoil', en: 'Ironfur Bear', mob: '41-42', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 7, lvl: 48, src: [{ n: 'Scorpide fouet-mortel', en: 'Deathlash Scorpid', mob: '54-55', z: 'Steppes Ardentes', f: FACTION.NEUTRE }] },
      { r: 8, lvl: 56, src: [{ n: "Hurleur du Berceau-de-l'Hiver", en: 'Winterspring Screecher', mob: '57-59', z: "Berceau de l'Hiver", f: FACTION.NEUTRE }] },
      { r: 9, lvl: 64, src: [{ n: 'Venteroc supérieur', en: 'Greater Windroc', mob: '66-67', z: 'Nagrand', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'charge', nameFr: 'Charge', nameEn: 'Charge',
    familiesFr: 'Sangliers uniquement', familiesEn: 'Boars only',
    descFr: "Charge une cible, l'immobilise 1 sec et augmente la puissance d'attaque du prochain coup.",
    descEn: "Charges a target, immobilizing it for 1 sec and boosting the attack power of the next hit.",
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Sanglier de guerre', en: 'Battleboar', mob: '3-4', z: 'Mulgore', f: FACTION.HORDE }] },
      { r: 2, lvl: 12, src: [],
        noteFr: 'Aucune source Horde/Neutre connue à ce rang (uniquement en zones Alliance) — le rang 1 reste utilisable en attendant.',
        noteEn: 'No known Horde/neutral source for this rank (Alliance zones only) — rank 1 still works in the meantime.' },
      { r: 3, lvl: 24, src: [{ n: "Agam'ar", mob: '24-25 (Élite)', z: 'Razorfen Kraul (instance, Les Tarides)', f: FACTION.HORDE }] },
      { r: 5, lvl: 48, src: [{ n: 'Sanglier cendre-crin', en: 'Ashmane Boar', mob: '48-49', z: 'Terres Foudroyées', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 60, src: [{ n: 'Pourceau pestiféré', en: 'Plagued Swine', mob: '60', z: "Maleterres de l'Est", f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'terrer', nameFr: 'Se Recroqueviller', nameEn: 'Cower',
    familiesFr: 'Toutes les familles', familiesEn: 'All families',
    descFr: "Le familier se fait tout petit : aucun dégât infligé, mais son aggro chute fortement.",
    descEn: "The pet cowers: deals no damage, but its threat drops sharply.",
    ranks: [
      { r: 1, lvl: 5, src: [{ n: 'Grand trotteur des plaines', en: 'Greater Plainstrider', mob: '11-12', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 2, lvl: 15, src: [{ n: 'Trotteur des plaines hargneux', en: 'Ornery Plainstrider', mob: '16-17', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 3, lvl: 25, src: [{ n: 'Jeune tigre de Strangleronce', en: 'Young Stranglethorn Tiger', mob: '30-31', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 35, src: [{ n: 'Traqueur des crêtes', en: 'Ridge Stalker', mob: '36-37', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 45, src: [{ n: 'Chauve-souris pestiférée nuisible', en: 'Noxious Plaguebat', mob: '54-56', z: "Maleterres de l'Est", f: FACTION.NEUTRE }] },
      { r: 6, lvl: 55, src: [{ n: 'Jeune sabre-de-givre', en: 'Frostsaber Cub', mob: '55-56', z: "Berceau de l'Hiver", f: FACTION.NEUTRE }] },
      { r: 7, lvl: 65, src: [{ n: 'Lynx traquebosquet', en: 'Grovestalker Lynx', mob: '65-66', z: 'Les Tranchantes', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'ruee', nameFr: 'Ruée', nameEn: 'Dash',
    familiesFr: 'Sangliers, Félins, Hyènes, Raptors, Ravageurs, Grand-marcheurs, Loups',
    familiesEn: 'Boars, Cats, Hyenas, Raptors, Ravagers, Tallstriders, Wolves',
    descFr: 'Augmente la vitesse de déplacement du familier pendant 15 secondes.',
    descEn: "Increases the pet's movement speed for 15 seconds.",
    ranks: [
      { r: 1, lvl: 30, src: [{ n: 'Coyote des rochers', en: 'Crag Coyote', mob: '35-36', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Messager Longues-dents', en: 'Longtooth Runner', mob: '40-41', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 50, src: [{ n: "Loup d'attaque Vilebranch", en: 'Vilebranch Raiding Wolf', mob: '50-51 (Élite)', z: 'Les Hinterlands', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'pique', nameFr: 'Piqué', nameEn: 'Dive',
    familiesFr: 'Chauves-souris, Oiseaux charognards, Dracofaucons, Raies-du-Néant, Hiboux, Serpents des vents',
    familiesEn: 'Bats, Carrion Birds, Dragonhawks, Nether Rays, Owls, Wind Serpents',
    descFr: 'Augmente la vitesse de déplacement du familier pendant 15 secondes.',
    descEn: "Increases the pet's movement speed for 15 seconds.",
    ranks: [
      { r: 1, lvl: 30, src: [{ n: "Volant de l'effroi", en: 'Dread Flyer', mob: '36-37', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Hurleur des vallées', en: 'Vale Screecher', mob: '41-43', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 50, src: [{ n: 'Chasseur Bec-de-fer', en: 'Ironbeak Hunter', mob: '50-51', z: 'Gangrebois', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'traque', nameFr: 'Traque', nameEn: 'Prowl',
    familiesFr: 'Félins uniquement', familiesEn: 'Cats only',
    descFr: "Le familier passe en discrétion (vitesse réduite) ; la prochaine attaque depuis la discrétion inflige un bonus de dégâts.",
    descEn: "Puts the pet into stealth (reduced speed); the next attack from stealth deals bonus damage.",
    ranks: [
      { r: 1, lvl: 30, src: [{ n: 'Panthère Ombregueule', en: 'Shadowmaw Panther', mob: '37-38', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Ancienne panthère Ombregueule', en: 'Elder Shadowmaw Panther', mob: '42-43', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 50, src: [{ n: 'Traqueur jaguero', en: 'Jaguero Stalker', mob: '50', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'poison-scorpide', nameFr: 'Poison de scorpide', nameEn: 'Scorpid Poison',
    familiesFr: 'Scorpides uniquement', familiesEn: 'Scorpids only',
    descFr: "Inflige des dégâts de Nature sur la durée, cumulable jusqu'à 5 fois.",
    descEn: 'Deals Nature damage over time, stacking up to 5 times.',
    ranks: [
      { r: 1, lvl: 8, src: [{ n: 'Scorpide queue-venin', en: 'Venomtail Scorpid', mob: '9-10', z: 'Durotar', f: FACTION.HORDE }] },
      { r: 2, lvl: 24, src: [{ n: 'Scorpashi mordeur', en: 'Scorpashi Snapper', mob: '30-31', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 40, src: [{ n: 'Scorpide chasseur', en: 'Scorpid Hunter', mob: '40-41', z: 'Tanaris', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 56, src: [{ n: 'Scorpide queue-de-feu', en: 'Firetail Scorpid', mob: '56-57', z: 'Steppes Ardentes', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 64, src: [{ n: 'Scorpide osserampant', en: 'Scorpid Bonecrawler', mob: '64-65', z: 'Forêt de Terokkar', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'cri-strident', nameFr: 'Cri Strident', nameEn: 'Screech',
    familiesFr: 'Chauves-souris, Oiseaux charognards, Hiboux', familiesEn: 'Bats, Carrion Birds, Owls',
    descFr: "Blesse une cible et réduit la puissance d'attaque des ennemis proches pendant 4 secondes.",
    descEn: "Damages a target and lowers nearby enemies' attack power for 4 seconds.",
    ranks: [
      { r: 1, lvl: 8, src: [],
        noteFr: "Aucune source Horde/Neutre connue à ce rang (uniquement Marche de l'Ouest, zone Alliance).",
        noteEn: 'No known Horde/neutral source for this rank (Westfall only, an Alliance zone).' },
      { r: 2, lvl: 24, src: [{ n: "Déchiqueteur de l'effroi", en: 'Dread Ripper', mob: '39-40', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 48, src: [{ n: 'Chouette Bec-de-fer', en: 'Ironbeak Owl', mob: '48-49', z: 'Gangrebois', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 56, src: [{ n: "Hurleur du Berceau-de-l'Hiver", en: 'Winterspring Screecher', mob: '57-59', z: "Berceau de l'Hiver", f: FACTION.NEUTRE }] },
      { r: 5, lvl: 64, src: [{ n: 'Venteroc supérieur', en: 'Greater Windroc', mob: '66-67', z: 'Nagrand', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'carapace', nameFr: 'Carapace Protectrice', nameEn: 'Shell Shield',
    familiesFr: 'Tortues uniquement', familiesEn: 'Turtles only',
    descFr: "Réduit les dégâts subis de 50 %, mais ralentit les attaques du familier de 43 %, pendant 12 secondes.",
    descEn: "Reduces damage taken by 50%, but slows the pet's attacks by 43%, for 12 seconds.",
    ranks: [
      { r: 1, lvl: 20, src: [{ n: 'Kresh', mob: '20 (Élite)', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE }] },
    ],
  },
  {
    id: 'pietinement', nameFr: 'Piétinement Tonnerre', nameEn: 'Thunderstomp',
    familiesFr: 'Gorilles uniquement', familiesEn: 'Gorillas only',
    descFr: "Dégâts de Nature à tous les ennemis dans 8 mètres ; génère beaucoup d'aggro.",
    descEn: 'Nature damage to all enemies within 8 yards; generates a lot of threat.',
    ranks: [
      { r: 1, lvl: 30, src: [{ n: 'Foudroyeur de la Jungle', en: 'Jungle Thunderer', mob: '37-38', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Foudroyeur Groddoc', en: 'Groddoc Thunderer', mob: '49-50', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 50, src: [{ n: "Foudroyeur d'Un'Goro", en: "Un'Goro Thunderer", mob: '52-53', z: "Cratère d'Un'Goro", f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'distorsion', nameFr: 'Distorsion', nameEn: 'Warp',
    familiesFr: 'Traqueurs de distorsion uniquement', familiesEn: 'Warp Stalkers only',
    descFr: "Téléporte le familier sur un ennemi à 30 mètres et lui donne 50 % de chance d'esquiver la prochaine attaque de mêlée.",
    descEn: "Teleports the pet to an enemy up to 30 yards away and gives it a 50% chance to dodge the next melee attack.",
    ranks: [
      { r: 1, lvl: 15, src: [{ n: 'Traqueur dimensionnel', en: 'Warp Stalker', mob: '63-64', z: 'Forêt de Terokkar', f: FACTION.NEUTRE }],
        noteFr: "⚠️ Capacité utilisable dès le niveau 15, mais les traqueurs de distorsion vivent en Outreterre (zone de haut niveau) : en pratique on ne peut l'apprendre que bien plus tard.",
        noteEn: "⚠️ Usable from level 15, but warp stalkers live in Outland (a high-level zone): in practice you won't learn it until much later." },
    ],
  },
  {
    id: 'souffle-feu', nameFr: 'Souffle de Feu', nameEn: 'Fire Breath',
    familiesFr: 'Dracofaucons uniquement', familiesEn: 'Dragonhawks only',
    descFr: 'Souffle de feu en cône devant le familier, dégâts de Feu sur la durée.',
    descEn: "Cone of fire in front of the pet, Fire damage over time.",
    ranks: [
      { r: 1, lvl: 5, src: [{ n: 'Faucon-dragon affolé', en: 'Crazed Dragonhawk', mob: '7-8', z: 'Bois des Chants éternels', f: FACTION.HORDE }] },
      { r: 2, lvl: 60, src: [{ n: 'Faucon-dragon éclipsion', en: 'Eclipsion Dragonhawk', mob: '67-68', z: "Vallée d'Ombrelune", f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'hurlement', nameFr: 'Hurlement Furieux', nameEn: 'Furious Howl',
    familiesFr: 'Loups uniquement', familiesEn: 'Wolves only',
    descFr: "Les membres du groupe à 15 mètres reçoivent un bonus de dégâts sur leur prochaine attaque physique, pendant 10 secondes.",
    descEn: "Party members within 15 yards get a damage bonus on their next physical attack, for 10 seconds.",
    ranks: [
      { r: 1, lvl: 10, src: [{ n: 'Loup Alpha des prairies', en: 'Prairie Wolf Alpha', mob: '9-10', z: 'Mulgore', f: FACTION.HORDE }] },
      { r: 2, lvl: 24, src: [{ n: 'Ancien coyote des rochers', en: 'Elder Crag Coyote', mob: '39-40', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 40, src: [{ n: 'Loup Gangrepatte', en: 'Felpaw Wolf', mob: '47-48', z: 'Gangrebois', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 56, src: [{ n: 'Worg sombre', en: 'Dark Worg', mob: '64-65', z: 'Nagrand', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'eventrer', nameFr: 'Éventrer', nameEn: 'Gore',
    familiesFr: 'Sangliers, Ravageurs', familiesEn: 'Boars, Ravagers',
    descFr: "Encorne l'ennemi ; 50 % de chances d'infliger le double des dégâts.",
    descEn: 'Gores the enemy; 50% chance to deal double damage.',
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Sanglier tacheté redoutable', en: 'Dire Mottled Boar', mob: '6-7', z: 'Durotar', f: FACTION.HORDE }] },
      { r: 2, lvl: 8, src: [{ n: 'Sanglier tacheté corrompu', en: 'Corrupted Mottled Boar', mob: '10-11', z: 'Durotar', f: FACTION.HORDE }] },
      { r: 3, lvl: 16, src: [],
        noteFr: 'Aucune source Horde/Neutre connue à ce rang (zones Alliance uniquement) — le rang 2 reste utilisable en attendant.',
        noteEn: 'No known Horde/neutral source for this rank (Alliance zones only) — rank 2 still works in the meantime.' },
      { r: 4, lvl: 24, src: [],
        noteFr: 'Aucune source Horde/Neutre connue à ce rang (zone Alliance uniquement).',
        noteEn: 'No known Horde/neutral source for this rank (Alliance zone only).' },
      { r: 7, lvl: 48, src: [{ n: 'Sanglier cendre-crin', en: 'Ashmane Boar', mob: '48-49', z: 'Terres Foudroyées', f: FACTION.NEUTRE }] },
      { r: 8, lvl: 56, src: [{ n: 'Ravageur Roncecroc', en: 'Thornfang Ravager', mob: '62-63', z: 'Péninsule des Flammes infernales', f: FACTION.NEUTRE }] },
      { r: 9, lvl: 64, src: [{ n: 'Ravageur Arrachelame', en: 'Rip-Blade Ravager', mob: '63', z: 'Les Tranchantes', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'souffle-electrique', nameFr: 'Souffle Électrique', nameEn: 'Lightning Breath',
    familiesFr: 'Serpents des vents uniquement', familiesEn: 'Wind Serpents only',
    descFr: 'Frappe instantanément une cible de dégâts de Nature.',
    descEn: 'Instantly strikes a target for Nature damage.',
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Deviate Coiler Hatchling', mob: '11', z: 'Les Tarides', f: FACTION.HORDE, noFr: true }] },
      { r: 2, lvl: 12, src: [{ n: 'Grand faucon-tonnerre', en: 'Greater Thunderhawk', mob: '23-24', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 3, lvl: 24, src: [{ n: 'Washte Pawne', mob: '25', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 4, lvl: 36, src: [{ n: 'Hurleur des vallées', en: 'Vale Screecher', mob: '41-43', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 48, src: [{ n: 'Arash-ethis', mob: '36 (Rare)', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 60, src: [{ n: 'Serpent ailécaille', en: 'Scalewing Serpent', mob: '66-67', z: 'Les Tranchantes', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'crachat', nameFr: 'Crachat Empoisonné', nameEn: 'Poison Spit',
    familiesFr: 'Serpents uniquement', familiesEn: 'Serpents only',
    descFr: 'Crache du poison sur une cible, dégâts de Nature sur la durée.',
    descEn: 'Spits poison at a target, Nature damage over time.',
    ranks: [
      { r: 1, lvl: 15, src: [{ n: 'Aspic déviant', en: 'Deviate Adder', mob: '18-19 (Élite)', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE }] },
      { r: 2, lvl: 45, src: [{ n: 'Gardien Sandfury', en: 'Sandfury Guardian', mob: '45-46 (Élite)', z: "Zul'Farrak (instance, Tanaris)", f: FACTION.NEUTRE }] },
      { r: 3, lvl: 60, src: [{ n: 'Cobra glissentaille', en: 'Coilskar Cobra', mob: '68', z: "Vallée d'Ombrelune", f: FACTION.NEUTRE }] },
    ],
  },
];

// Capacités exclues volontairement : enseignées par n'importe quel dresseur
// de familier, sans avoir besoin d'apprivoiser une créature spécifique.
const EXCLUDED_TRAINER_ONLY = {
  fr: [
    'Grondement (Growl)', 'Endurance phénoménale (Great Stamina)',
    'Armure naturelle (Natural Armor)', 'Esquive (Avoidance)',
    "Résistance à l'Arcane, au Feu, au Givre, à la Nature, à l'Ombre",
    'Réflexes de cobra (Cobra Reflexes) — depuis le patch 2.1, accessible à tous chez le dresseur',
  ],
  en: [
    'Growl', 'Great Stamina', 'Natural Armor', 'Avoidance',
    'Arcane, Fire, Frost, Nature, and Shadow Resistance',
    'Cobra Reflexes — available to every pet from any trainer since patch 2.1',
  ],
};

if (typeof module !== 'undefined') {
  module.exports = { ABILITIES, FACTION, FACTION_LABEL, ZONE_EN, zoneName, mobLevelText, ZONES, EXCLUDED_TRAINER_ONLY };
}
