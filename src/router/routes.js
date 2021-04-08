import NotFound from "../pages/NotFound/NotFound";
import {
	homeRoute,
	sectionRoutes,
	categoriesRoutes,
	languageRoutes,
	productsRoutes,
	cartRoutes,
	filesRoutes,
	receiptRoutes,
	usersRoutes,
	packagesRoutes,
	hotelsRoutes,
	hotelDirectoriesRoutes,
	facilitiesRoutes,
	locationsRoutes
} from "@/router/routers";

const routes = [
	homeRoute,
	sectionRoutes,
	categoriesRoutes,
	languageRoutes,
	productsRoutes,
	hotelsRoutes,
	hotelDirectoriesRoutes,
	facilitiesRoutes,
	locationsRoutes,
	cartRoutes,
	filesRoutes,
	receiptRoutes,
	packagesRoutes,
	usersRoutes,
	{ path: "/404", name: "404", component: NotFound },
	{ path: "/:pathMatch(.*)*", redirect: "/404" },
	{ path: "/:pathMatch(.*)", redirect: "/404" }
];

export default routes;
// {
// 	path: "/order",
// 	component: () => import(/* webpackChunkName: "Orders" */ "@/pages/Orders/Orders.vue"),
// 	name: "Заказы",
// 	children: [
// 		{
// 			path: "",
// 			component: () => import(/* webpackChunkName: "Orders" */ "@/components/orders/OrdersList.vue"),
// 			name: "Список заказов"
// 		},
// 		{
// 			path: ":id",
// 			component: () => import(/* webpackChunkName: "Orders" */ "@/pages/Orders/Order.vue"),
// 			name: "Заказ"
// 		}
// 	]
// },
