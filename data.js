/* PetopiaFR — données de capacités de familier apprivoisables
 * Compilé depuis wow-petopia.com (classic_bc) et le guide de dressage
 * Ten Ton Hammer (WoW Hunter Pet Skill List), filtré aux sources
 * Horde et zones neutres uniquement.
 *
 * Les noms de créatures (PNJ) sont gardés en anglais : ce sont des noms
 * propres et c'est ainsi qu'ils apparaissent dans les bases de données
 * de référence (Wowhead, Petopia) — pas de traduction non vérifiée.
 * Les noms de zones sont en français officiel.
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
const ABILITIES = [
  {
    id: 'morsure',
    nameFr: 'Morsure',
    nameEn: 'Bite',
    families: 'La plupart des familles (sauf Crabes, Hiboux, Scorpides)',
    desc: "Mord l'ennemi et inflige des dégâts physiques.",
    ranks: [
      { r: 1, lvl: 1, src: [
        { n: 'Prairie Wolf', z: 'Mulgore', f: FACTION.HORDE },
        { n: 'Dreadmaw Crocolisk', z: 'Durotar (rivière Fury Sud)', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 8, src: [
        { n: 'Highmane Prowler', z: 'Les Tarides', f: FACTION.HORDE },
        { n: 'Crocolisk', z: 'Durotar', f: FACTION.HORDE },
        { n: 'Worg', z: 'Clairières de Tirisfal', f: FACTION.HORDE },
      ]},
      { r: 3, lvl: 16, src: [
        { n: 'Ghost Paw Runner', z: 'Orneval', f: FACTION.NEUTRE },
        { n: 'Bloodsnout Worg', z: 'Forêt des Pins Argentés', f: FACTION.HORDE },
        { n: 'Besseleth', z: 'Serres Rocheuses', f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 24, src: [
        { n: 'Ghostpaw Alpha', z: 'Orneval', f: FACTION.NEUTRE },
        { n: 'Ghamoo-Ra', z: 'Blackfathom Deep (instance, Orneval)', f: FACTION.NEUTRE },
      ]},
      { r: 5, lvl: 32, src: [
        { n: 'Darkfang Lurker', z: "Marécage d'Âprefange", f: FACTION.NEUTRE },
        { n: 'Turtle', z: 'Mille Pointes (les Salines)', f: FACTION.NEUTRE },
      ]},
      { r: 6, lvl: 40, src: [
        { n: 'Longtooth Runner', z: 'Féralas', f: FACTION.NEUTRE },
        { n: 'Witherbark Broodguard', z: 'Les Hinterlands', f: FACTION.NEUTRE },
      ]},
      { r: 7, lvl: 48, src: [
        { n: 'Felpaw Ravager', z: 'Gangrebois', f: FACTION.NEUTRE },
        { n: 'Diseased Wolf', z: "Maleterres de l'Ouest", f: FACTION.NEUTRE },
      ]},
      { r: 8, lvl: 56, src: [
        { n: 'Bloodaxe Warg', z: 'Spires de Blackrock (instance)', f: FACTION.NEUTRE },
        { n: 'Thornfang Venomspitter', z: 'Péninsule des Flammes infernales', f: FACTION.NEUTRE },
      ]},
      { r: 9, lvl: 64, src: [
        { n: 'Rema the Den Mother', z: 'Les Tranchantes', f: FACTION.NEUTRE },
        { n: 'Dreadfang Lurker', z: 'Forêt de Terokkar', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'griffe',
    nameFr: 'Griffe',
    nameEn: 'Claw',
    families: 'Ours, Oiseaux charognards, Félins, Crabes, Hiboux, Raptors, Scorpides, Traqueurs de distorsion',
    desc: "Griffe l'ennemi et inflige des dégâts physiques.",
    ranks: [
      { r: 1, lvl: 1, src: [
        { n: 'Pygmy Surf Crawler', z: 'Durotar', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 8, src: [
        { n: 'Encrusted Surf Crawler', z: 'Durotar', f: FACTION.HORDE },
        { n: 'Scorpion', z: 'Orgrimmar', f: FACTION.HORDE },
        { n: 'Bear', z: 'Forêt des Pins Argentés', f: FACTION.HORDE },
      ]},
      { r: 3, lvl: 16, src: [
        { n: 'Ashenvale Bear', z: 'Orneval', f: FACTION.NEUTRE },
        { n: 'Gray Bear', z: 'Contreforts de Hautebrande', f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 24, src: [
        { n: 'Elder Ashenvale Bear', z: 'Orneval', f: FACTION.NEUTRE },
        { n: 'Scorpion', z: 'Désolace', f: FACTION.NEUTRE },
      ]},
      { r: 5, lvl: 32, src: [
        { n: 'Scorpashi Lasher', z: 'Désolace', f: FACTION.NEUTRE },
      ]},
      { r: 6, lvl: 40, src: [
        { n: 'Ironfur Bear', z: 'Féralas', f: FACTION.NEUTRE },
        { n: 'Scorpid Hunter', z: 'Tanaris', f: FACTION.NEUTRE },
      ]},
      { r: 7, lvl: 48, src: [
        { n: 'Deathlash Scorpid', z: 'Steppes Ardentes', f: FACTION.NEUTRE },
        { n: 'Shardtooth Bear', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
      { r: 8, lvl: 56, src: [
        { n: 'Diseased Grizzly', z: "Maleterres de l'Ouest", f: FACTION.NEUTRE },
        { n: 'Winterspring Screecher', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
      { r: 9, lvl: 64, src: [
        { n: 'Greater Windroc', z: 'Nagrand', f: FACTION.NEUTRE },
        { n: 'Ripfang Lynx', z: 'Raz-de-Néant', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'charge',
    nameFr: 'Charge',
    nameEn: 'Charge',
    families: 'Sangliers uniquement',
    desc: "Charge une cible, l'immobilise 1 sec et augmente la puissance d'attaque du prochain coup.",
    ranks: [
      { r: 1, lvl: 1, src: [
        { n: 'Mottled Boar', z: 'Durotar', f: FACTION.HORDE },
        { n: 'Battleboar', z: 'Mulgore', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 12, src: [], note: "Aucune source Horde/Neutre connue à ce rang (uniquement en zones Alliance) — le rang 1 reste utilisable en attendant." },
      { r: 3, lvl: 24, src: [
        { n: "Agam'ar", z: 'Razorfen Kraul (instance, Les Tarides)', f: FACTION.HORDE },
      ]},
      { r: 5, lvl: 48, src: [
        { n: 'Ashmane Boar', z: 'Terres Foudroyées', f: FACTION.NEUTRE },
      ]},
      { r: 6, lvl: 60, src: [
        { n: 'Plagued Swine', z: "Maleterres de l'Est", f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'terrer',
    nameFr: 'Se Recroqueviller',
    nameEn: 'Cower',
    families: 'Toutes les familles',
    desc: "Le familier se fait tout petit : aucun dégât infligé, mais son aggro chute fortement.",
    ranks: [
      { r: 1, lvl: 5, src: [
        { n: 'Plainstrider', z: 'Les Tarides', f: FACTION.HORDE },
        { n: 'Durotar Tiger', z: 'Durotar', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 15, src: [
        { n: 'Ornery Plainstrider', z: 'Les Tarides', f: FACTION.HORDE },
        { n: 'Twilight Runner', z: 'Serres Rocheuses', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 25, src: [
        { n: 'Highland Strider', z: "Hautes-terres d'Arathi", f: FACTION.NEUTRE },
        { n: 'Young Stranglethorn Tiger', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 35, src: [
        { n: 'Ridge Stalker', z: 'Terres Ingrates', f: FACTION.NEUTRE },
      ]},
      { r: 5, lvl: 45, src: [
        { n: 'Noxious Plaguebat', z: "Maleterres de l'Est", f: FACTION.NEUTRE },
      ]},
      { r: 6, lvl: 55, src: [
        { n: 'Monstrous Plaguebat', z: "Maleterres de l'Est", f: FACTION.NEUTRE },
        { n: 'Frostsaber Cub', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
      { r: 7, lvl: 65, src: [
        { n: 'Grovestalker Lynx', z: 'Les Tranchantes', f: FACTION.NEUTRE },
        { n: 'Ripfang Lynx', z: 'Raz-de-Néant', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'ruee',
    nameFr: 'Ruée',
    nameEn: 'Dash',
    families: 'Sangliers, Félins, Hyènes, Raptors, Ravageurs, Grand-marcheurs, Loups',
    desc: 'Augmente la vitesse de déplacement du familier pendant 15 secondes.',
    ranks: [
      { r: 1, lvl: 30, src: [
        { n: 'Crag Coyote', z: 'Terres Ingrates', f: FACTION.NEUTRE },
        { n: 'Bonepaw Hyena', z: 'Désolace', f: FACTION.NEUTRE },
      ]},
      { r: 2, lvl: 40, src: [
        { n: 'Longtooth Runner', z: 'Féralas', f: FACTION.NEUTRE },
        { n: 'Blisterpaw Hyena', z: 'Tanaris', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 50, src: [
        { n: 'Vilebranch Raiding Wolf', z: 'Les Hinterlands', f: FACTION.NEUTRE },
        { n: 'Frostsaber Stalker', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'pique',
    nameFr: 'Piqué',
    nameEn: 'Dive',
    families: 'Chauves-souris, Oiseaux charognards, Dracofaucons, Raies-du-Néant, Hiboux, Serpents des vents',
    desc: 'Augmente la vitesse de déplacement du familier pendant 15 secondes.',
    ranks: [
      { r: 1, lvl: 30, src: [
        { n: 'Buzzard', z: "Hautes-terres d'Arathi", f: FACTION.NEUTRE },
        { n: 'Dread Flyer', z: 'Désolace', f: FACTION.NEUTRE },
      ]},
      { r: 2, lvl: 40, src: [
        { n: 'Vale Screecher', z: 'Féralas', f: FACTION.NEUTRE },
        { n: 'Ironbeak Owl', z: 'Gangrebois', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 50, src: [
        { n: 'Ironbeak Hunter', z: 'Gangrebois', f: FACTION.NEUTRE },
        { n: 'Winterspring Owl', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'traque',
    nameFr: 'Traque',
    nameEn: 'Prowl',
    families: 'Félins uniquement',
    desc: "Le familier passe en discrétion (vitesse réduite) ; la prochaine attaque depuis la discrétion inflige un bonus de dégâts.",
    ranks: [
      { r: 1, lvl: 30, src: [
        { n: 'Ridge Stalker', z: 'Terres Ingrates', f: FACTION.NEUTRE },
        { n: 'Shadowmaw Panther', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
        { n: 'Shadow Panther', z: 'Marais des Chagrins', f: FACTION.NEUTRE },
      ]},
      { r: 2, lvl: 40, src: [
        { n: 'Ridge Stalker Patriarch', z: 'Terres Ingrates', f: FACTION.NEUTRE },
        { n: 'Elder Shadowmaw Panther', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 50, src: [
        { n: 'Jaguero Stalker', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
        { n: 'Frostsaber Stalker', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'poison-scorpide',
    nameFr: 'Poison de scorpide',
    nameEn: 'Scorpid Poison',
    families: 'Scorpides uniquement',
    desc: 'Inflige des dégâts de Nature sur la durée, cumulable jusqu\'à 5 fois.',
    ranks: [
      { r: 1, lvl: 8, src: [
        { n: 'Silithid Creeper', z: 'Les Tarides', f: FACTION.HORDE },
        { n: 'Venomtail Scorpid', z: 'Durotar', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 24, src: [
        { n: 'Scorpashi Snapper', z: 'Désolace', f: FACTION.NEUTRE },
        { n: 'Scorpid Terror', z: 'Mille Pointes', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 40, src: [
        { n: 'Stonelash Scorpid', z: 'Silithus', f: FACTION.NEUTRE },
        { n: 'Scorpid Hunter', z: 'Tanaris', f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 56, src: [
        { n: 'Fireclaw Scorpid', z: 'Steppes Ardentes', f: FACTION.NEUTRE },
        { n: 'Stonelash Flayer', z: 'Silithus', f: FACTION.NEUTRE },
      ]},
      { r: 5, lvl: 64, src: [
        { n: 'Scorpid Bonecrawler', z: 'Forêt de Terokkar', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'cri-strident',
    nameFr: 'Cri Strident',
    nameEn: 'Screech',
    families: 'Chauves-souris, Oiseaux charognards, Hiboux',
    desc: 'Blesse une cible et réduit la puissance d\'attaque des ennemis proches pendant 4 secondes.',
    ranks: [
      { r: 1, lvl: 8, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (uniquement Westfall, zone Alliance).' },
      { r: 2, lvl: 24, src: [
        { n: 'Dread Ripper', z: 'Désolace', f: FACTION.NEUTRE },
        { n: 'Salt Flats Vulture', z: 'Mille Pointes', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 48, src: [
        { n: 'Ironbeak Owl', z: 'Gangrebois', f: FACTION.NEUTRE },
        { n: 'Carrion Vulture', z: "Maleterres de l'Ouest", f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 56, src: [
        { n: 'Monstrous Plaguebat', z: "Maleterres de l'Est", f: FACTION.NEUTRE },
        { n: 'Winterspring Screecher', z: "Berceau de l'Hiver", f: FACTION.NEUTRE },
      ]},
      { r: 5, lvl: 64, src: [
        { n: 'Greater Windroc', z: 'Nagrand', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'carapace',
    nameFr: 'Carapace Protectrice',
    nameEn: 'Shell Shield',
    families: 'Tortues uniquement',
    desc: 'Réduit les dégâts subis de 50 %, mais ralentit les attaques du familier de 43 %, pendant 12 secondes.',
    ranks: [
      { r: 1, lvl: 20, src: [
        { n: 'Snapjaw', z: 'Contreforts de Hautebrande', f: FACTION.NEUTRE },
        { n: 'Giant Surf Glider', z: 'Tanaris', f: FACTION.NEUTRE },
        { n: 'Kresh', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE },
      ]},
    ],
  },
  {
    id: 'pietinement',
    nameFr: 'Piétinement Tonnerre',
    nameEn: 'Thunderstomp',
    families: 'Gorilles uniquement',
    desc: 'Dégâts de Nature à tous les ennemis dans 8 mètres ; génère beaucoup d\'aggro.',
    ranks: [
      { r: 1, lvl: 30, src: [
        { n: 'Jungle Thunderer', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
        { n: 'Mistvale Gorilla', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
      ]},
      { r: 2, lvl: 40, src: [
        { n: 'Groddoc Thunderer', z: 'Féralas', f: FACTION.NEUTRE },
        { n: 'Elder Mistvale Gorilla', z: 'Vallée de Strangleronce', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 50, src: [
        { n: "Un'Goro Thunderer", z: "Cratère d'Un'Goro", f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'distorsion',
    nameFr: 'Distorsion',
    nameEn: 'Warp',
    families: 'Traqueurs de distorsion uniquement',
    desc: "Téléporte le familier sur un ennemi à 30 mètres et lui donne 50 % de chance d'esquiver la prochaine attaque de mêlée.",
    ranks: [
      { r: 1, lvl: 15, src: [
        { n: 'Warp Stalker', z: 'Forêt de Terokkar', f: FACTION.NEUTRE },
      ], note: "⚠️ Capacité utilisable dès le niveau 15, mais les traqueurs de distorsion vivent en Outreterre (zone de haut niveau, 60+) : en pratique on ne peut l'apprendre que bien plus tard." },
    ],
  },
  {
    id: 'souffle-feu',
    nameFr: 'Souffle de Feu',
    nameEn: 'Fire Breath',
    families: 'Dracofaucons uniquement',
    desc: 'Souffle de feu en cône devant le familier, dégâts de Feu sur la durée.',
    ranks: [
      { r: 1, lvl: 5, src: [
        { n: 'Crazed Dragonhawk', z: 'Bois des Chants éternels', f: FACTION.HORDE },
        { n: 'Feral Dragonhawk Hatchling', z: 'Bois des Chants éternels', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 60, src: [
        { n: 'Eclipson Dragonhawk', z: "Vallée d'Ombrelune", f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'hurlement',
    nameFr: 'Hurlement Furieux',
    nameEn: 'Furious Howl',
    families: 'Loups uniquement',
    desc: "Les membres du groupe à 15 mètres reçoivent un bonus de dégâts sur leur prochaine attaque physique, pendant 10 secondes.",
    ranks: [
      { r: 1, lvl: 10, src: [
        { n: 'Prairie Wolf Alpha', z: 'Mulgore', f: FACTION.HORDE },
        { n: 'Worg', z: 'Forêt des Pins Argentés', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 24, src: [
        { n: 'Ghostpaw Alpha', z: 'Orneval', f: FACTION.NEUTRE },
        { n: 'Elder Crag Coyote', z: 'Terres Ingrates', f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 40, src: [
        { n: 'Felpaw Wolf', z: 'Gangrebois', f: FACTION.NEUTRE },
        { n: 'Silvermane Wolf', z: 'Les Hinterlands', f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 56, src: [
        { n: 'Bloodaxe Worg', z: 'Spires de Blackrock (instance)', f: FACTION.NEUTRE },
        { n: 'Dark Worg', z: 'Nagrand', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'eventrer',
    nameFr: 'Éventrer',
    nameEn: 'Gore',
    families: 'Sangliers, Ravageurs',
    desc: "Encorne l'ennemi ; 50 % de chances d'infliger le double des dégâts.",
    ranks: [
      { r: 1, lvl: 1, src: [
        { n: 'Dire Mottled Boar', z: 'Durotar', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 8, src: [
        { n: 'Corrupted Mottled Boar', z: 'Durotar', f: FACTION.HORDE },
      ]},
      { r: 3, lvl: 16, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (zones Alliance uniquement) — le rang 2 reste utilisable en attendant.' },
      { r: 4, lvl: 24, src: [], note: 'Aucune source Horde/Neutre connue à ce rang (zone Alliance uniquement).' },
      { r: 7, lvl: 48, src: [
        { n: 'Ashmane Boar', z: 'Terres Foudroyées', f: FACTION.NEUTRE },
      ]},
      { r: 8, lvl: 56, src: [
        { n: 'Plagued Swine', z: "Maleterres de l'Est", f: FACTION.NEUTRE },
        { n: 'Thornfang Ravager', z: 'Péninsule des Flammes infernales', f: FACTION.NEUTRE },
      ]},
      { r: 9, lvl: 64, src: [
        { n: 'Rip-Blade Ravager', z: 'Les Tranchantes', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'souffle-electrique',
    nameFr: 'Souffle Électrique',
    nameEn: 'Lightning Breath',
    families: 'Serpents des vents uniquement',
    desc: 'Frappe instantanément une cible de dégâts de Nature.',
    ranks: [
      { r: 1, lvl: 1, src: [
        { n: 'Deviate Coiler Hatchling', z: 'Les Tarides', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 12, src: [
        { n: 'Greater Thunderhawk', z: 'Les Tarides', f: FACTION.HORDE },
        { n: 'Thunderhawk Cloudscraper', z: 'Les Tarides', f: FACTION.HORDE },
      ]},
      { r: 3, lvl: 24, src: [
        { n: 'Washte Pawne', z: 'Les Tarides', f: FACTION.HORDE },
        { n: 'Cloud Serpent', z: 'Mille Pointes', f: FACTION.NEUTRE },
      ]},
      { r: 4, lvl: 36, src: [
        { n: 'Vale Screecher', z: 'Féralas', f: FACTION.NEUTRE },
      ]},
      { r: 5, lvl: 48, src: [
        { n: 'Arash-etish', z: 'Féralas', f: FACTION.NEUTRE },
      ]},
      { r: 6, lvl: 60, src: [
        { n: 'Scalewing Serpent', z: 'Les Tranchantes', f: FACTION.NEUTRE },
        { n: 'Swiftwing Shredder', z: 'Raz-de-Néant', f: FACTION.NEUTRE },
      ]},
    ],
  },
  {
    id: 'crachat',
    nameFr: 'Crachat Empoisonné',
    nameEn: 'Poison Spit',
    families: 'Serpents uniquement',
    desc: 'Crache du poison sur une cible, dégâts de Nature sur la durée.',
    ranks: [
      { r: 1, lvl: 15, src: [
        { n: 'Deviate Adder', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE },
        { n: 'Deviate Viper', z: 'Wailing Caverns (instance, Les Tarides)', f: FACTION.HORDE },
      ]},
      { r: 2, lvl: 45, src: [
        { n: 'Sandfury Guardian', z: "Zul'Farrak (instance, Tanaris)", f: FACTION.NEUTRE },
      ]},
      { r: 3, lvl: 60, src: [
        { n: 'Coilskar Cobra', z: "Vallée d'Ombrelune", f: FACTION.NEUTRE },
        { n: "Razzashi Cobra", z: "Zul'Gurub (instance, Vallée de Strangleronce)", f: FACTION.NEUTRE },
      ]},
    ],
  },
];

// Capacités exclues volontairement : enseignées par n'importe quel dresseur
// de familier, sans avoir besoin d'apprivoiser une créature spécifique.
const EXCLUDED_TRAINER_ONLY = [
  'Grondement (Growl)', 'Endurance phénoménale (Great Stamina)',
  'Armure naturelle (Natural Armor)', 'Esquive (Avoidance)',
  'Résistance à l\'Arcane, au Feu, au Givre, à la Nature, à l\'Ombre',
  'Réflexes de cobra (Cobra Reflexes) — depuis le patch 2.1, accessible à tous chez le dresseur',
];

if (typeof module !== 'undefined') module.exports = { ABILITIES, FACTION, EXCLUDED_TRAINER_ONLY };
