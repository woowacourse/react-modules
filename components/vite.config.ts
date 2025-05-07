import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
    }),
    cssInjectedByJs({
      relativeCSSInjection: true,
    }),
  ],

  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "index",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React" } },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 0,
  },
});
