import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.ts"),
			name: "index",
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format}.js`,
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
			insertTypesEntry: true,
			outDir: "dist/types",
		}),
	],
});
