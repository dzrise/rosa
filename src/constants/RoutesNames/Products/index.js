const BASE_ROUTE_NAME = "/product";

const productsRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	PRODUCTS_LIST: `${BASE_ROUTE_NAME}`,
	ADD_PRODUCT: `${BASE_ROUTE_NAME}/addproduct`,
	PRODUCT: id => `${BASE_ROUTE_NAME}/${id}`
};

export { productsRoutes };
