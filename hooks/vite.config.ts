import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/hooks/index.js'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
        entryFileNames: 'hooks/index.js',
        assetFileNames: 'hooks/index.css',
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
      include: ['src/hooks'],
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
