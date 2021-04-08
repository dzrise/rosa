const BASE_ROUTE_NAME = "/place";

const placesRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	PLACES_LIST: `${BASE_ROUTE_NAME}`,
	EDIT_PLACE: `${BASE_ROUTE_NAME}/editplace`,
	PLACE: id => `${BASE_ROUTE_NAME}${id}`
};

export { placesRoutes };
