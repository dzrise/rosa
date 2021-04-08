const BASE_ROUTE_NAME = "/category";

const categoriesRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	CATEGORIES_LIST: `${BASE_ROUTE_NAME}`,
	ADD_CATEGORY: `${BASE_ROUTE_NAME}/addcategory`,
	CATEGORY: id => `${BASE_ROUTE_NAME}${id}`
};

export { categoriesRoutes };
