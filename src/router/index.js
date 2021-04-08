import { createRouter, createWebHistory } from "vue-router";
import { createBreadcrumbs } from "@/services";
import routes from "./routes";

const router = createRouter({
	history: createWebHistory(),
	routes
});
createBreadcrumbs(router);
export default router;
