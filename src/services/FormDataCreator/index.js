export function formDataCreator(data) {
	if (!Object.keys(data).length) return;

	const formData = new FormData();
	Object.keys(data).forEach(key => {
		if (data[key] instanceof Array) {
			data[key].forEach(item => {
				formData.append(`${key}[]`, item);
			});
		} else {
			formData.append(key, data[key]);
		}
	});
	return { formData };
}
