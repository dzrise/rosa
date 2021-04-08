const locationsRoutes = {
	path: "/locations",
	component: () => import(/* webpackChunkName: "Languages" */ "@/pages/Locations/Locations.vue"),
	name: "Локации",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "LocationsList" */ "@/pages/Locations/LocationsList.vue"),
			name: "Список локаций"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Location" */ "@/pages/Locations/Location.vue"),
			name: "Локация"
		},
		{
			path: "add-location",
			component: () => import(/* webpackChunkName: "AddLocation" */ "@/pages/Locations/AddLocation.vue"),
			name: "Добавить локацию"
		}
	]
};
export { locationsRoutes };
