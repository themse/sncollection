export const Order = {
	ASC: 'asc',
	DESC: 'desc',
};

export type OrderType = Lowercase<keyof typeof Order>;

const orderSet = new Set(Object.values(Order));

export const sortByProperty = <TData extends Record<string, any>>(
	data: TData[],
	property: keyof TData,
	order?: OrderType | null,
) => {
	if (!order || !orderSet.has(order)) {
		return data;
	}

	const sortOrder = order === Order.DESC ? -1 : 1;

	return [...data].sort((a, b) => {
		if (a[property] < b[property]) {
			return -1 * sortOrder;
		}
		if (a[property] > b[property]) {
			return 1 * sortOrder;
		}
		return 0;
	});
};
