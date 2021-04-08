export function sectionsTable(receipts = []) {
	const headers = {
		id: "id",
		name: "Название",
		background: "Фон (веб)",
		remove: "Удалить"
	};
	return receipts.reduce(
		(acc, item) => {
			const defaultValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name?.ru || defaultValue,
				background: item.webBackground || defaultValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{
			headers,
			items: []
		}
	);
}
