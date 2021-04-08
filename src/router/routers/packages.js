import { packagesRoutes as routes } from "@/constants/RoutesNames";

const { BASE, ADD_PACKAGE, ADD_PACKAGE_ELEMENT } = routes;
const packagesRoutes = {
	path: `${BASE}`,
	component: () => import(/* webpackChunkName: "Packages" */ "@/pages/Packages/Packages.vue"),
	name: "Пакеты",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "PackagesList" */ "@/pages/Packages/PackagesList.vue"),
			name: "Список пакетов"
		},
		{
			path: `addpackage`,
			component: () => import(/* webpackChunkName: "AddPackage" */ "@/pages/Packages/AddPackage.vue"),
			name: "Добавить пакет"
		},
		{
			path: `addPackageElement`,
			component: () => import(/* webpackChunkName: "AddPackageElement" */ "@/pages/Packages/AddPackageElement.vue"),
			name: "Добавить элемент пакета"
		},
		{
			path: `:id`,
			component: () => import(/* webpackChunkName: "Package" */ "@/pages/Packages/Package.vue"),
			name: "Пакет"
		}
	]
};
export { packagesRoutes };
