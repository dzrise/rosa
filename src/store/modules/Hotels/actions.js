import router from "@/router";
import { handlerError, successAlert } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { hotelsRoutesNames } from "@/constants/RoutesNames";
import { hotelsMutationsNames } from "@/store/modules/Hotels/mutationNames";

const { hotelsEndpoints } = BACKEND_ENDPOINTS;
const { getHotels, getHotelTypes, addHotel, getHotel, removeHotel } = hotelsEndpoints;
const { SET_TO_STATE_HOTELS, SET_TO_STATE_HOTEL, SET_TO_STATE_HOTEL_TYPES } = hotelsMutationsNames;
const { HOTELS_LIST } = hotelsRoutesNames;

export default {
	async fetchHotels({ commit }) {
		const result = await $http.get(getHotels);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_HOTELS, data);
		} else {
			return handlerError(result);
		}
	},

	async fetchHotelTypes({ commit }) {
		const result = await $http.get(getHotelTypes);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_HOTEL_TYPES, data);
		} else {
			return handlerError(result);
		}
	},

	async fetchHotel({ commit }, id) {
		const result = await $http.get(getHotel(id));
		const { success, data } = result;
		if (success) {
			return data;
		} else {
			return handlerError(result);
		}
	},
	async addHotel({ commit, state }, payload) {
		const result = await $http.post(addHotel, payload);
		const { success, data } = result;
		if (success) {
			const hotels = state.hotels;
			successAlert("Отель успешно добавлен");
			commit(SET_TO_STATE_HOTELS, [...hotels, data]);
			await router.push(HOTELS_LIST);
		} else {
			return handlerError(result);
		}
	},
	async removeHotel({ commit, state }, id) {
		const result = await $http.remove(removeHotel(id));
		const { success, data } = result;
		if (success) {
			const filteredHotel = state.hotels.filter(item => item.id !== id);
			successAlert(data.message);
			commit(SET_TO_STATE_HOTELS, filteredHotel);
		} else {
			return handlerError(result);
		}
	}
};
