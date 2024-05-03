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
  plugins: [react(), dts()],
  resolve: {
    alias: [
      { find: "@lib", replacement: "/src/lib" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@types", replacement: "/src/types" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@validate", replacement: "/src/validate" },
      { find: "@test", replacement: "/src/test" },
    ],
  },
});
