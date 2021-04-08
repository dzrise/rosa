import router from "@/router";
import { handlerError, successAlert } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { userRoutes } from "@/constants/RoutesNames";
import { usersMutationsNames } from "@/store/modules/Users/mutationNames";

const { userEndpoints } = BACKEND_ENDPOINTS;
const { getUsers, addUser } = userEndpoints;
const { SET_TO_STATE_USERS } = usersMutationsNames;
const { USERS_LIST } = userRoutes;
export default {
	async fetchUsers({ commit }) {
		const result = await $http.get(getUsers);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_USERS, data);
		} else {
			return handlerError(result);
		}
	},
	async addUser({ commit, state }, payload = {}) {
		const result = await $http.post(addUser, payload);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_USERS, [...state.users, data]);
			successAlert("Пользователь создан");
			await router.push(USERS_LIST);
		} else {
			return handlerError(result);
		}
	}
};
