import { ref, onMounted, computed, watch } from "vue";
import { useInputTextValidator } from "@/hooks/validators/useInputTextValidator";

export function useInput(props, context, validators = {}) {
	let rootValue = ref("");
	const blur = ref(false);
	const focus = ref(false);

	const { v$ } = useInputTextValidator({
		...validators,
		rootValue
	});
	watch(
		() => props.value,
		newValue => {
			if (newValue) {
				rootValue.value = newValue;
			}
		}
	);
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

	const onInput = event => {
		const { value } = event.target;
		context.emit("update:input", value);
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

	return { rootValue, input, onInput, onFocus, onBlur, validate, onClear, hasError, hasSuccess, setClasses, v$ };
}
