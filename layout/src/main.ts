import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Asegúrate de importar tu router aquí

(async () => {
  createApp(App).use(router).mount("#app");
})();
