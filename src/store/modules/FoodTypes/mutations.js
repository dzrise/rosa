import { foodTypesMutationsNames } from "./mutationNames";

const { SET_TO_STATE_FOOD_TYPES, SET_TO_STATE_FOOD_TYPE } = foodTypesMutationsNames;

export default {
	[SET_TO_STATE_FOOD_TYPES]: (state, payload) => (state.foodTypes = payload),
	[SET_TO_STATE_FOOD_TYPE]: (state, payload) => (state.foodType = payload)
};
