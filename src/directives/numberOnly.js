const numberOnly = {
	beforeMount: function(el) {
		const numberOnlyEventHandler = () => {
			el.value = el.value.replace(/\D+/, "");
		};
		el.__vueKeyUpEventHandler__ = numberOnlyEventHandler;
		el.addEventListener("input", numberOnlyEventHandler);
	},
	unmounted: function(el) {
		el.removeEventListener("input", el.__vueKeyUpEventHandler__);
	}
};

export { numberOnly };
