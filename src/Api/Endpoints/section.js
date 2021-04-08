const baseRouteName = "section";

const sectionEndpoints = {
	getSections: `/${baseRouteName}`,
	getSection: id => `/${baseRouteName}/${id}`,
	removeSection: id => `/${baseRouteName}/${id}`,
	editSection: id => `/${baseRouteName}/${id}`
};
export { sectionEndpoints };
