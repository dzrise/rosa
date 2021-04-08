import store from "@/store/store";

export async function fetchCategories() {
	await store.dispatch("categories/fetchCategories");
}

export async function fetchCategory(id) {
	return await store.dispatch("categories/fetchCategory", id);
}

export async function addCategory(foodType) {
	await store.dispatch("categories/addCategory", foodType);
}

export async function removeCategory(payload) {
	await store.dispatch("categories/removeCategory", payload);
}

export async function editCategory(payload) {
	await store.dispatch("categories/editCategory", payload);
}
