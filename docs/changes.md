# Changes

## 2026-05-27 — SEO improvements

- `index.html` — added meta description, author, canonical, Open Graph + Twitter card tags, theme-color, apple-touch-icon, manifest link, JSON-LD Person schema, and a more descriptive `<title>`.
- `public/manifest.json` — replaced CRA defaults (`React App` / `Create React App Sample`) with real name, short_name, description, scope, and matching theme/background colors.
- `public/sitemap.xml` — new file; lists all SPA routes with priorities and change frequencies.
- `public/robots.txt` — added explicit `Allow: /` and `Sitemap:` reference.
- `src/shared/hooks/usePageMeta.js` — new tiny hook that sets per-route `<title>` and updates the description meta, restoring prior values on unmount.
- `src/components/LandingPage.jsx`, `Projects.jsx`, `Music.jsx`, `AntiResume.jsx`, `Minesweeper.jsx`, `Cat.jsx`, `ChessChoice.jsx`, `ChessSingle.jsx`, `TicTacToe.jsx`, `Chatroom.jsx`, `projects/PennyBot.jsx` — applied `usePageMeta` so each route now has its own crawlable title and description (Googlebot sees them after JS render).
- `src/components/Headshot.jsx` — improved alt text on the headshot ("Justin Luce headshot") and blanked decorative googly-eye image alts so screen readers skip them.
