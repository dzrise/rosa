import { reactive } from "vue";

export function useRefsValidation() {
	let refs = reactive({});
	const addRef = (el, name) => {
		if (el && el.validate && typeof el.validate === "function") {
			refs[name] = el.validate;
		}
	};

	return { refs, addRef };
}
