import { ProductCard } from '@/components/ProductCard';

const HomePage = () => {
	return (
		<div>
			<ProductCard
				{...{
					title: 'Air jordan',
					brand: 'Nike',
					attributes: [
						{
							label: 'Year',
							value: '2023',
						},
						{
							label: 'Size',
							value: '11US',
						},
						{
							label: 'Price',
							value: '$230',
						},
					],
				}}
			/>
		</div>
	);
};

export default HomePage;
