import store from "@/store/store";

let loading;

export async function fetchProducts() {
	loading = true;
	await store.dispatch("products/fetchProducts");
	loading = false;

	return { loading };
}

export async function fetchProduct(id) {
	loading = true;
	const result = await store.dispatch("products/fetchProduct", id);
	loading = false;

	return { loading, result };
}

export async function addProduct(product) {
	await store.dispatch("products/addProduct", product);
}

export async function removeProduct(id) {
	await store.dispatch("products/removeProduct", { id });
}

export async function editProduct(product) {
	await store.dispatch("products/editProduct", product);
}
