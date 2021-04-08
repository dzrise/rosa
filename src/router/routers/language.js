const languageRoutes = {
	path: "/language",
	component: () => import(/* webpackChunkName: "Languages" */ "@/pages/Languages/Languages.vue"),
	name: "Языки",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "LanguagesList" */ "@/pages/Languages/LanguagesList.vue"),
			name: "Список языков"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Language" */ "@/pages/Languages/Language.vue"),
			name: "Язык"
		},
		{
			path: "addlanguage",
			component: () => import(/* webpackChunkName: "AddLanguage" */ "@/pages/Languages/AddLanguage.vue"),
			name: "Добавить язык"
		}
	]
};
export { languageRoutes };
