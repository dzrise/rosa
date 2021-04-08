export default {
	getCarts: state => state.carts,
	getCurrentCart: state => id => state.carts.find(cart => cart.id === id)
};
