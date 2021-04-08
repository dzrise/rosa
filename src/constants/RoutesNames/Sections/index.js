const BASE_ROUTE_NAME = "/sections";

const sectionsRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	SECTIONS_LIST: `${BASE_ROUTE_NAME}`,
	ADD_SECTION: `${BASE_ROUTE_NAME}/addsection`,
	SECTION: id => `${BASE_ROUTE_NAME}${id}`
};

export { sectionsRoutes };
