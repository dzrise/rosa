import { onMounted, computed } from "vue";
import { useField } from "vee-validate";

export function useRadio(props, context, validators = {}) {
	const rules = props.required ? "required" : null;
	const { value: inputValue, handleBlur, handleChange, meta, errors } = useField(props.name, rules, {
		initialValue: props.value
	});

	const hasError = computed(() => (!meta.valid && meta.touched) || (!meta.valid && !!errors.value.length));
	const hasSuccess = computed(() => meta.valid);
	const setClasses = computed(() => {
		return {
			"input__field--error": hasError.value,
			"input__field--success": hasSuccess.value
		};
	});

	onMounted(() => (inputValue.value = props.value));
	return {
		handleChange,
		handleBlur,
		inputValue,
		meta,
		hasError,
		hasSuccess,
		setClasses
	};
}
