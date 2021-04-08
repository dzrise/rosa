import useVuelidate from "@vuelidate/core";

export function useCheckboxValidator(params = {}) {
	const { required, rootValue } = params;
	const rules = {
		rootValue: {
			checked: v => (required ? v : true)
		}
	};
	const v$ = useVuelidate(rules, { rootValue });
	return { v$ };
}
