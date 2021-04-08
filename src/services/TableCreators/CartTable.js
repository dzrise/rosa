export function cartTable(products = []) {
	return products.reduce(
		(acc, item) => {
			const baseTableItem = {
				id: item.id
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers: { id: "id", remove: "удалить" }, items: [] }
	);
}
