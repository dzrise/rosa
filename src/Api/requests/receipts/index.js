import store from "@/store/store";

let loading;

export async function fetchReceipts() {
	loading = true;
	await store.dispatch("receipts/fetchReceipts");
	loading = false;

	return { loading };
}
