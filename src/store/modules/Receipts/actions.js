import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { handlerError } from "@/services";

const { receiptEndpoints } = BACKEND_ENDPOINTS;
const { getReceipts } = receiptEndpoints;
export default {
	async fetchReceipts({ commit }) {
		const result = await $http.get(`${getReceipts}`);
		const { success, data } = result;
		if (success) {
			commit("setToStateReceipts", data);
		} else {
			return handlerError(result);
		}
	}
};
