import router from "@/router";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { handlerError, successAlert } from "@/services";

import { productsRoutes } from "@/constants/RoutesNames";
import { productMutationsNames } from "./mutationNames";

const { productEndpoints } = BACKEND_ENDPOINTS;
const { SET_TO_STATE_PRODUCTS } = productMutationsNames;
const { getProducts, getProduct, addProduct, removeProduct, editProduct } = productEndpoints;
const { BASE, PRODUCT } = productsRoutes;

export default {
	async fetchProducts({ commit }) {
		const result = await $http.get(`${getProducts}`);
		const { success, data } = result;
		if (success && data?.length) {
			commit(SET_TO_STATE_PRODUCTS, data);
		} else {
			return handlerError(result);
		}
	},

	async fetchProduct({ commit }, id) {
		const result = await $http.get(`${getProduct(id)}`);
		const { success, data } = result;
		if (success && data) {
			return data;
		} else {
			return handlerError(result, () => router.push(BASE));
		}
	},

	async addProduct({ commit, state }, payload) {
		const result = await $http.post(`${addProduct}`, payload);
		const { data, success } = result;
		if (data && success) {
			commit(SET_TO_STATE_PRODUCTS, [...state.products, data]);
			await router.push(PRODUCT(data.id));
			return data;
		} else {
			return handlerError(result);
		}
	},

	async removeProduct({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.remove(`${removeProduct(id)}`);
		const { success, data } = result;
		if (success) {
			const products = state.products;
			successAlert(data.message);
			const newProducts = products.filter(product => product.id !== id);
			commit(SET_TO_STATE_PRODUCTS, newProducts);
		} else {
			return handlerError(result);
		}
	},
	async editProduct({ commit }, payload) {
		const { id, submitData } = payload;
		const result = await $http.patch(`${editProduct(id)}`, submitData);
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
