const usersRoutes = {
	path: "/user",
	component: () => import(/* webpackChunkName: "Users" */ "@/pages/Users/Users.vue"),
	name: "Пользователи",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "Users" */ "@/modules/Users/UsersList.vue"),
			name: "Список пользователей"
		},
		{
			path: "adduser",
			component: () => import(/* webpackChunkName: "Users" */ "@/pages/Users/AddUsers.vue"),
			name: "Добавить пользователя"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Users" */ "@/pages/Users/User.vue"),
			name: "Пользователь"
		}
	]
};

export { usersRoutes };
