import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
        entryFileNames: 'lib/index.js',
        assetFileNames: 'lib/index.css',
        sourcemap: true,
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [
    react(),
    dts({
      include: ['src/lib'],
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
});
