const baseRouteName = "hotel";

const hotelsEndpoints = {
	getHotels: `${baseRouteName}`,
	getHotelTypes: `${baseRouteName}/type/all`,
	getHotel: id => `${baseRouteName}/${id}`,
	addHotel: `${baseRouteName}`,
	removeHotel: id => `${baseRouteName}/${id}`,
	editHotel: id => `${baseRouteName}/${id}`
};
export { hotelsEndpoints };
