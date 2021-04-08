const baseRouteName = "category";
const categoriesEndpoints = {
	getCategories: `/${baseRouteName}`,
	getCurrentCategory: id => `/get/${id}`,
	addCategory: `/${baseRouteName}`,
	removeCategory: id => `/${baseRouteName}/${id}`,
	editCategory: id => `/${baseRouteName}/${id}`
};
export { categoriesEndpoints };
