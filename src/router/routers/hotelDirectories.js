const hotelDirectoriesRoutes = {
	path: "/hotel-directories",
	component: () => import(/* webpackChunkName: "HotelDirectories" */ "@/pages/HotelDirectories/HotelDirectories.vue"),
	name: "Справочники отелей",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "HotelDirectoriesList" */ "@/pages/HotelDirectories/HotelDirectoriesList.vue"),
			name: "Справочники отелей"
		},

		{
			path: "bed-types",
			component: () => import(/* webpackChunkName: "BedTypes" */ "@/pages/HotelDirectories/BedTypes/BedTypes.vue"),
			name: "Типы кроватей",
			children: [
				{
					path: "",
					component: () => import(/* webpackChunkName: "BedTypesList" */ "@/pages/HotelDirectories/BedTypes/BedTypesList.vue"),
					name: "Список типов кроватей"
				},
				{
					path: "add-bed-type",
					component: () => import(/* webpackChunkName: "AddBedType" */ "@/pages/HotelDirectories/BedTypes/AddBedType.vue"),
					name: "Добавить тип кровати"
				},
				{
					path: ":id",
					component: () => import(/* webpackChunkName: "BedType" */ "@/pages/HotelDirectories/BedTypes/BedType.vue"),
					name: "Тип кровати"
				}
			]
		},

		{
			path: "food-types",
			component: () => import(/* webpackChunkName: "FoodTypes" */ "@/pages/HotelDirectories/FoodTypes/FoodTypes.vue"),
			name: "Типы питания",
			children: [
				{
					path: "",
					component: () => import(/* webpackChunkName: "FoodTypesList" */ "@/pages/HotelDirectories/FoodTypes/FoodTypesList.vue"),
					name: "Список типов питания"
				},
				{
					path: "add-food-type",
					component: () => import(/* webpackChunkName: "AddFoodType" */ "@/pages/HotelDirectories/FoodTypes/AddFoodType.vue"),
					name: "Добавить тип питания"
				},
				{
					path: ":id",
					component: () => import(/* webpackChunkName: "FoodType" */ "@/pages/HotelDirectories/FoodTypes/FoodType.vue"),
					name: "Тип питания"
				}
			]
		},
		{
			path: "hotel-brands",
			component: () => import(/* webpackChunkName: "HotelBrands" */ "@/pages/HotelDirectories/HotelBrands/HotelBrands.vue"),
			name: "Бренды отелей",
			children: [
				{
					path: "",
					component: () => import(/* webpackChunkName: "HotelBrandsList" */ "@/pages/HotelDirectories/HotelBrands/HotelBrandsList.vue"),
					name: "Список брендов отелей"
				},
				{
					path: "add-hotel-brand",
					component: () => import(/* webpackChunkName: "AddHotelBrands" */ "@/pages/HotelDirectories/HotelBrands/AddHotelBrands.vue"),
					name: "Добавить бред отеля"
				},
				{
					path: ":id",
					component: () => import(/* webpackChunkName: "HotelBrand" */ "@/pages/HotelDirectories/HotelBrands/HotelBrand.vue"),
					name: "Бренд отеля"
				}
			]
		}
	]
};
export { hotelDirectoriesRoutes };
