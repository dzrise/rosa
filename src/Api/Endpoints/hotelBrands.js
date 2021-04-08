const baseRouteName = "brand";

const hotelBrandsEndpoints = {
	getHotelBrands: `${baseRouteName}`,
	addHotelBrand: `${baseRouteName}`,
	getHotelBrand: id => `${baseRouteName}/${id}`,
	removeHotelBrand: id => `${baseRouteName}/${id}`,
	editHotelBrand: id => `${baseRouteName}/${id}`
};
export { hotelBrandsEndpoints };
