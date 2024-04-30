import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  plugins: [react(), dts(), svgr()],
  resolve: {
    alias: [
      { find: '@lib', replacement: '/src/lib' },
      { find: '@assets', replacement: '/src/assets' },
    ],
  },
});
