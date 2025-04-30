import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "bunju-summit-modal",
      fileName: (format) => `index.${format === "es" ? "js" : format}`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "bunju-summit-modal.css"; // 이름 변경
          return assetInfo.name;
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx"],
      include: ["src/lib", "src/svg.d.ts"],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
