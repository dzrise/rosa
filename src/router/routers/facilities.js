const facilitiesRoutes = {
	path: `/facilities`,
	component: () => import(/* webpackChunkName: "Facilities" */ "@/pages/Facilities/Facilities.vue"),
	name: "Удобства",
	children: [
		{
			path: ``,
			component: () => import(/* webpackChunkName: "FacilitiesList" */ "@/pages/Facilities/FacilitiesList.vue"),
			name: "Список удобств"
		},
		{
			path: `add-facility`,
			component: () => import(/* webpackChunkName: "AddFacility" */ "@/pages/Facilities/AddFacility.vue"),
			name: "Добавить удобство"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Facility" */ "@/pages/Facilities/Facility.vue"),
			name: "Удобство"
		}
	]
};
export { facilitiesRoutes };
