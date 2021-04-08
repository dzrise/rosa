import { categoriesEndpoints } from "./catergories";
import { productEndpoints } from "./products";
import { cartEndpoints } from "./cart";
import { sectionEndpoints } from "./section";
import { userEndpoints } from "./user";
import { receiptEndpoints } from "./receipt";
import { languagesEndpoints } from "./languages";
import { placesEndpoints } from "./places";
import { packageEndpoints } from "./packages";
import { hotelsEndpoints } from "./hotels";
import { hotelDirectoriesEndpoints } from "./hotelDirectories";
import { bedTypesEndpoints } from "./bedTypes";
import { foodTypesEndpoints } from "./foodTypes";
import { hotelBrandsEndpoints } from "./hotelBrands";
import { facilitiesEndpoints } from "./facilities";
import { locationsEndpoints } from "./locations";

const BACKEND_ENDPOINTS = Object.freeze({
	categoriesEndpoints,
	productEndpoints,
	cartEndpoints,
	sectionEndpoints,
	userEndpoints,
	receiptEndpoints,
	languagesEndpoints,
	placesEndpoints,
	packageEndpoints,
	hotelsEndpoints,
	hotelDirectoriesEndpoints,
	bedTypesEndpoints,
	foodTypesEndpoints,
	hotelBrandsEndpoints,
	facilitiesEndpoints,
	locationsEndpoints
});

export { BACKEND_ENDPOINTS };
