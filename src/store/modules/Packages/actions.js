import router from "@/router";
import { handlerError, successAlert, listItemReplacerById } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { packagesRoutes } from "@/constants/RoutesNames";
import { packagesMutationsNames } from "@/store/modules/Packages/mutationNames";

const { packageEndpoints } = BACKEND_ENDPOINTS;
const { getPackages, addPackageItem, addPackage, getPackage, removePackage, editPackage, getPackageItems } = packageEndpoints;
const { SET_TO_STATE_PACKAGES, CLEAR_PACKAGE, SET_TO_STATE_PACKAGE, SET_TO_STATE_PACKAGE_ITEMS } = packagesMutationsNames;
const { PACKAGES_LIST } = packagesRoutes;
export default {
	async fetchPackages({ commit }) {
		commit(CLEAR_PACKAGE);
		const result = await $http.get(getPackages);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_PACKAGES, data);
		} else {
			return handlerError(result);
		}
	},

	async fetchPackage({ commit }, id) {
		const result = await $http.get(getPackage(id));
		const { success, data } = result;
		if (success) {
			return data;
		} else {
			return handlerError(result);
		}
	},

	async addPackage({ commit, state }, payload) {
		const result = await $http.post(addPackage, payload);
		const { success, data } = result;
		if (success) {
			const packages = state.packages;
			commit(SET_TO_STATE_PACKAGES, [...packages, data]);
			successAlert("Пакет успешно добавлен");
			await router.push(PACKAGES_LIST);
		} else {
			return handlerError(result);
		}
	},

	async editPackage({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.patch(editPackage(id), payload);
		const { success, data } = result;
		if (success) {
			commit(CLEAR_PACKAGE);
			const packages = state.packages;
			const newPackages = listItemReplacerById(packages, data, id);
			commit(SET_TO_STATE_PACKAGES, newPackages);
			successAlert("Пакет успешно изменен");
			await router.push(PACKAGES_LIST);
		} else {
			return handlerError(result);
		}
	},

	async removePackage({ commit, state }, id) {
		const result = await $http.remove(removePackage(id));
		const { success, data } = result;
		if (success) {
			const packages = state.packages;
			successAlert(data.message);
			const newPackages = packages.filter(pack => pack.id !== id);
			commit(SET_TO_STATE_PACKAGES, newPackages);
		} else {
			return handlerError(result);
		}
	},

	async fetchPackageItem({ commit }, payload) {
		const result = await $http.get(getPackageItems, payload);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_PACKAGE_ITEMS, data);
		} else {
			return handlerError(result);
		}
	},
	async addPackageItem({ commit, state }, payload) {
		const result = await $http.post(addPackageItem, payload);
		const { success, data } = result;
		if (success) {
			const packageItems = state.packageItems;
			commit(SET_TO_STATE_PACKAGE_ITEMS, [...packageItems, data]);
			successAlert("Элемент пакета успешно добавлен");
			await router.push(PACKAGES_LIST);
		} else {
			return handlerError(result);
		}
	}
};
