# PetopiaFR

Petit site de référence en français pour les chasseurs **Horde** de World of Warcraft Classic Anniversary / Burning Crusade : quelles capacités de familier peut-on apprendre en apprivoisant une créature, et où trouver une créature qui la connaît, en zone Horde ou neutre.

🔗 **Site en ligne :** https://zenqfr.github.io/petopiafr/

## Fonctionnalités

- Curseur de niveau (+ champ numérique) qui affiche : ce qui s'ouvre pile à ce niveau, ce qui arrive dans 1-2 niveaux, et le meilleur rang déjà accessible pour chaque capacité.
- Référence complète, triée alphabétiquement, avec tableau de tous les rangs.
- Uniquement les capacités **apprises par apprivoisage** (les capacités universelles enseignées par n'importe quel dresseur — Grondement, Endurance phénoménale, Armure naturelle, résistances, Esquive, Réflexes de cobra — sont volontairement exclues).
- Sources filtrées : uniquement zones Horde ou neutres/contestées.
- Thème clair/sombre (respecte les préférences système, réglable manuellement).
- Construit pour être utilisable au clavier et avec un lecteur d'écran (NVDA) : landmarks sémantiques, lien d'évitement, régions live, tableaux de données réels, contrastes AA.

## Sources

Données compilées et traduites depuis :
- [Petopia — Pet Family Abilities (Classic BC)](https://www.wow-petopia.com/classic_bc/abilities.php)
- [Ten Ton Hammer — WoW Hunter Guide: Pet Skill List](https://www.tentonhammer.com/guides/wow-hunter-guide-pet-skill-guide)

Les noms de créatures sont gardés en anglais (noms propres, tels qu'affichés dans les bases de données de référence) pour éviter toute traduction non vérifiée.

## Développement local

Site 100% statique, aucune dépendance de build : ouvrir `index.html` dans un navigateur, ou servir le dossier avec n'importe quel serveur statique.

```
python -m http.server 8000
```

## Licence des données

Site non affilié à Blizzard Entertainment. World of Warcraft est une marque de Blizzard Entertainment, Inc.
