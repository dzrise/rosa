import store from "@/store/store";

let loading;

export async function fetchSections() {
	loading = true;
	await store.dispatch("sections/fetchSections");
	loading = false;

	return { loading };
}

export async function fetchSection(id) {
	loading = true;
	await store.dispatch("sections/fetchSection", { id });
	loading = false;

	return { loading };
}

export async function editSection(section) {
	await store.dispatch("sections/editSection", section);
}

export async function removeSection(id) {
	await store.dispatch("sections/removeSection", { id });
}
