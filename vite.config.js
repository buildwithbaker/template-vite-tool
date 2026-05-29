import { defineConfig } from 'vite';

// base: './' keeps asset URLs relative, so the build works whether it is served
// from a domain root or a GitHub Pages project subpath (/<repo>/). Change to
// '/<repo>/' only if you need absolute paths for a project-site deploy.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
  },
});
