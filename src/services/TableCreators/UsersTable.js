export function usersTable(users = []) {
	const headers = {
		id: "id",
		email: "Email",
		lastName: "Фамилия",
		firstName: "Имя",
		middleName: "Отчество",
		phone: "Телефон",
		birthDate: "Дата рождения",
		sex: "Пол",
		remove: "удалить"
	};
	return users.reduce(
		(acc, item) => {
			const defaultValue = "-";
			const baseTableItem = {
				id: item.id,
				email: item.email || defaultValue,
				lastName: item.lastName || defaultValue,
				firstName: item.firstName || defaultValue,
				middleName: item.middleName || defaultValue,
				phone: item.phone || defaultValue,
				birthDate: item.birthDate || defaultValue,
				sex: item.sex || defaultValue
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
