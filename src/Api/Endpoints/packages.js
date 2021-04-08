const baseRouteName = "bundle";
const baseRoutePackageItem = "bundle-item";

const packageEndpoints = {
	getPackages: `${baseRouteName}`,
	addPackage: `${baseRouteName}`,
	getPackage: id => `${baseRouteName}/${id}`,
	editPackage: id => `${baseRouteName}/${id}`,
	removePackage: id => `${baseRouteName}/${id}`,

	baseRoutePackageItem: `${baseRouteName}`,
	getPackageItems: `${baseRoutePackageItem}`,
	addPackageItem: `${baseRoutePackageItem}`
};
export { packageEndpoints };
