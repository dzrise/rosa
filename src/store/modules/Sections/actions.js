import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { handlerError, successAlert } from "@/services";
import { sectionsMutationsNames } from "@/store/modules/Sections/mutationNames";

const { sectionEndpoints } = BACKEND_ENDPOINTS;
const { getSections, getSection, removeSection } = sectionEndpoints;
const { SET_TO_STATE_SECTIONS, CLEAR_SECTION, SET_TO_STATE_SECTION } = sectionsMutationsNames;
export default {
	async fetchSections({ commit }) {
		// commit(CLEAR_SECTION);
		const result = await $http.get(`${getSections}`);
		const { success, data } = result;
		if (success && data?.length) {
			commit(SET_TO_STATE_SECTIONS, data);
		} else {
			return handlerError(result);
		}
	},
	async fetchSection({ commit }, payload) {
		console.log(payload);
		const { id } = payload;
		const result = await $http.get(`${getSection(id)}`);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_SECTION, data);
		} else {
			return handlerError(result);
		}
	},
	async editSection({ commit }, payload) {
		const { id } = payload;
		const result = await $http.patch(`${getSection(id)}`, payload);
		const { success, data } = result;
		console.log(result);
		if (success) {
			// commit(SET_TO_STATE_SECTION, data);
		} else {
			// return handlerError(result);
		}
	},
	async removeSection({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.remove(`${removeSection(id)}`);
		const { success, data } = result;
		if (success) {
			const sections = state.sections;
			successAlert(data.message);
			const newSections = sections.filter(section => section.id !== id);
			commit(SET_TO_STATE_SECTIONS, newSections);
		} else {
			return handlerError(result);
		}
	}
};
