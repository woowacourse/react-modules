import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/lib/index.ts",
  },
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
});
