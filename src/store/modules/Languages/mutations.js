import { languageMutationsNames } from "./mutationNames";

const { SET_TO_STATE_LANGUAGES, CLEAR_LANGUAGE } = languageMutationsNames;
export default {
	[SET_TO_STATE_LANGUAGES]: (state, payload) => (state.languages = payload),
	[CLEAR_LANGUAGE]: (state, payload) => (state.language = null)
};
