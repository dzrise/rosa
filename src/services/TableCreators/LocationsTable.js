export function locationsTable(locations = []) {
	return locations.reduce(
		(acc, item) => {
			const baseValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name?.ru ? item.name?.ru : baseValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers: { id: "id", name: "Название", remove: "Удалить" }, items: [], remove: true }
	);
}
