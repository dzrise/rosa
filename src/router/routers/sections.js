const sectionRoutes = {
	path: "/sections",
	component: () => import(/* webpackChunkName: "Categories" */ "@/pages/Sections/Sections.vue"),
	name: "Секции",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "CategoriesList" */ "@/pages/Sections/SectionList.vue"),
			name: "Список секций"
		},
		{
			path: "addsection",
			component: () => import(/* webpackChunkName: "AddCategory" */ "@/pages/Sections/AddSection.vue"),
			name: "Добавить секцию"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Category" */ "@/pages/Sections/Section.vue"),
			name: "Секция"
		}
	]
};
export { sectionRoutes };
