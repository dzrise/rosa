import { hotelsMutationsNames } from "./mutationNames";

const { SET_TO_STATE_HOTELS, SET_TO_STATE_HOTEL_TYPES } = hotelsMutationsNames;

export default {
	[SET_TO_STATE_HOTELS]: (state, payload) => (state.hotels = payload),
	[SET_TO_STATE_HOTEL_TYPES]: (state, payload) => (state.hotelTypes = payload)
};
