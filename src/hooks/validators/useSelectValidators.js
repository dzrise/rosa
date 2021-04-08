import useVuelidate from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";

export function useSelectValidators(params = {}) {
	const { required, rootValue } = params;
	const rules = {
		rootValue: {
			requiredIf: requiredIf(() => required),
			valid: value => value.name
		}
	};
	const v$ = useVuelidate(rules, { rootValue });
	return { v$ };
}
