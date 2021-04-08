export default {
	getUsers: state => state.users,
	getUser: state => id => state.users.find(user => user.id === id)
};
