import { facilitiesMutationsNames } from "./mutationNames";

const { SET_TO_STATE_FACILITIES } = facilitiesMutationsNames;

export default {
	[SET_TO_STATE_FACILITIES]: (state, payload) => (state.facilities = payload)
};
