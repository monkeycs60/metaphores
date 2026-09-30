This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Direction artistique — version éditoriale

Le site conserve le logo et sa palette : blanc chaud `#FFFDF9`, marine `#0D0630`, jaune `#FFBA08`, bleu pâle `#B4D6E6`. Yeseva One pour les titres, Inter pour la lecture. Photographies naturelles, lumière douce, sable, bois et lin ; pas de texte intégré ni de visages identifiables dans les images générées. Le portrait de Christophe est une photo existante.

| Famille | Sources | Fichiers servis | Format et usage |
| --- | --- | --- | --- |
| Paysage d’accueil | `assets-src/editorial/horizon.png` | `public/v3/horizon.webp` | 1536 × 1024, WebP, recadrage plein écran adapté au mobile |
| Échange individuel | `assets-src/editorial/conversation.png` | `public/v3/conversation.webp` | 1280 × 960, WebP, pages d’offres et contact |
| Accompagnement collectif | `assets-src/editorial/collectif.png` | `public/v3/collectif.webp` | 1280 × 960, WebP, entreprises et accueil |

Les prompts sont conservés dans `assets-src/editorial/README.md`. Les textes des accompagnements sont dans `src/lib/accompagnements.ts`, leur composition dans `src/components/v2/ServicePage.tsx`. Les témoignages complets restent disponibles à la demande sur l’accueil.
