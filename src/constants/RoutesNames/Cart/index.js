const BASE_ROUTE_NAME = "/cart";

const cartRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	// CATEGORIES_LIST: `${BASE_ROUTE_NAME}`,
	// ADD_CATEGORY: `${BASE_ROUTE_NAME}/addcategory`,
	CART: id => `${BASE_ROUTE_NAME}${id}`
};

export { cartRoutes };
