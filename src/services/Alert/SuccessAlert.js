import { useToast } from "vue-toastification";

const toast = useToast();

const successAlert = (message = "") => {
	toast.success(message, {
		timeout: 2000
	});
};
export { successAlert };
