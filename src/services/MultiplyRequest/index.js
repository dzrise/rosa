async function multiplyRequest(requestsList) {
	let loading = true;
	await Promise.all(requestsList);
	loading = false;
	return loading;
}

export { multiplyRequest };
