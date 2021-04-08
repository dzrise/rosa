const BASE_ROUTE_NAME = "/user";

const userRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	USERS_LIST: `${BASE_ROUTE_NAME}`,
	ADD_USER: `${BASE_ROUTE_NAME}/adduser`,
	USER: id => `${BASE_ROUTE_NAME}/${id}`
};

export { userRoutes };
