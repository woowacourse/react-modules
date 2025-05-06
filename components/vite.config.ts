import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
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
      output: {
        globals: { react: "React" },
      },
      plugins: [
        {
          name: "css-import-injector",
          generateBundle(options, bundle) {
            // 각 JS 청크에 대해 처리
            Object.keys(bundle).forEach((id) => {
              const chunk = bundle[id];
              // JS 파일에만 적용
              if (chunk.type === "chunk") {
                // 관련 CSS 파일 존재 여부 확인
                const cssFileName = id.replace(/\.js$/, ".css");
                if (bundle[cssFileName]) {
                  // JS 파일 시작 부분에 CSS import 구문 추가
                  chunk.code = `import './${cssFileName}';\n${chunk.code}`;
                }
              }
            });
          },
        },
      ],
    },
  },
});
