# template-vite-tool

A **GitHub template repository** for new [Build with Baker](https://buildwithbaker.io)
tools. It starts every new tool compliant with the **Build with Baker Repo
Standard v2.0** — no build-setup or hygiene busywork.

## Use it

Click **"Use this template" → "Create a new repository"** on GitHub (or
`gh repo create buildwithbaker/<new-tool> --template buildwithbaker/template-vite-tool --public`),
then:

1. `npm install`
2. Rename the project in `package.json` and the `<title>` in `index.html`.
3. Rewrite `README.md` and `CLAUDE.md` for the new tool.
4. Build in `src/` — `src/main.js` + `src/styles/`.

```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build
```

## What's included (v2.0 baseline)

| Area | File(s) |
|------|---------|
| Vite app shell | `index.html`, `vite.config.js` (`base: './'`), `src/main.js`, `src/styles/main.css` |
| Ignore baseline | `.gitignore` (deps/build/env/OS/editor/`.claude/`) |
| Editor config | `.editorconfig` |
| Node pin | `.nvmrc` (20) + `engines` in `package.json` |
| Env example | `.env.example` (commit the example, never `.env.local`) |
| Agent guide | `CLAUDE.md` |
| Security policy | `SECURITY.md` (GitHub private vulnerability reporting) |
| License | `LICENSE` (MIT) |
| CI | `.github/workflows/ci.yml` (npm ci → lint-if-present → build) |
| Deploy | `.github/workflows/deploy.yml` (GitHub Pages) |
| Dependencies | `.github/dependabot.yml` (npm + actions, weekly) |

## Notes

- **Vanilla Vite** (no framework) is the default — the lightest base for a small
  tool. To use React: `npm i react react-dom` + `npm i -D @vitejs/plugin-react`,
  add the plugin to `vite.config.js`, and rename `main.js` → `main.jsx`.
- `base: './'` keeps asset paths relative so the build works at a domain root or
  a Pages project subpath. For a different host (e.g. Cloudflare Pages), swap or
  remove `deploy.yml`.
- After creating a repo from this template, enable branch protection (require the
  `build` check), secret scanning + push protection, and Dependabot alerts.

## License

[MIT](LICENSE) — © Adam Baker / Build with Baker.
