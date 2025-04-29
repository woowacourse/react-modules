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
  // CSS 모듈 설정 추가
  css: {
    modules: {
      // 클래스 이름이 예측 가능한 형식으로 생성되도록 설정
      generateScopedName: "[name]__[local]",
      // 또는 더 간단하게: generateScopedName: '[local]'
    },
  },
  plugins: [
    react(),
    dts({
      include: ["src/lib", "src/components"],
      outDir: "dist",
      insertTypesEntry: true,
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
