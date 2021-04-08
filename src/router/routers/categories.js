const categoriesRoutes = {
	path: "/category",
	component: () => import(/* webpackChunkName: "Categories" */ "@/pages/Categories/Categories.vue"),
	name: "Категории",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "CategoriesList" */ "@/pages/Categories/CategoriesList.vue"),
			name: "Список категорий"
		},
		{
			path: "addcategory",
			component: () => import(/* webpackChunkName: "AddCategory" */ "@/pages/Categories/AddCategory.vue"),
			name: "Добавить категорию"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Category" */ "@/pages/Categories/Category.vue"),
			name: "Категория"
		}
	]
};
export { categoriesRoutes };
