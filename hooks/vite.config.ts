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
      include: ["src/lib*", "src/types"],
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@tests": path.resolve(__dirname, "./src/tests"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
