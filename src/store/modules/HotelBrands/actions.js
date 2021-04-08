import router from "@/router";
import { handlerError, listItemReplacerById, successAlert } from "@/services";
import { $http, BACKEND_ENDPOINTS } from "@/Api";
import { hotelDirectories } from "@/constants/RoutesNames";
import { hotelBrandsTypesMutationsNames } from "@/store/modules/HotelBrands/mutationNames";

const { hotelBrandsEndpoints } = BACKEND_ENDPOINTS;
const { getHotelBrands, getHotelBrand, addHotelBrand, removeHotelBrand, editHotelBrand } = hotelBrandsEndpoints;
const { SET_TO_STATE_HOTEL_BRANDS, SET_TO_STATE_HOTEL_BRAND } = hotelBrandsTypesMutationsNames;
const { HOTELS_BRANDS_LIST } = hotelDirectories;

export default {
	async fetchHotelBrands({ commit }) {
		const result = await $http.get(getHotelBrands);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_HOTEL_BRANDS, data);
		} else {
			return handlerError(result);
		}
	},

	async fetchHotelBrand({ commit }, { id }) {
		const result = await $http.get(getHotelBrand(id));
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_HOTEL_BRAND, data);
		} else {
			return handlerError(result);
		}
	},

	async addHotelBrand({ commit, state }, payload) {
		const result = await $http.post(addHotelBrand, payload);
		const { success, data } = result;
		if (success) {
			const hotelBrands = state.hotelBrands;
			successAlert("Бред отеля добавлен");
			commit(SET_TO_STATE_HOTEL_BRANDS, [...hotelBrands, data]);
			await router.push(HOTELS_BRANDS_LIST);
		} else {
			return handlerError(result);
		}
	},

	async removeHotelBrand({ commit, state }, { id }) {
		const result = await $http.remove(removeHotelBrand(id));
		const { success, data } = result;
		if (success) {
			const hotelBrands = state.hotelBrands;
			const filteredHotelBrands = hotelBrands.filter(item => item.id !== id);
			successAlert(data.message);
			commit(SET_TO_STATE_HOTEL_BRANDS, filteredHotelBrands);
		} else {
			return handlerError(result);
		}
	},

	async editHotelBrand({ commit, state }, payload) {
		const { id } = payload;
		const result = await $http.patch(editHotelBrand(id), payload);
		const { success, data } = result;
		if (success) {
			const hotelBrands = state.hotelBrands;
			const replacedHotelBrands = listItemReplacerById(hotelBrands, data, id);
			successAlert("Бред отеля изменен");
			commit(SET_TO_STATE_HOTEL_BRANDS, replacedHotelBrands);
			await router.push(HOTELS_BRANDS_LIST);
		} else {
			return handlerError(result);
		}
	}
};
