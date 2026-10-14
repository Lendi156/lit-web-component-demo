import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, 'src/index.js'),
        'react-components':  resolve(
          import.meta.dirname,
          'src/react-components/index.js'
        ),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@lit/react',
      ],
    },
  },
});