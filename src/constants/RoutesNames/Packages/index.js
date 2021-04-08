const BASE_ROUTE_NAME = "/packages";

const packagesRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	PACKAGES_LIST: `${BASE_ROUTE_NAME}`,
	EDIT_PACKAGE: `${BASE_ROUTE_NAME}/editplace`,
	ADD_PACKAGE: `${BASE_ROUTE_NAME}/addpackage`,
	ADD_PACKAGE_ELEMENT: `${BASE_ROUTE_NAME}/addPackageElement`,
	PACKAGE: id => `${BASE_ROUTE_NAME}${id}`
};

export { packagesRoutes };
