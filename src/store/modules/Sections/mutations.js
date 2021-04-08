import { sectionsMutationsNames } from "@/store/modules/Sections/mutationNames";

const { SET_TO_STATE_SECTIONS, SET_TO_STATE_SECTION, CLEAR_SECTION } = sectionsMutationsNames;

export default {
	[SET_TO_STATE_SECTIONS]: (state, payload) => (state.sections = payload),
	[SET_TO_STATE_SECTION]: (state, payload) => (state.section = payload),
	[CLEAR_SECTION]: state => (state.section = null)
};
