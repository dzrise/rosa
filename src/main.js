import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App";
import router from "./router";
import store from "./store/store";
import { clickOutside } from "@/directives/outsideClick";
import { numberOnly } from "@/directives/numberOnly";
import { filters } from "@/filters";
import "./assets/css/index.scss";

const app = createApp(App)
	.use(store)
	.use(router)
	.use(Toast, {});
app.directive("click-outside", clickOutside);
app.directive("number-only", numberOnly);
app.config.globalProperties.$filters = filters;

app.mount("#app");
