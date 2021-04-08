export function receiptsTable(receipts = []) {
	const headers = {
		id: "id",
		paymentId: "Платеж",
		externalId: "внешний идентификатор",
		status: "Статус",
		createdAt: "Создано"
	};
	return receipts.reduce(
		(acc, item) => {
			const defaultValue = "-";
			const baseTableItem = {
				id: item.id,
				paymentId: item.paymentId || defaultValue,
				externalId: item.externalId || defaultValue,
				status: item.status || defaultValue,
				createdAt: item.createdAt || defaultValue
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
