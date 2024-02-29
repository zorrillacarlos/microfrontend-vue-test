import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "microfrontend-1",
      filename: "remoteEntry.js",
      exposes: {
        "./NuevoComponente": "./src/components/NuevoComponente.vue",
        "./VistaMF1": "./src/App.vue",
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
    port: 5001,
  },
});
