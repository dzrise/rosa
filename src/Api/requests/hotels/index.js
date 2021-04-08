import store from "@/store/store";

let loading;

export async function fetchHotels() {
	loading = true;
	await store.dispatch("hotels/fetchHotels");
	loading = false;

	return { loading };
}

export async function fetchHotelTypes() {
	loading = true;
	await store.dispatch("hotels/fetchHotelTypes");
	loading = false;

	return { loading };
}

export async function fetchHotel(id) {
	loading = true;
	const result = await store.dispatch("hotels/fetchHotel", id);
	loading = false;

	return { loading, result };
}

export async function addHotel(payload) {
	await store.dispatch("hotels/addHotel", payload);
}

export async function removeHotels(id) {
	await store.dispatch("hotels/removeHotel", id);
}
