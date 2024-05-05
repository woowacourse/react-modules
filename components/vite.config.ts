import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

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
    outDir: 'dist',
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: path.resolve(__dirname, 'src/lib'),
    }),
    libCss(),
  ],
});
