# Hasanain Raza: Portfolio Frontend (React + Vite)

Black and red glass-style portfolio. Frontend only: it connects to your existing backend.

## Run it

```bash
npm install
cp .env.example .env     # then edit .env
npm run dev              # http://localhost:5173
npm run build            # production build in /dist
```

## Add your own files (in /public)

| File | What it is |
|---|---|
| `profile.png` | Your photo. A transparent PNG (background removed) looks best inside the glowing frame. |
| `resume.pdf` | The file behind the "Download Resume" buttons. |

Until you add `profile.png`, a placeholder silhouette is shown.

## Connect your backend

1. In `.env`, set `VITE_PROXY_TARGET` to where your backend runs (default `http://localhost:5000`).
   In development, the frontend forwards `/api/*` there, so you don't need CORS.
2. For production, set `VITE_API_URL` to the full API URL, e.g. `https://api.yoursite.com/api`.
   Your backend must allow your frontend's domain with CORS.
3. Open `src/services/api.js` and edit `ENDPOINTS` if your routes are named differently:

```js
export const ENDPOINTS = {
  projects: '/projects',
  services: '/services',
  experience: '/experience',
  certificates: '/certificates',
  contact: '/contact',   // POST { name, email, message }
};
```

Responses can be a plain array or wrapped (`{ data: [...] }`, `{ projects: [...] }`).
Field names are matched loosely (for example `title` or `name`, `liveUrl` or `demo`).
If yours differ, adjust the `normalize*` functions in the same file.

If the backend is off or returns nothing, the site shows the sample content from
`src/data/content.js`, so it never appears empty. Set `VITE_USE_BACKEND=false` to use only that file.

## Edit your content

Everything is in `src/data/content.js`: name, roles (typing effect), intro, email, location,
social links, tech stack, and the sample projects, experience and certificates.
**Replace the sample projects, experience and certificates with your real ones.**

## Structure

```
src/
  components/   Navbar, Hero, TechStrip, About, Services, Projects,
                Experience, Certificates, Contact, Footer
  hooks/        useResource (backend + fallback), useTypewriter, useActiveSection
  services/     api.js
  data/         content.js
  index.css     all styling and colors (see :root variables at the top)
```

Change the accent color by editing `--red` in `src/index.css`.
