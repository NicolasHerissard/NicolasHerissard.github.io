import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const GITHUB_URL = "https://NicolasHerissard.github.io"
const GITHUB_REPO = "https://github.com/NicolasHerissard/NicolasHerissard.github.io.git"

// https://astro.build/config
export default defineConfig({
  site: GITHUB_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
    port: 4321,
  }
});