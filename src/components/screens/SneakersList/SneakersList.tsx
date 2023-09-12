'use client';

import { ProductCard } from '@/components/ProductCard';
import { SortingPanel } from '@/components/SortingPanel';
import { useCurrentSneakers } from '@/context/CurrentSneakersContext';
import { ProductEntity } from '@/services/entities/ProductEntity';

interface SneakersListProps {
	sneakers: ProductEntity[];
}

export const SneakersList = ({ sneakers = [] }: SneakersListProps) => {
	const { addCurrentSneakers } = useCurrentSneakers();

	return (
		<div className="mb-10 space-y-4 pb-8 pt-4 md:mb-0 lg:py-8">
			<SortingPanel />

			<div className="grid grid-cols-1 justify-items-center gap-8 py-6 md:grid-cols-2 lg:grid-cols-3">
				{sneakers.map((item) => (
					<ProductCard
						onClick={() => addCurrentSneakers(item)}
						key={item._id}
						title={item.name}
						brand={item.brand}
						attributes={[
							{
								label: 'Year',
								value: item.year.toString(),
							},
							{
								label: 'Size',
								value: `${item.size}US`,
							},
							{
								label: 'Price',
								value: `$${item.price}`,
							},
						]}
					/>
				))}
			</div>
		</div>
	);
};
