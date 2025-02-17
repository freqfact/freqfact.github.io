// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://freqfact.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Ensure assets are properly handled
      assetsDir: '_assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
          chunkFileNames: 'assets/[name].js',
          entryFileNames: 'assets/[name].js',
        },
      },
    },
  },
  output: 'static'
});