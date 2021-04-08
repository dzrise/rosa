export function currencyFilter(value, type = "руб.") {
	let result = value;
	if (typeof result === "number") {
		return `${result.toLocaleString()} ${type}`;
	}
	return !!result && result;
}
