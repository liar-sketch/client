import react from "@vitejs/plugin-react";
import { setDefaultResultOrder } from "dns";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

setDefaultResultOrder("verbatim");

export default () => {
	return defineConfig({
		plugins: [svgr(), react()],
		resolve: {
			alias: [
				{ find: "@", replacement: resolve(__dirname, "src") },
				{ find: "src", replacement: resolve(__dirname, "src/") },
			],
		},
		server: {},
	});
};
