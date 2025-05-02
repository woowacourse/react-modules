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
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // react/react-dom과 테스트 파일(.test/.spec, __tests__)은 external 처리
      external: (id: string) => {
        // 런타임 의존
        if (id === "react" || id === "react-dom") {
          return true;
        }

        // __tests__ 폴더 제외
        if (/__tests__/.test(id)) {
          return true;
        }

        // .test.ts, .test.tsx, .spec.ts, .spec.tsx 제외
        if (/\.test\.[jt]sx?$/.test(id) || /\.spec\.[jt]sx?$/.test(id)) {
          return true;
        }

        return false;
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        exports: "named",
      },
    },
  },

  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
    }),
  ],
});
