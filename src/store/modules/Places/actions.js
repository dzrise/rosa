import { BACKEND_ENDPOINTS, $http } from "@/Api";
import { handlerError } from "@/services";
import { placesMutationsNames } from "@/store/modules/Places/mutationNames";

const { SET_TO_STATE_PLACES } = placesMutationsNames;
const { placesEndpoints } = BACKEND_ENDPOINTS;
const { getPlaces } = placesEndpoints;
export default {
	async fetchPlaces({ commit }) {
		const result = await $http.get(getPlaces);
		const { success, data } = result;
		if (success) {
			commit(SET_TO_STATE_PLACES, data);
		} else {
			return handlerError(result);
		}
	}
};
