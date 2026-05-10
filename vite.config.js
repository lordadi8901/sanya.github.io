import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        collection: resolve(__dirname, 'collection.html'),
        product: resolve(__dirname, 'product.html'),
      },
    },
  },
});
