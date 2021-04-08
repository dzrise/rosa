import store from "@/store/store";

let loading;

export async function fetchFacilities() {
	loading = true;
	await store.dispatch("facilities/fetchFacilities");
	loading = false;

	return { loading };
}

export async function fetchFacility(id) {
	loading = true;
	const result = await store.dispatch("facilities/fetchFacility", id);
	loading = false;

	return { loading, result };
}

export async function addFacility(foodType) {
	await store.dispatch("facilities/addFacility", foodType);
}

export async function editFacility(payload) {
	await store.dispatch("facilities/editFacility", payload);
}

export async function removeFacility(id) {
	await store.dispatch("facilities/removeFacility", id);
}
