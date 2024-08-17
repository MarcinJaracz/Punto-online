import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    outDir: 'dist', // Możesz wskazać inny katalog na wyjście
    rollupOptions: {
      external: ['electron'], // Jeśli chcesz uniknąć bundlingu Electron
    },
  },
});
