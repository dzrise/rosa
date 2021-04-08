const baseRouteName = "place";

const placesEndpoints = {
	getPlaces: `/${baseRouteName}`,
	getPlace: id => `/${baseRouteName}/${id}`,
	addPlace: `/${baseRouteName}`,
	editPlace: id => `/${baseRouteName}/${id}`
};
export { placesEndpoints };
