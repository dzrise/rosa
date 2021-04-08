import store from "@/store/store";

let loading;

export async function fetchPlaces() {
	loading = true;
	await store.dispatch("places/fetchPlaces");
	loading = false;

	return { loading };
}
