import store from "@/store/store";

let loading;

export async function fetchLocations() {
	loading = true;
	await store.dispatch("locations/fetchLocations");
	loading = false;

	return { loading };
}

export async function fetchLocation(id) {
	loading = true;
	const result = await store.dispatch("locations/fetchLocation", id);
	loading = false;

	return { loading, result };
}

export async function addLocation(payload) {
	await store.dispatch("locations/addLocation", payload);
}

export async function removeLocation(id) {
	await store.dispatch("locations/removeLocation", id);
}

export async function editLocation(payload) {
	await store.dispatch("locations/editLocation", payload);
}
