import router from "@/router";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { categoriesMutationsNames } from "./mutationNames";
import { categoriesRoutes } from "@/constants/RoutesNames";
import { handlerError } from "@/services";

const { categoriesEndpoints } = BACKEND_ENDPOINTS;
const { getCategories, addCategory, editCategory, removeCategory } = categoriesEndpoints;
const { BASE } = categoriesRoutes;
const { SET_TO_STATE_CATEGORIES } = categoriesMutationsNames;

export default {
	async fetchCategories({ commit }) {
		const result = await $http.get(getCategories);
		const { success, data } = result;
		if (success && data?.length) {
			commit(SET_TO_STATE_CATEGORIES, data);
		} else {
			return handlerError(result);
		}
	},
	async fetchCategory({ commit }, id) {
		const result = await $http.get(`${getCategories}/${id}`);
		const { success, data } = result;
		if (success) {
			return data;
		} else {
			return handlerError(result, () => router.push(BASE));
		}
	},
	async addCategory({ commit, state }, payload) {
		const result = await $http.post(`${addCategory}`, payload);
		const { data, success } = result;
		if (data && success) {
			commit(SET_TO_STATE_CATEGORIES, [...state.categories, data]);
			await router.push(BASE);
		} else {
			return handlerError(result);
		}
	},
	async removeCategory({ commit }, payload) {
		const { id } = payload;
		const result = await $http.remove(`${removeCategory(id)}`);
		console.log(result);
	},
	async editCategory({ commit }, payload) {
		const { id, submitData } = payload;
		const result = await $http.patch(`${editCategory(id)}`, submitData);
		const { success, data } = result;
		console.log(result);
		if (success && data) {
			// console.log(result);
			// commit("setToStateCurrentCategory", data);
		} else {
			return handlerError(result);
		}
	}
};
