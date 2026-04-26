# cs2tools.app website

The marketing site for [CS2 Tools by Jonny](https://github.com/Code-Jonny/CS2-Tools-By-Jonny), built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

## Project structure

```
astro/
├── public/              # static assets served at /
│   ├── logo.png
│   ├── logo.svg
│   └── assets/          # app screenshots
├── src/
│   ├── components/      # Astro components (Nav, Hero, Features, …)
│   ├── layouts/
│   │   └── Layout.astro # global styles + <head>
│   ├── pages/
│   │   └── index.astro  # the one page
│   └── scripts/
│       └── main.ts      # nav scroll, reveal-on-scroll, tabs, copy button
├── astro.config.mjs
└── package.json
```

## Local development

```bash
cd astro
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to astro/dist
npm run preview  # serve the production build locally
```

Requires Node 20+ (see `astro/.nvmrc`).

## Deployment

A push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies and runs `npm run build` inside `astro/`.
2. Uploads `astro/dist` as a GitHub Pages artifact.
3. Deploys it to GitHub Pages.

### One-time GitHub setup

1. In your repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` — the workflow does the rest.

### Custom domain

To use `cs2tools.app`:

1. Add the domain in **Settings → Pages → Custom domain**.
2. Configure DNS (a `CNAME` record at your registrar pointing to `<user>.github.io`).
3. The `site` field in `astro.config.mjs` is already set to `https://cs2tools.app`.

If you instead deploy to a project page (`https://<user>.github.io/<repo>/`), uncomment the `base` line in `astro.config.mjs` and set it to your repo name.
