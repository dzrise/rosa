const BASE_ROUTE_NAME = "/language";

const languagesRoutes = {
	BASE: `${BASE_ROUTE_NAME}`,
	LANGUAGES_LIST: `${BASE_ROUTE_NAME}`,
	ADD_LANGUAGE: `${BASE_ROUTE_NAME}/addlanguage`,
	EDIT_LANGUAGE: `${BASE_ROUTE_NAME}/editlanguage`,
	LANGUAGE: id => `${BASE_ROUTE_NAME}${id}`
};

export { languagesRoutes };
