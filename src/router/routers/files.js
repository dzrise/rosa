const filesRoutes = {
	path: "/files",
	component: () => import(/* webpackChunkName: "Baskets" */ "@/pages/FilesStorage/FilesStorage.vue"),
	name: "Хранилище файлов",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "Baskets" */ "@/pages/FilesStorage/FilesList.vue"),
			name: "Список файлов"
		}
		// {
		// 	path: ":id",
		// 	component: () => import(/* webpackChunkName: "Baskets" */ "@/pages/Cart/Cart.vue"),
		// 	name: "Корзина"
		// }
	]
};
export { filesRoutes };
