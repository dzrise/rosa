const baseRouteName = "product";

const productEndpoints = {
	getProducts: `/${baseRouteName}`,
	getProduct: id => `/${baseRouteName}/${id}`,
	addProduct: `/${baseRouteName}`,
	removeProduct: id => `/${baseRouteName}/${id}`,
	editProduct: id => `/${baseRouteName}/${id}`
};
export { productEndpoints };
