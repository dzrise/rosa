import router from "@/router";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { handlerError, successAlert } from "@/services";
import { listItemReplacerById } from "@/services";
import { hotelDirectories } from "@/constants/RoutesNames";
import { bedTypesMutationsNames } from "@/store/modules/BedTypes/mutationNames";

const { hotelDirectoriesEndpoints } = BACKEND_ENDPOINTS;
const { getBedTypes, getBedType, addBedType, removeBedType, editBedType } = hotelDirectoriesEndpoints;
const { SET_TO_STATE_BED_TYPES, SET_TO_STATE_BED_TYPE } = bedTypesMutationsNames;
const { BAD_TYPES_LIST } = hotelDirectories;

export default {
	async fetchBedTypes({ commit }) {
		const result = await $http.get(getBedTypes);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_BED_TYPES, data);
		} else {
			return handlerError(result);
		}
	},
	async fetchBedType({ commit }, { id }) {
		const result = await $http.get(getBedType(id));
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_BED_TYPE, data);
		} else {
			return handlerError(result);
		}
	},
	async addBedType({ commit, state }, payload) {
		const result = await $http.post(addBedType, payload);
		const { success, data } = result;
		if (success) {
			const bedTypes = state.bedTypes;
			successAlert("Тип кровати успешно добавлен");
			commit(SET_TO_STATE_BED_TYPES, [...bedTypes, data]);
			await router.push(BAD_TYPES_LIST);
		} else {
			return handlerError(result);
		}
	},
	async editBedType({ commit, state }, payload) {
		const { id, formData } = payload;
		const result = await $http.patch(editBedType(id), formData);
		const { success, data } = result;
		if (success) {
			const bedTypes = state.bedTypes;
			const newBedTypes = listItemReplacerById(bedTypes, data, id);
			successAlert("Тип кровати успешно изменён");
			commit(SET_TO_STATE_BED_TYPES, newBedTypes);
			await router.push(BAD_TYPES_LIST);
		} else {
			return handlerError(result);
		}
	},
	async removeBedType({ commit, state }, { id }) {
		const result = await $http.remove(removeBedType(id));
		const { success, data } = result;
		if (success) {
			const bedTypes = state.bedTypes;
			const newBedTypes = bedTypes.filter(item => item.id !== id);
			successAlert(data.message);
			commit(SET_TO_STATE_BED_TYPES, newBedTypes);
		} else {
			return handlerError(result);
		}
	}
};
