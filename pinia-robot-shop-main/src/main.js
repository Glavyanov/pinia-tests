import "@/assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import localStoragePlugin from "@/stores/local-storage-plugin";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(localStoragePlugin);
app.use(router);
app.use(pinia);

app.mount("#app");
