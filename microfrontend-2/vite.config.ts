import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "microfrontend-2",
      filename: "remoteEntry.js",
      exposes: {
        "./VistaNueva": "./src/App.vue",
        "./ButtonCounter": "./src/components/ButtonCounter.vue"
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    modulePreload: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
  },
});
