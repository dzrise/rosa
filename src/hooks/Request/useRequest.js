import { ref } from "vue";

export async function useRequest(callback) {
	let isFetching = ref(false);
	if (callback && typeof callback === "function") {
		try {
			await callback();
		} catch (error) {
			throw new Error(error);
		} finally {
			isFetching.value = true;
		}
	}
	if (callback.length && callback instanceof Array) {
		try {
			await Promise.all(callback);
		} catch (error) {
			throw new Error(error);
		} finally {
			isFetching.value = true;
		}
	}
	return { isFetching };
}
