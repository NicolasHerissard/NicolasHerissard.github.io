import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: 'https://github.com/NicolasHerissard/NicolasHerissard.github.io.git',
  outDir: 'dist',
});