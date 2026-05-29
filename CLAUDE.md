# CLAUDE.md - template-vite-tool

See @README.md for what this project is and why.

> This is the Build with Baker **v2.0 starter template**. After generating a new
> repo from it: rename the project in `package.json` + `index.html` `<title>`,
> rewrite this file's specifics, and replace the README.

## Build, test, deploy
- `npm run dev`      # Vite dev server at localhost:5173
- `npm run build`    # production build to dist/
- `npm run preview`  # serve the production build locally
- `npm run lint`     # must pass before any commit (add a linter if/when needed)
- Deploy: GitHub Pages auto-deploys from main via .github/workflows/deploy.yml
  (swap for Cloudflare Pages / another host as needed).

## File organization (root is locked)
Do not add files to the repo root unless they are in the permitted-root-files
table of the Build with Baker Repo Standard v2.0. Before creating any new file:
1) identify which folder it belongs in, 2) create it if missing, 3) add it there.
- New CSS -> src/styles/; new JS -> src/; new image -> public/;
  build script -> scripts/; planning/research doc -> docs/internal/.

## Code style
- ES modules only (import/export), never require()
- 2-space indent

## Do not touch
- dist/ is generated - never edit by hand.
- .env.local holds local secrets - never commit or print it (commit .env.example only).
