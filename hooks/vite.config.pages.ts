import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react-modules/',
  plugins: [react()],
  build: {
    outDir: 'dist-app'
  }
});
