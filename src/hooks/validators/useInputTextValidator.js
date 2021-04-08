import useVuelidate from '@vuelidate/core'
import {requiredIf} from "@vuelidate/validators";

export function useInputTextValidator(params = {}) {
    const {required, rootValue} = params;
    const rules = {
        rootValue: {requiredIf: requiredIf(() => required)}
    };
    const v$ = useVuelidate(rules, {rootValue});
    return {v$};
}
