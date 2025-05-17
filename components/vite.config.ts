import * as path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
    commonjsOptions: {
      esmExternals: ['react']
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  },
  plugins: [
    react(),
    dts({
      include: ['src/lib'],
      tsconfigPath: 'tsconfig.app.json'
    })
  ]
});
