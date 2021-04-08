export function productsTable(products = []) {
	const headers = { id: "id", name: "Название", price: "Цена", remove: "Удалить" };
	return products.reduce(
		(acc, item) => {
			const baseValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name?.trim() ? item.name : baseValue,
				price: item.price ? item.price : baseValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers, items: [] }
	);
}
