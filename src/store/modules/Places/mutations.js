import { placesMutationsNames } from "@/store/modules/Places/mutationNames";

const { SET_TO_STATE_CURRENT_PLACE, CLEAR_PLACE, SET_TO_STATE_PLACES } = placesMutationsNames;
export default {
	[SET_TO_STATE_PLACES]: (state, payload) => (state.places = payload),
	[SET_TO_STATE_CURRENT_PLACE]: (state, payload) => (state.currentPlace = payload),
	[CLEAR_PLACE]: state => (state.currentPlace = null)
};
