import router from "@/router";
import { handlerError, listItemReplacerById, successAlert } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { hotelDirectories } from "@/constants/RoutesNames";
import { foodTypesMutationsNames } from "@/store/modules/FoodTypes/mutationNames";

const { foodTypesEndpoints } = BACKEND_ENDPOINTS;
const { getFoodTypes, getFoodType, addFoodType, removeFoodType, editFoodType } = foodTypesEndpoints;
const { SET_TO_STATE_FOOD_TYPES, SET_TO_STATE_FOOD_TYPE } = foodTypesMutationsNames;
const { FOOD_TYPES_LIST } = hotelDirectories;

export default {
	async fetchFoodTypes({ commit }) {
		const result = await $http.get(getFoodTypes);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_FOOD_TYPES, data);
		} else {
			return handlerError(result);
		}
	},
	async addFoodType({ commit, state }, payload) {
		const result = await $http.post(addFoodType, payload);
		const { success, data } = result;
		if (success) {
			const foodTypes = state.foodTypes;
			successAlert("Тип питания добавлен");
			commit(SET_TO_STATE_FOOD_TYPES, [...foodTypes, data]);
			await router.push(FOOD_TYPES_LIST);
		} else {
			return handlerError(result);
		}
	},
	async fetchFoodType({ commit }, { id }) {
		const result = await $http.get(getFoodType(id));
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_FOOD_TYPE, data);
		} else {
			return handlerError(result);
		}
	},
	async removeFoodType({ commit, state }, { id }) {
		const result = await $http.remove(removeFoodType(id));
		const { success, data } = result;
		if (success) {
			const foodTypes = state.foodTypes;
			const filteredFoodTypes = foodTypes.filter(item => item.id !== id);
			successAlert(data.message);
			commit(SET_TO_STATE_FOOD_TYPES, filteredFoodTypes);
		} else {
			return handlerError(result);
		}
	},
	async editFoodType({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.patch(editFoodType(id), payload);
		const { success, data } = result;
		if (success) {
			const foodTypes = state.foodTypes;
			const newFoodTypes = listItemReplacerById(foodTypes, data, id);
			successAlert("Тип питания успешно изменён");
			commit(SET_TO_STATE_FOOD_TYPES, newFoodTypes);
			await router.push(FOOD_TYPES_LIST);
		} else {
			return handlerError(result);
		}
	}
};
