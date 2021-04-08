import { ref, onMounted, reactive, computed, watch } from "vue";
import { useInputTextValidator } from "@/hooks/validators/useInputTextValidator";

export function useMultipleSelect(props, context, validators) {
	const rootValue = ref("");
	const blur = ref(false);
	const focus = ref(false);
	const optionsVisible = ref(false);
	const input = ref(null);
	let values = reactive([]);
	const { v$ } = useInputTextValidator({
		...validators,
		rootValue
	});

	const emitValue = value => {
		context.emit("update:value", value);
	};
	const emitValues = values => {
		context.emit("update:values", values);
	};

	const validate = () => {
		v$.value.rootValue.$touch();
		return v$.value.rootValue.$error;
	};

	const reset = () => {
		v$.value.rootValue.$reset();
	};

	const onBlur = () => {
		validate();
		blur.value = true;
	};

	const showOptionsList = () => {
		optionsVisible.value = true;
	};

	const hideOptionsList = () => {
		if (optionsVisible.value) {
			onBlur();
		}
		optionsVisible.value = false;
	};

	const onClickSelect = () => {
		showOptionsList();
	};

	const onInput = () => {
		emitValue(rootValue.value);
		emitValue(rootValue.values);
	};

	const onClear = () => {
		rootValue.value = "";
		values.length = 0;
		emitValue("");
		emitValues([]);
	};

	const handlerSelectOption = option => {
		rootValue.value = option.name;
		emitValue(option.name);
		if (values.every(item => item.id !== option.id)) {
			values.push(option);
		}
		emitValues(values);
	};
	const handlerRemoveItem = id => {
		values = values.filter(item => item.id !== id);
		if (!values.length) {
			rootValue.value = "";
		}
		emitValue(rootValue.value);
		emitValues(values);
	};

	const hasError = computed(() => v$.value.rootValue.$error && v$.value.rootValue.$dirty);
	const hasSuccess = computed(() => !v$.value.rootValue.$error && v$.value.rootValue.$dirty);

	const setClasses = computed(() => {
		return {
			"input__field--error": hasError.value,
			"input__field--success": hasSuccess.value
		};
	});
	watch(
		() => props.values,
		(newValue, oldValue) => {
			if (oldValue.length && !newValue.length) {
				onClear();
			}
		}
	);
	onMounted(() => {
		rootValue.value = props.value;
		values = props.values;
		if (values.length) {
			rootValue.value = values[0].value;
		}
	});

	return {
		optionsVisible,
		input,
		values,
		rootValue,
		hasError,
		hasSuccess,
		setClasses,
		onInput,
		onClear,
		validate,
		hideOptionsList,
		handlerSelectOption,
		handlerRemoveItem,
		onClickSelect
	};
}
