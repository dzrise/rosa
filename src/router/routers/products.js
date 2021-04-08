const productsRoutes = {
	path: "/product",
	component: () => import(/* webpackChunkName: "Products" */ "@/pages/Products/Products.vue"),
	name: "Продукты",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "Products" */ "@/pages/Products/ProductList.vue"),
			name: "Список продуктов"
		},
		{
			path: "addproduct",
			component: () => import(/* webpackChunkName: "Products" */ "@/pages/Products/AddProduct.vue"),
			name: "Добавить продукт"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Products" */ "@/pages/Products/Product.vue"),
			name: "Продукт"
		}
	]
};
export { productsRoutes };
