import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { ProductEntity } from '@/services/entities/ProductEntity';
import { OrderType, sortByProperty } from '@/utils/helpers/sortByProperty';

export const useFilteredProducts = (products: ProductEntity[] = []) => {
	const searchParams = useSearchParams();

	const filteredProducts = useMemo(() => {
		let filteredItems = products;

		const searchValue = searchParams.get('search');

		if (searchValue) {
			filteredItems = filteredItems.filter((item) => item.name.toLowerCase().includes(searchValue));
		}

		// Sorting
		const sortingFields: (keyof ProductEntity)[] = ['year', 'size', 'price'];

		sortingFields.forEach((field) => {
			filteredItems = sortByProperty(
				filteredItems,
				field,
				searchParams.get(field) as OrderType | null,
			);
		});

		return filteredItems;
	}, [products, searchParams]);

	return { filteredProducts };
};
