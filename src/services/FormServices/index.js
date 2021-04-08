export function useForm(refsCollection) {
	const clearForm = () => {
		refsCollection.forEach(el => el.onClear());
	};
	const formValidate = () => {
		return !refsCollection
			.map(el => {
				return el.validate();
			})
			.some(Boolean);
	};

	return { clearForm, formValidate };
}
