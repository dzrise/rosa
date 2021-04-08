import { bedTypesMutationsNames } from "./mutationNames";

const { SET_TO_STATE_BED_TYPES, SET_TO_STATE_BED_TYPE } = bedTypesMutationsNames;

export default {
	[SET_TO_STATE_BED_TYPES]: (state, payload) => (state.bedTypes = payload),
	[SET_TO_STATE_BED_TYPE]: (state, payload) => (state.bedType = payload)
};
