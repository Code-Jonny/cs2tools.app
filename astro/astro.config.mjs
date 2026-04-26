// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Replace with your final domain. If deploying to GitHub Pages on a project
  // page (e.g. https://code-jonny.github.io/cs2tools-website), set `base` too.
  site: 'https://cs2tools.app',
  // base: '/cs2tools-website',
  output: 'static',
  build: {
    assets: 'assets',
  },
  compressHTML: true,
});
