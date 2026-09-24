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
  (swap for Cloudflare Pages / another host as needed). Deploys on merge to main.

## Branching (PR only - main is NOT branch-protected)

`main` is deliberately NOT branch-protected (decided 2026-09-23), so a direct push would
succeed. Changes still ship via branch + PR - this flow is honor-system and not optional.
**Never run `git push origin main`.**

1. `git checkout main && git pull origin main` - start from an up-to-date main
2. `git checkout -b <type>/<slug>` - branch BEFORE staging, so local `main` never diverges
3. edit, then `git add -- <explicit paths>` - never `git add -A`
4. `git commit -m "<message>"`
5. `git push -u origin <branch>`
6. `gh pr create --base main --fill`
7. `gh pr checks <branch> --watch` - wait for the required checks
8. `gh pr merge <branch> --squash --delete-branch`
9. `git checkout main && git pull origin main`

Never merge while a required check is failing or pending, and never disable a check to
force a merge through - stop and report instead.

Merging deploys to GitHub Pages via `.github/workflows/deploy.yml` in repos generated from this
template. In the template repo itself the deploy job is skipped (it has no Pages site); the build
job still runs.

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
