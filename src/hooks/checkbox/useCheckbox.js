import { ref, onMounted, computed, nextTick } from "vue";
import { useCheckboxValidator } from "@/hooks/validators/useCheckboxValidator";

export function useCheckbox(props, context, validators = {}) {
	const rootValue = ref();
	const blur = ref(false);
	const focus = ref(false);

	const { v$ } = useCheckboxValidator({
		...validators,
		rootValue
	});

	const input = ref(null);

	const onFocus = () => {
		focus.value = true;
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

	const onClear = () => {
		reset();
		rootValue.value = "";
	};

	const onClick = () => {
		// console.log(rootValue.value);
		validate();
		nextTick().then(() => {
			context.emit("update:change", rootValue.value);
		});
	};
	const onChange = event => {
		validate();
		nextTick().then(() => {
			context.emit("update:change", rootValue.value);
		});
	};

	const hasError = computed(() => v$.value.rootValue.$error && v$.value.rootValue.$dirty);
	const hasSuccess = computed(() => !v$.value.rootValue.$error && v$.value.rootValue.$dirty);

	const setClasses = computed(() => {
		return {
			"input__field--error": hasError.value,
			"input__field--success": hasSuccess.value
		};
	});
	onMounted(() => {
		rootValue.value = props.value;
	});

	return {
		rootValue,
		input,
		onFocus,
		onBlur,
		validate,
		onClear,
		onClick,
		onChange,
		hasError,
		hasSuccess,
		setClasses,
		v$
	};
}
