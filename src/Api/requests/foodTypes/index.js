import store from "@/store/store";

let loading;

export async function fetchFoodTypes() {
	loading = true;
	await store.dispatch("foodTypes/fetchFoodTypes");
	loading = false;

	return { loading };
}

export async function fetchFoodType(payload) {
	loading = true;
	await store.dispatch("foodTypes/fetchFoodType", payload);
	loading = false;

	return { loading };
}

export async function addFoodType(foodType) {
	await store.dispatch("foodTypes/addFoodType", foodType);
}

export async function editFoodType(payload) {
	await store.dispatch("foodTypes/editFoodType", payload);
}

export async function removeFoodType(payload) {
	await store.dispatch("foodTypes/removeFoodType", payload);
}
