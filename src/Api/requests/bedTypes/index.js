import store from "@/store/store";

let loading;

export async function fetchBedTypes() {
	loading = true;
	await store.dispatch("bedTypes/fetchBedTypes");
	loading = false;

	return { loading };
}

export async function fetchBedType(payload) {
	loading = true;
	const result = await store.dispatch("bedTypes/fetchBedType", payload);
	loading = false;

	return { loading, result };
}

export async function addBedType(bedType) {
	await store.dispatch("bedTypes/addBedType", bedType);
}

export async function editBadType(payload) {
	await store.dispatch("bedTypes/editBedType", payload);
}

export async function removeBedType(payload) {
	await store.dispatch("bedTypes/removeBedType", payload);
}
