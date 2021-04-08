import { packagesMutationsNames } from "./mutationNames";

const { SET_TO_STATE_PACKAGES, CLEAR_PACKAGE, SET_TO_STATE_PACKAGE, SET_TO_STATE_PACKAGE_ITEMS } = packagesMutationsNames;
export default {
	[SET_TO_STATE_PACKAGES]: (state, payload) => (state.packages = payload),
	[CLEAR_PACKAGE]: state => (state.package = null),
	[SET_TO_STATE_PACKAGE]: (state, payload) => (state.package = payload),
	[SET_TO_STATE_PACKAGE_ITEMS]: (state, payload) => (state.packageItems = payload)
};
