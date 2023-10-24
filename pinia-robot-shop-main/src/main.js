import "./assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { useProductStore } from "./stores/product";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

const productStore = useProductStore();

productStore.$subscribe((mutation, state) => {
    for (const propertyName in state) {
        const key = `robot-store-${mutation.storeId}-${propertyName}`;
       localStorage.setItem(key, JSON.stringify(state[propertyName]));
    }
});

app.mount("#app");
