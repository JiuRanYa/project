import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createApp, markRaw } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";

import "./assets/index.postcss";
import "ant-design-vue/dist/reset.css";

const head = createHead();
const app = createApp(App);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(Antd);
app.use(pinia);
app.use(router);
app.use(head);

app.mount("#app");
