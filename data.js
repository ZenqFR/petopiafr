/* PetopiaFR — données de capacités de familier apprivoisables
 * Compilé depuis wow-petopia.com (classic_bc), le guide de dressage
 * Ten Ton Hammer (WoW Hunter Pet Skill List), et Wowhead (fiches EN + FR
 * croisées par identifiant de PNJ) pour les noms de créatures et leur
 * niveau approximatif.
 *
 * Chaque créature a été recherchée sur Wowhead (fiche anglaise) puis
 * vérifiée sur la fiche française du même identifiant. Quand Wowhead ne
 * propose pas de fiche française exploitable pour un PNJ, le nom reste en
 * anglais et `noFr: true` est posé — c'est signalé dans l'interface au
 * lieu d'inventer une traduction non vérifiée.
 */

const FACTION = {
  HORDE: 'Horde',
  NEUTRE: 'Neutre',
};

// Uniquement les capacités qu'on APPREND en apprivoisant une créature qui
// les connaît déjà. Les capacités universelles enseignées par n'importe
// quel dresseur de familier (Grondement, Endurance phénoménale, Armure
// naturelle, les 5 résistances, Esquive, Réflexes de cobra) sont exclues :
// elles ne nécessitent aucun apprivoisage particulier.
//
// Pour chaque capacité :
//   - `families` = quelles familles de familiers PEUVENT apprendre ce sort
//   - `ranks[].src` = sur QUELLE créature précise (avec son niveau et sa
//     zone) on peut apprivoiser/rechercher ce rang précis
const ABILITIES = [
  {
    id: 'morsure',
    nameFr: 'Morsure',
    nameEn: 'Bite',
    families: 'La plupart des familles (sauf Crabes, Hiboux, Scorpides)',
    desc: "Mord l'ennemi et inflige des dégâts physiques.",
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Loup des prairies', en: 'Prairie Wolf', mob: '5-6', z: 'Mulgore', f: FACTION.HORDE }] },
      { r: 2, lvl: 8, src: [{ n: "Gueule d'acier des oasis", en: 'Oasis Snapjaw', mob: '15-16', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 3, lvl: 16, src: [{ n: 'Flaire-sang worg', en: 'Bloodsnout Worg', mob: '16-17', z: 'Forêt des Pins Argentés', f: FACTION.HORDE }] },
      { r: 4, lvl: 24, src: [{ n: 'Ghamoo-ra', en: 'Ghamoo-Ra', mob: 'mini-boss', z: 'Blackfathom Deep (instance, Orneval)', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 32, src: [{ n: 'Coyote des rochers', en: 'Crag Coyote', mob: '35-36', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 40, src: [{ n: 'Messager Longues-dents', en: 'Longtooth Runner', mob: '40-41', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 7, lvl: 48, src: [{ n: 'Ravageur Gangrepatte', en: 'Felpaw Ravager', mob: '51-52', z: 'Gangrebois', f: FACTION.NEUTRE }] },
      { r: 8, lvl: 56, src: [{ n: 'Worg Bloodaxe', en: 'Bloodaxe Worg', mob: '56-60', z: 'Spires de Blackrock (instance)', f: FACTION.NEUTRE }] },
      { r: 9, lvl: 64, src: [{ n: 'Dreadfang Lurker', mob: '63-64', z: 'Forêt de Terokkar', f: FACTION.NEUTRE, noFr: true }] },
    ],
  },
  {
    id: 'griffe',
    nameFr: 'Griffe',
    nameEn: 'Claw',
    families: 'Ours, Oiseaux charognards, Félins, Crabes, Hiboux, Raptors, Scorpides, Traqueurs de distorsion',
    desc: "Griffe l'ennemi et inflige des dégâts physiques.",
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Pygmy Surf Crawler', mob: '5-6', z: 'Durotar', f: FACTION.HORDE, noFr: true }] },
      { r: 2, lvl: 8, src: [{ n: 'Encrusted Surf Crawler', mob: '9-10', z: 'Durotar', f: FACTION.HORDE, noFr: true }] },
      { r: 3, lvl: 16, src: [{ n: "Ours d'Ashenvale", en: 'Ashenvale Bear', mob: '21-22', z: 'Orneval', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 24, src: [{ n: "Vieil ours d'Ashenvale", en: 'Elder Ashenvale Bear', mob: '25-26', z: 'Orneval', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 32, src: [{ n: 'Flagellant scorpashi', en: 'Scorpashi Lasher', mob: '34-35', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 40, src: [{ n: 'Ours Ferpoil', en: 'Ironfur Bear', mob: '41-42', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 7, lvl: 48, src: [{ n: 'Scorpide fouet-mortel', en: 'Deathlash Scorpid', mob: '54-55', z: 'Steppes Ardentes', f: FACTION.NEUTRE }] },
      { r: 8, lvl: 56, src: [{ n: "Hurleur du Berceau-de-l'Hiver", en: 'Winterspring Screecher', mob: '57-59', z: "Berceau de l'Hiver", f: FACTION.NEUTRE }] },
      { r: 9, lvl: 64, src: [{ n: 'Greater Windroc', mob: '66-67', z: 'Nagrand', f: FACTION.NEUTRE, noFr: true }] },
    ],
  },
  {
    id: 'charge',
    nameFr: 'Charge',
    nameEn: 'Charge',
    families: 'Sangliers uniquement',
    desc: "Charge une cible, l'immobilise 1 sec et augmente la puissance d'attaque du prochain coup.",
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Sanglier de guerre', en: 'Battleboar', mob: '3-4', z: 'Mulgore', f: FACTION.HORDE }] },
      { r: 2, lvl: 12, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (uniquement en zones Alliance) — le rang 1 reste utilisable en attendant.' },
      { r: 3, lvl: 24, src: [{ n: "Agam'ar", mob: '24-25 (Élite)', z: 'Razorfen Kraul (instance, Les Tarides)', f: FACTION.HORDE }] },
      { r: 5, lvl: 48, src: [{ n: 'Ashmane Boar', mob: '48-49', z: 'Terres Foudroyées', f: FACTION.NEUTRE, noFr: true }] },
      { r: 6, lvl: 60, src: [{ n: 'Plagued Swine', mob: '60', z: "Maleterres de l'Est", f: FACTION.NEUTRE, noFr: true }] },
    ],
  },
  {
    id: 'terrer',
    nameFr: 'Se Recroqueviller',
    nameEn: 'Cower',
    families: 'Toutes les familles',
    desc: "Le familier se fait tout petit : aucun dégât infligé, mais son aggro chute fortement.",
    ranks: [
      { r: 1, lvl: 5, src: [{ n: 'Grand trotteur des plaines', en: 'Greater Plainstrider', mob: '11-12', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 2, lvl: 15, src: [{ n: 'Trotteur des plaines hargneux', en: 'Ornery Plainstrider', mob: '16-17', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 3, lvl: 25, src: [{ n: 'Jeune tigre de Strangleronce', en: 'Young Stranglethorn Tiger', mob: '30-31', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 35, src: [{ n: 'Ridge Stalker', mob: '36-37', z: 'Terres Ingrates', f: FACTION.NEUTRE, noFr: true }] },
      { r: 5, lvl: 45, src: [{ n: 'Noxious Plaguebat', mob: '54-56', z: "Maleterres de l'Est", f: FACTION.NEUTRE, noFr: true }] },
      { r: 6, lvl: 55, src: [{ n: 'Jeune sabre-de-givre', en: 'Frostsaber Cub', mob: '55-56', z: "Berceau de l'Hiver", f: FACTION.NEUTRE }] },
      { r: 7, lvl: 65, src: [{ n: 'Lynx traquebosquet', en: 'Grovestalker Lynx', mob: '65-66', z: 'Les Tranchantes', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'ruee',
    nameFr: 'Ruée',
    nameEn: 'Dash',
    families: 'Sangliers, Félins, Hyènes, Raptors, Ravageurs, Grand-marcheurs, Loups',
    desc: 'Augmente la vitesse de déplacement du familier pendant 15 secondes.',
    ranks: [
      { r: 1, lvl: 30, src: [{ n: 'Coyote des rochers', en: 'Crag Coyote', mob: '35-36', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Messager Longues-dents', en: 'Longtooth Runner', mob: '40-41', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 50, src: [{ n: "Loup d'attaque Vilebranch", en: 'Vilebranch Raiding Wolf', mob: '50-51 (Élite)', z: 'Les Hinterlands', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'pique',
    nameFr: 'Piqué',
    nameEn: 'Dive',
    families: 'Chauves-souris, Oiseaux charognards, Dracofaucons, Raies-du-Néant, Hiboux, Serpents des vents',
    desc: 'Augmente la vitesse de déplacement du familier pendant 15 secondes.',
    ranks: [
      { r: 1, lvl: 30, src: [{ n: "Volant de l'effroi", en: 'Dread Flyer', mob: '36-37', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Vale Screecher', mob: '41-43', z: 'Féralas', f: FACTION.NEUTRE, noFr: true }] },
      { r: 3, lvl: 50, src: [{ n: 'Chasseur Bec-de-fer', en: 'Ironbeak Hunter', mob: '50-51', z: 'Gangrebois', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'traque',
    nameFr: 'Traque',
    nameEn: 'Prowl',
    families: 'Félins uniquement',
    desc: "Le familier passe en discrétion (vitesse réduite) ; la prochaine attaque depuis la discrétion inflige un bonus de dégâts.",
    ranks: [
      { r: 1, lvl: 30, src: [{ n: 'Shadowmaw Panther', mob: '37-38', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE, noFr: true }] },
      { r: 2, lvl: 40, src: [{ n: 'Elder Shadowmaw Panther', mob: '42-43', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE, noFr: true }] },
      { r: 3, lvl: 50, src: [{ n: 'Traqueur jaguero', en: 'Jaguero Stalker', mob: '50', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'poison-scorpide',
    nameFr: 'Poison de scorpide',
    nameEn: 'Scorpid Poison',
    families: 'Scorpides uniquement',
    desc: "Inflige des dégâts de Nature sur la durée, cumulable jusqu'à 5 fois.",
    ranks: [
      { r: 1, lvl: 8, src: [{ n: 'Scorpide queue-venin', en: 'Venomtail Scorpid', mob: '9-10', z: 'Durotar', f: FACTION.HORDE }] },
      { r: 2, lvl: 24, src: [{ n: 'Scorpashi mordeur', en: 'Scorpashi Snapper', mob: '30-31', z: 'Désolace', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 40, src: [{ n: 'Scorpide chasseur', en: 'Scorpid Hunter', mob: '40-41', z: 'Tanaris', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 56, src: [{ n: 'Scorpide queue-de-feu', en: 'Firetail Scorpid', mob: '56-57', z: 'Steppes Ardentes', f: FACTION.NEUTRE }] },
      { r: 5, lvl: 64, src: [{ n: 'Scorpide osserampant', en: 'Scorpid Bonecrawler', mob: '64-65', z: 'Forêt de Terokkar', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'cri-strident',
    nameFr: 'Cri Strident',
    nameEn: 'Screech',
    families: 'Chauves-souris, Oiseaux charognards, Hiboux',
    desc: "Blesse une cible et réduit la puissance d'attaque des ennemis proches pendant 4 secondes.",
    ranks: [
      { r: 1, lvl: 8, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (uniquement Marche de l\'Ouest, zone Alliance).' },
      { r: 2, lvl: 24, src: [{ n: 'Dread Ripper', mob: '39-40', z: 'Désolace', f: FACTION.NEUTRE, noFr: true }] },
      { r: 3, lvl: 48, src: [{ n: 'Chouette Bec-de-fer', en: 'Ironbeak Owl', mob: '48-49', z: 'Gangrebois', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 56, src: [{ n: "Hurleur du Berceau-de-l'Hiver", en: 'Winterspring Screecher', mob: '57-59', z: "Berceau de l'Hiver", f: FACTION.NEUTRE }] },
      { r: 5, lvl: 64, src: [{ n: 'Greater Windroc', mob: '66-67', z: 'Nagrand', f: FACTION.NEUTRE, noFr: true }] },
    ],
  },
  {
    id: 'carapace',
    nameFr: 'Carapace Protectrice',
    nameEn: 'Shell Shield',
    families: 'Tortues uniquement',
    desc: "Réduit les dégâts subis de 50 %, mais ralentit les attaques du familier de 43 %, pendant 12 secondes.",
    ranks: [
      { r: 1, lvl: 20, src: [{ n: 'Kresh', mob: '20 (Élite)', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE }] },
    ],
  },
  {
    id: 'pietinement',
    nameFr: 'Piétinement Tonnerre',
    nameEn: 'Thunderstomp',
    families: 'Gorilles uniquement',
    desc: "Dégâts de Nature à tous les ennemis dans 8 mètres ; génère beaucoup d'aggro.",
    ranks: [
      { r: 1, lvl: 30, src: [{ n: 'Foudroyeur de la Jungle', en: 'Jungle Thunderer', mob: '37-38', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE }] },
      { r: 2, lvl: 40, src: [{ n: 'Foudroyeur Groddoc', en: 'Groddoc Thunderer', mob: '49-50', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 50, src: [{ n: "Foudroyeur d'Un'Goro", en: "Un'Goro Thunderer", mob: '52-53', z: "Cratère d'Un'Goro", f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'distorsion',
    nameFr: 'Distorsion',
    nameEn: 'Warp',
    families: 'Traqueurs de distorsion uniquement',
    desc: "Téléporte le familier sur un ennemi à 30 mètres et lui donne 50 % de chance d'esquiver la prochaine attaque de mêlée.",
    ranks: [
      { r: 1, lvl: 15, src: [{ n: 'Warp Stalker', mob: '63-64', z: 'Forêt de Terokkar', f: FACTION.NEUTRE, noFr: true }],
        note: "⚠️ Capacité utilisable dès le niveau 15, mais les traqueurs de distorsion vivent en Outreterre (zone de haut niveau) : en pratique on ne peut l'apprendre que bien plus tard." },
    ],
  },
  {
    id: 'souffle-feu',
    nameFr: 'Souffle de Feu',
    nameEn: 'Fire Breath',
    families: 'Dracofaucons uniquement',
    desc: 'Souffle de feu en cône devant le familier, dégâts de Feu sur la durée.',
    ranks: [
      { r: 1, lvl: 5, src: [{ n: 'Crazed Dragonhawk', mob: '7-8', z: 'Bois des Chants éternels', f: FACTION.HORDE, noFr: true }] },
      { r: 2, lvl: 60, src: [{ n: 'Eclipsion Dragonhawk', mob: '67-68', z: "Vallée d'Ombrelune", f: FACTION.NEUTRE, noFr: true }] },
    ],
  },
  {
    id: 'hurlement',
    nameFr: 'Hurlement Furieux',
    nameEn: 'Furious Howl',
    families: 'Loups uniquement',
    desc: "Les membres du groupe à 15 mètres reçoivent un bonus de dégâts sur leur prochaine attaque physique, pendant 10 secondes.",
    ranks: [
      { r: 1, lvl: 10, src: [{ n: 'Loup Alpha des prairies', en: 'Prairie Wolf Alpha', mob: '9-10', z: 'Mulgore', f: FACTION.HORDE }] },
      { r: 2, lvl: 24, src: [{ n: 'Ancien coyote des rochers', en: 'Elder Crag Coyote', mob: '39-40', z: 'Terres Ingrates', f: FACTION.NEUTRE }] },
      { r: 3, lvl: 40, src: [{ n: 'Loup Gangrepatte', en: 'Felpaw Wolf', mob: '47-48', z: 'Gangrebois', f: FACTION.NEUTRE }] },
      { r: 4, lvl: 56, src: [{ n: 'Worg sombre', en: 'Dark Worg', mob: '64-65', z: 'Nagrand', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'eventrer',
    nameFr: 'Éventrer',
    nameEn: 'Gore',
    families: 'Sangliers, Ravageurs',
    desc: "Encorne l'ennemi ; 50 % de chances d'infliger le double des dégâts.",
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Dire Mottled Boar', mob: '6-7', z: 'Durotar', f: FACTION.HORDE, noFr: true }] },
      { r: 2, lvl: 8, src: [{ n: 'Corrupted Mottled Boar', mob: '10-11', z: 'Durotar', f: FACTION.HORDE, noFr: true }] },
      { r: 3, lvl: 16, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (zones Alliance uniquement) — le rang 2 reste utilisable en attendant.' },
      { r: 4, lvl: 24, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (zone Alliance uniquement).' },
      { r: 7, lvl: 48, src: [{ n: 'Ashmane Boar', mob: '48-49', z: 'Terres Foudroyées', f: FACTION.NEUTRE, noFr: true }] },
      { r: 8, lvl: 56, src: [{ n: 'Ravageur Roncecroc', en: 'Thornfang Ravager', mob: '62-63', z: 'Péninsule des Flammes infernales', f: FACTION.NEUTRE }] },
      { r: 9, lvl: 64, src: [{ n: 'Ravageur Arrachelame', en: 'Rip-Blade Ravager', mob: '63', z: 'Les Tranchantes', f: FACTION.NEUTRE }] },
    ],
  },
  {
    id: 'souffle-electrique',
    nameFr: 'Souffle Électrique',
    nameEn: 'Lightning Breath',
    families: 'Serpents des vents uniquement',
    desc: 'Frappe instantanément une cible de dégâts de Nature.',
    ranks: [
      { r: 1, lvl: 1, src: [{ n: 'Deviate Coiler Hatchling', mob: '11', z: 'Les Tarides', f: FACTION.HORDE, noFr: true }] },
      { r: 2, lvl: 12, src: [{ n: 'Grand faucon-tonnerre', en: 'Greater Thunderhawk', mob: '23-24', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 3, lvl: 24, src: [{ n: 'Washte Pawne', mob: '25', z: 'Les Tarides', f: FACTION.HORDE }] },
      { r: 4, lvl: 36, src: [{ n: 'Vale Screecher', mob: '41-43', z: 'Féralas', f: FACTION.NEUTRE, noFr: true }] },
      { r: 5, lvl: 48, src: [{ n: 'Arash-ethis', mob: '36 (Rare)', z: 'Féralas', f: FACTION.NEUTRE }] },
      { r: 6, lvl: 60, src: [{ n: 'Scalewing Serpent', mob: '66-67', z: 'Les Tranchantes', f: FACTION.NEUTRE, noFr: true }] },
    ],
  },
  {
    id: 'crachat',
    nameFr: 'Crachat Empoisonné',
    nameEn: 'Poison Spit',
    families: 'Serpents uniquement',
    desc: 'Crache du poison sur une cible, dégâts de Nature sur la durée.',
    ranks: [
      { r: 1, lvl: 15, src: [{ n: 'Deviate Adder', mob: '18-19 (Élite)', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE, noFr: true }] },
      { r: 2, lvl: 45, src: [{ n: 'Gardien Sandfury', en: 'Sandfury Guardian', mob: '45-46 (Élite)', z: "Zul'Farrak (instance, Tanaris)", f: FACTION.NEUTRE }] },
      { r: 3, lvl: 60, src: [{ n: 'Cobra glissentaille', en: 'Coilskar Cobra', mob: '68', z: "Vallée d'Ombrelune", f: FACTION.NEUTRE }] },
    ],
  },
];

// Capacités exclues volontairement : enseignées par n'importe quel dresseur
// de familier, sans avoir besoin d'apprivoiser une créature spécifique.
const EXCLUDED_TRAINER_ONLY = [
  'Grondement (Growl)', 'Endurance phénoménale (Great Stamina)',
  'Armure naturelle (Natural Armor)', 'Esquive (Avoidance)',
  "Résistance à l'Arcane, au Feu, au Givre, à la Nature, à l'Ombre",
  'Réflexes de cobra (Cobra Reflexes) — depuis le patch 2.1, accessible à tous chez le dresseur',
];

if (typeof module !== 'undefined') module.exports = { ABILITIES, FACTION, EXCLUDED_TRAINER_ONLY };
