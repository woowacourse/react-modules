import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx"],
      include: ["src/lib", "src/svg.d.ts"],
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist", // 이 옵션 추가
      insertTypesEntry: true, // 이 옵션 추가 (루트에 index.d.ts 파일 생성)
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
