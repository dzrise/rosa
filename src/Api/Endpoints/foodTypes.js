const baseRouteName = "food-type";

const foodTypesEndpoints = {
	getFoodTypes: `${baseRouteName}`,
	addFoodType: `${baseRouteName}`,
	getFoodType: id => `${baseRouteName}/${id}`,
	removeFoodType: id => `${baseRouteName}/${id}`,
	editFoodType: id => `${baseRouteName}/${id}`
};
export { foodTypesEndpoints };
