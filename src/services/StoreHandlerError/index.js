import { useToast } from "vue-toastification";

const toast = useToast();
const handlerError = (result = {}, callback) => {
	if (result?.response instanceof Array) {
		result.response.forEach(item =>
			toast.error(item.message, {
				timeout: 2000
			})
		);
	}
	if (typeof result?.response === "string") {
		toast.error(result.response, {
			timeout: 2000
		});
	}
	if (callback && typeof callback === "function") {
		callback();
	}
	return result;
};
export { handlerError };
