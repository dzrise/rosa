import { ref, onMounted, computed } from "vue";
import { useSelectValidators } from "@/hooks/validators/useSelectValidators";

export function useSelect(props, context, validators) {
	const optionsVisible = ref(false);
	const input = ref(null);
	const rootValue = ref({ name: "", id: "" });
	const { v$ } = useSelectValidators({
		...validators,
		rootValue
	});

	const validate = () => {
		v$.value.rootValue.$touch();
		return v$.value.rootValue.$error;
	};

	const reset = () => {
		v$.value.rootValue.$reset();
	};

	const emitValue = value => {
		context.emit("update:value", value);
	};

	const showOptionsList = () => {
		optionsVisible.value = true;
	};

	const hideOptionsList = () => {
		if (optionsVisible.value) {
			validate();
		}
		optionsVisible.value = false;
	};

	const onClickSelect = () => {
		showOptionsList();
	};

	const onClear = () => {
		rootValue.value = {};
		emitValue({ id: "", name: "" });
	};

	const handlerSelectOption = option => {
		rootValue.value = option;
		emitValue(option);
		hideOptionsList();
	};

	const hasError = computed(() => v$.value.rootValue.$error && v$.value.rootValue.$dirty);
	const hasSuccess = computed(() => !v$.value.rootValue.$error && v$.value.rootValue.$dirty);

	const setClasses = computed(() => {
		return {
			"input__field--error": hasError.value,
			"input__field--success": hasSuccess.value
		};
	});

	onMounted(() => (rootValue.value = props.value));

	return {
		optionsVisible,
		input,
		rootValue,
		hasError,
		hasSuccess,
		setClasses,
		v$,
		validate,
		reset,
		onClear,
		hideOptionsList,
		handlerSelectOption,
		onClickSelect
	};
}
