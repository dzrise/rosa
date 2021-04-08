export function hotelBrandsTable(hotelBrands = []) {
	return hotelBrands.reduce(
		(acc, item) => {
			const defaultValue = "-";
			const baseTableItem = {
				id: item.id,
				name: item.name?.ru || defaultValue
			};
			acc.items.push(baseTableItem);
			return acc;
		},
		{ headers: { id: "id", name: "Бренд", remove: "удалить" }, items: [], remove: true }
	);
}
