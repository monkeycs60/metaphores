# Métaphore Coaching — consignes de contenu

Site de Christophe Jacques, coach professionnel à Bordeaux. Next.js, déployé sur Vercel.

## Quels textes utiliser

La version stable de l'ancien site, en ligne pendant des années, correspond au commit `0808280`, juste avant la refonte V2 (`5d7b370`, 30 septembre 2026). Christophe aime ces textes : ils priment sur les textes réécrits, sauf pour l'accueil et les pages nouvelles.

Les textes que Christophe fournit lui-même dans ses retours priment sur tout le reste, y compris sur l'ancien site et sur l'accueil.

| Page | Source des textes |
| --- | --- |
| Accueil (`src/app/page.tsx`) | Nouvelle version, avec les modifications demandées par Christophe le 16 octobre 2026 (titre, sous-titre, boutons, photo d'origine). |
| Jeunes & Parents | Nouvelle page : textes nouveaux, avec les corrections de Christophe. |
| Enseignants | Nouvelle page : textes de la première proposition V2, avec les corrections de Christophe. |
| Coaching (hub et 4 sous-pages) | Ancien site (`git show 0808280:src/app/coaching/individuel/page.tsx`), remplacé là où Christophe a fourni un nouveau texte le 16 octobre (listes Coaching professionnel et Coaching de vie, titres, Story). |
| Entreprises (RPS / QVCT) | Ancien site : `coaching/entreprise` et `coaching/collectif`, avec les textes réécrits par Christophe le 16 octobre (coaching de dirigeant, objectifs d'équipe). |
| Qui suis-je ? | Ancien site : `about`, avec les ajouts de Christophe (deux masters, professeur de yoga, paragraphe du grand-père). |
| Onglet « C'est quoi le coaching ? » (origines, vision, coach ou psy, déontologie) | Ancien site, textes intégraux : `coaching/vision`, `coaching/origines`, `coaching/psy`, `deontology` |
| Tarifs, Contact, Rendez-vous | Textes rédigés par Christophe dans ses retours du 13 et du 16 octobre 2026 |

Ne reformule pas un ancien texte sans demande explicite de Christophe. Toute URL remplacée reçoit une redirection 301 dans `next.config.js`.

## Règles fixées avec Christophe

- Aucune mention de gratuité : il ne propose pas d'échange gratuit. Le calendrier pointe vers l'événement Cal.com `seance-coaching`.
- En haut et en bas de chaque page particuliers : bouton jaune « Prendre rendez-vous », puis « Vous avez des questions ou besoin de précisions ? Contactez-moi ». Sur Entreprises : « Demandez un devis », puis « Besoin d'en parler de vive voix ? Contactez-nous ».
- Pas de point final dans les titres.
- Chaque picto de liste est choisi selon le sens de sa ligne, sans doublon dans une même liste.

## Retours de Christophe

Les synthèses page par page sont dans `~/Downloads/Metaphore-Coaching-retours-Christophe-2026-10-13.pdf` et `~/Downloads/Metaphore-Coaching-retours-Christophe-2026-10-16.pdf`.
