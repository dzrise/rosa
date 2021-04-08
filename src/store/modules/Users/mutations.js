export default {
	setToStateUsers: (state, payload) => (state.users = payload),
	clearUser: (state, payload) => (state.user = null)
};
