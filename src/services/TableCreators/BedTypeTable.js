export function bedTypeTable(bedTypes = []) {
	return bedTypes.reduce(
		(acc, item) => {
			const defaultValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name.ru || defaultValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers: { id: "id", name: "название", remove: "удалить" }, items: [], remove: true }
	);
}
