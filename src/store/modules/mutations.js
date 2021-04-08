export default {
	setErrors: (state, error) => (state.errors = error),
	changeLoadingStatus: (state, status) => (state.loading = status)
};
