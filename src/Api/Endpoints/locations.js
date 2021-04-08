const baseRouteName = "location";

const locationsEndpoints = {
	getLocations: `${baseRouteName}`,
	getLocation: id => `${baseRouteName}/${id}`,
	addLocation: `${baseRouteName}`,
	removeLocation: id => `${baseRouteName}/${id}`,
	editLocation: id => `${baseRouteName}/${id}`
};
export { locationsEndpoints };
