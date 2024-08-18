import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'main.js'), 
      external: ['electron'],
    },
  },
});
