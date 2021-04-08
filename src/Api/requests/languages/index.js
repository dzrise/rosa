import store from "@/store/store";

let loading;

export async function fetchLanguages() {
	loading = true;
	await store.dispatch("languages/fetchLanguages");
	loading = false;

	return loading;
}

export async function editLanguage(payload) {
	await store.dispatch("languages/editLanguage", payload);
}

export async function addLanguage(language) {
	await store.dispatch("languages/addLanguage", language);
}

export async function removeLanguage(id) {
	await store.dispatch("languages/removeLanguage", id);
}
