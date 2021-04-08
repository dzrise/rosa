const baseRouteName = "language";

const languagesEndpoints = {
	getLanguages: `/${baseRouteName}`,
	getLanguage: id => `/${baseRouteName}/${id}`,
	addLanguage: `/${baseRouteName}`,
	removeLanguage: id => `/${baseRouteName}/${id}`,
	editLanguage: id => `/${baseRouteName}/${id}`
};
export { languagesEndpoints };
