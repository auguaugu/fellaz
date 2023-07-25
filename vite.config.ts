import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import svelteSVG from 'vite-plugin-svelte-svg';
import * as path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    svelteSVG({
      svgoConfig: {}, // See https://github.com/svg/svgo#configuration
      requireSuffix: true, // Set false to accept '.svg' without the '?component'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
