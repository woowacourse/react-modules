import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
        },
      },
    },
    commonjsOptions: {
      esmExternals: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src/lib'],
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
});
