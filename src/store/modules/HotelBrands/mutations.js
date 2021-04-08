import { hotelBrandsTypesMutationsNames } from "./mutationNames";

const { SET_TO_STATE_HOTEL_BRANDS, SET_TO_STATE_HOTEL_BRAND } = hotelBrandsTypesMutationsNames;

export default {
	[SET_TO_STATE_HOTEL_BRANDS]: (state, payload) => (state.hotelBrands = payload),
	[SET_TO_STATE_HOTEL_BRAND]: (state, payload) => (state.hotelBrand = payload)
};
