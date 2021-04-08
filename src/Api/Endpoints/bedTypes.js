const baseRouteName = "bed-type";

const bedTypesEndpoints = {
	getBedTypes: `/${baseRouteName}`,
	addBedType: `/${baseRouteName}`,
	getBedType: id => `/${baseRouteName}/${id}`,
	removeBedType: id => `/${baseRouteName}/${id}`,
	editBedType: id => `/${baseRouteName}/${id}`
};
export { bedTypesEndpoints };
