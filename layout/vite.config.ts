import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "layout",
      remotes: {
        "microfrontend-1": "http://localhost:5001/assets/remoteEntry.js",
        "microfrontend-2": "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
});