const baseRouteName = "facility";
const facilitiesEndpoints = {
	getFacilities: `${baseRouteName}`,
	addFacility: `${baseRouteName}`,
	getFacility: id => `${baseRouteName}/${id}`,
	removeFacility: id => `${baseRouteName}/${id}`,
	editFacility: id => `${baseRouteName}/${id}`
};
export { facilitiesEndpoints };
