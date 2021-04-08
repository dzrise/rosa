const baseRouteNameFoodType = "food-type";
const baseRouteNameBedType = "bed-type";
const baseRouteNameHotelsBrands = "brand";

const hotelDirectoriesEndpoints = {
	getFoodTypes: `/${baseRouteNameFoodType}`,

	getBedTypes: `/${baseRouteNameBedType}`,
	addBedType: `/${baseRouteNameBedType}`,
	getBedType: id => `/${baseRouteNameBedType}/${id}`,
	removeBedType: id => `/${baseRouteNameBedType}/${id}`,
	editBedType: id => `/${baseRouteNameBedType}/${id}`,

	getHotelsBrands: `/${baseRouteNameHotelsBrands}`
};
export { hotelDirectoriesEndpoints };
