import { useToast } from "vue-toastification";
import { $http, BACKEND_ENDPOINTS } from "@/Api";

const toast = useToast();

const { cartEndpoints } = BACKEND_ENDPOINTS;
const { getCarts } = cartEndpoints;
export default {
	async fetchCarts({ commit }) {
		const result = await $http.get(getCarts);
		const { success, data } = result;
		if (success && data?.length) {
			commit("setToStateCarts", data);
		} else {
			console.log(result);
		}
	}

	// async fetchCurrentCarts({ commit }, id) {
	// 	const result = await $http.get(getCarts);
	// 	const { success, data } = result;
	// 	if (success && data?.length) {
	// 		commit("setToStateCarts", data);
	// 	} else {
	// 		console.log(result);
	// 	}
	// }
};
