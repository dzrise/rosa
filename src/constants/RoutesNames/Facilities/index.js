const BASE_ROUTE_NAME = "/facilities";

const facilitiesRoutesNames = {
	BASE: `${BASE_ROUTE_NAME}`,
	FACILITIES_LIST: `${BASE_ROUTE_NAME}`,
	ADD_FACILITY: `${BASE_ROUTE_NAME}/add-facility`,
	FACILITY: id => `${BASE_ROUTE_NAME}${id}`
};

export { facilitiesRoutesNames };
