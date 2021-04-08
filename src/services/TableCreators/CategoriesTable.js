export function categoriesTable(categories = []) {
	return categories.reduce(
		(acc, item) => {
			const defaultValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name.ru || defaultValue,
				sections: item.sections.length ? item.sections : defaultValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers: { id: "id", name: "название", sections: "разделы", remove: "удалить" }, items: [] }
	);
}
