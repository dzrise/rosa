import router from "@/router";
import { handlerError, listItemReplacerById, successAlert } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { locationsRoutesNames } from "@/constants/RoutesNames";
import { locationsMutationsNames } from "@/store/modules/Locations/mutationNames";

const { locationsEndpoints } = BACKEND_ENDPOINTS;
const { getLocations, getLocation, addLocation, removeLocation, editLocation } = locationsEndpoints;
const { SET_TO_STATE_LOCATIONS } = locationsMutationsNames;
const { LOCATIONS_LIST } = locationsRoutesNames;

export default {
	async fetchLocations({ commit }) {
		const result = await $http.get(getLocations);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_LOCATIONS, data);
		} else {
			return handlerError(result);
		}
	},

	async fetchLocation({ commit }, id) {
		const result = await $http.get(getLocation(id));
		const { success, data } = result;
		if (success) {
			return data;
		} else {
			handlerError(result);
		}
	},

	async addLocation({ commit, state }, payload) {
		const result = await $http.post(addLocation, payload);
		const { success, data } = result;
		if (success) {
			const locations = state.locations;
			successAlert("Локация успешно добавлена");
			commit(SET_TO_STATE_LOCATIONS, [...locations, data]);
			await router.push(LOCATIONS_LIST);
		} else {
			return handlerError(result);
		}
	},
	async removeLocation({ commit, state }, id) {
		const result = await $http.remove(removeLocation(id));
		const { success, data } = result;
		if (success) {
			const locations = state.locations;
			successAlert(data.message);
			const filteredLocations = locations.filter(item => item.id !== id);
			commit(SET_TO_STATE_LOCATIONS, filteredLocations);
		} else {
			return handlerError(result);
		}
	},
	async editLocation({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.remove(editLocation(id), payload);
		const { success, data } = result;
		if (success) {
			const locations = state.locations;
			const replacedLocation = listItemReplacerById(locations, data, id);
			successAlert("Локация успешно изменена");
			commit(SET_TO_STATE_LOCATIONS, replacedLocation);
			await router.push(LOCATIONS_LIST);
		} else {
			return handlerError(result);
		}
	}
};
