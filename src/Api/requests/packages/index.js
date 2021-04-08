import store from "@/store/store";

let loading;

export async function fetchPackages() {
	loading = true;
	await store.dispatch("packages/fetchPackages");
	loading = false;
	return { loading };
}

export async function fetchPackage(id) {
	loading = true;
	const result = await store.dispatch("packages/fetchPackage", id);
	loading = false;

	return { loading, result };
}

export async function addPackage(bundle) {
	await store.dispatch("packages/addPackage", bundle);
}

export async function editPackage(payload) {
	await store.dispatch("packages/editPackage", payload);
}

export async function removePackage(bundle) {
	await store.dispatch("packages/removePackage", bundle);
}
export async function fetchPackageItem(id) {
	await store.dispatch("packages/fetchPackageItem", id);
}

export async function addPackageItem(bundle) {
	await store.dispatch("packages/addPackageItem", bundle);
}
