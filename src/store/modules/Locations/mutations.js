import { locationsMutationsNames } from "./mutationNames";

const { SET_TO_STATE_LOCATIONS } = locationsMutationsNames;

export default {
	[SET_TO_STATE_LOCATIONS]: (state, payload) => (state.locations = payload)
};
