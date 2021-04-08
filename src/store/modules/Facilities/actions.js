import router from "@/router";
import { handlerError, listItemReplacerById, successAlert } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { facilitiesRoutesNames } from "@/constants/RoutesNames";
import { facilitiesMutationsNames } from "@/store/modules/Facilities/mutationNames";

const { facilitiesEndpoints } = BACKEND_ENDPOINTS;
const { getFacilities, getFacility, addFacility, removeFacility, editFacility } = facilitiesEndpoints;
const { SET_TO_STATE_FACILITIES } = facilitiesMutationsNames;
const { FACILITIES_LIST } = facilitiesRoutesNames;

export default {
	async fetchFacilities({ commit }) {
		const result = await $http.get(getFacilities);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_FACILITIES, data);
		} else {
			return handlerError(result);
		}
	},
	async addFacility({ commit, state }, payload) {
		const result = await $http.post(addFacility, payload);
		const { success, data } = result;
		if (success) {
			const facilities = state.facilities;
			successAlert("Удобство добавлен");
			commit(SET_TO_STATE_FACILITIES, [...facilities, data]);
			await router.push(FACILITIES_LIST);
		} else {
			return handlerError(result);
		}
	},
	async fetchFacility({ commit }, id) {
		const result = await $http.get(getFacility(id));
		const { success, data } = result;
		if (success) {
			return data;
		} else {
			return handlerError(result);
		}
	},
	async removeFacility({ commit, state }, id) {
		const result = await $http.remove(removeFacility(id));
		const { success, data } = result;
		if (success) {
			const facilities = state.facilities;
			const filteredFacilities = facilities.filter(item => item.id !== id);
			successAlert(data.message);
			commit(SET_TO_STATE_FACILITIES, filteredFacilities);
		} else {
			return handlerError(result);
		}
	},
	async editFacility({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.patch(editFacility(id), payload);
		const { success, data } = result;
		if (success) {
			const facilities = state.facilities;
			const replacedFacilities = listItemReplacerById(facilities, data, id);
			successAlert("Удобство успешно изменено");
			commit(SET_TO_STATE_FACILITIES, replacedFacilities);
			await router.push(FACILITIES_LIST);
		} else {
			return handlerError(result);
		}
	}
};
