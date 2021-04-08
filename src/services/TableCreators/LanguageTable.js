export function languageTable(products = []) {
	return products.reduce(
		(acc, item) => {
			const baseValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name ? item.name : baseValue,
				price: item.code ? item.code : baseValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers: { id: "id", name: "Название", code: "Код", remove: "Удалить" }, items: [], remove: true }
	);
}
