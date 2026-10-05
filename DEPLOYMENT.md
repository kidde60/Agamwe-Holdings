# AGAMWE Website — Deployment

## Routing
The existing React Router structure is preserved:
- `/`
- `/about`
- `/services`
- `/projects`
- `/projects/:slug`
- `/team`
- `/insights`
- `/contact`

## Vercel
1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel detects Vite automatically.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. `vercel.json` already rewrites SPA routes to `index.html`.

## Netlify
1. Push the project to GitHub.
2. Import it into Netlify.
3. `netlify.toml` already contains the build command and SPA redirect.

## Local production check
```bash
npm install
npm run build
npm run preview
```
