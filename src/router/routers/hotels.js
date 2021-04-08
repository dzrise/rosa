const hotelsRoutes = {
	path: "/hotels",
	component: () => import(/* webpackChunkName: "Hotels" */ "@/pages/Hotels/Hotels.vue"),
	name: "Отели",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "HotelsList" */ "@/pages/Hotels/HotelsList.vue"),
			name: "Список отелей"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Hotel" */ "@/pages/Hotels/Hotel.vue"),
			name: "Отель"
		},
		{
			path: "add-hotel",
			component: () => import(/* webpackChunkName: "AddHotel" */ "@/pages/Hotels/AddHotel.vue"),
			name: "Добавить отель"
		}
	]
};
export { hotelsRoutes };
