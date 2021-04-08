import router from "@/router";
import { handlerError, successAlert, listItemReplacerById } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { languagesRoutes } from "@/constants/RoutesNames";
import { languageMutationsNames } from "@/store/modules/Languages/mutationNames";

const { languagesEndpoints } = BACKEND_ENDPOINTS;
const { getLanguages, addLanguage, editLanguage, removeLanguage } = languagesEndpoints;
const { SET_TO_STATE_LANGUAGES, CLEAR_LANGUAGE } = languageMutationsNames;
const { LANGUAGES_LIST } = languagesRoutes;

export default {
	async fetchLanguages({ commit }) {
		commit(CLEAR_LANGUAGE);
		const result = await $http.get(getLanguages);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_LANGUAGES, data);
		} else {
			return handlerError(result);
		}
	},
	async editLanguage({ commit, state }, payload = {}) {
		const { id } = payload;
		const result = await $http.patch(editLanguage(id), { payload });
		const { success, data } = result;
		if (success) {
			const languages = state.languages;
			successAlert("Язык успешно изменен");
			const newLanguages = listItemReplacerById(languages, data, id);
			commit(SET_TO_STATE_LANGUAGES, newLanguages);
			await router.push(LANGUAGES_LIST);
		} else {
			return handlerError(result);
		}
	},
	async addLanguage({ commit, state }, payload = {}) {
		const result = await $http.post(addLanguage, payload);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_LANGUAGES, [...state.languages, data]);
			successAlert("Язык добавлен");
			await router.push(LANGUAGES_LIST);
		} else {
			return handlerError(result);
		}
	},
	async removeLanguage({ commit, state }, id) {
		const result = await $http.remove(removeLanguage(id));
		const { success, data } = result;
		if (success) {
			const languages = state.languages;
			successAlert(data.message);
			const newLanguages = languages.filter(language => language.id !== id);
			commit(SET_TO_STATE_LANGUAGES, newLanguages);
		} else {
			return handlerError(result);
		}
	}
};
