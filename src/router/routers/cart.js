const cartRoutes = {
	path: "/cart",
	component: () => import(/* webpackChunkName: "Baskets" */ "@/pages/Cart/Carts.vue"),
	name: "Корзины",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "Baskets" */ "@/modules/Cart/CartList.vue"),
			name: "Список корзин"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Baskets" */ "@/pages/Cart/Cart.vue"),
			name: "Корзина"
		}
	]
};

export { cartRoutes };
