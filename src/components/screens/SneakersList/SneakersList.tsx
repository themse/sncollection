import { ProductCard } from '@/components/ProductCard';
import { SortingPanel } from '@/components/SortingPanel';

export const SneakersList = () => {
	return (
		<div className="mb-10 space-y-4 pb-8 pt-4 md:mb-0 lg:py-8">
			<SortingPanel />

			<div className="grid grid-cols-1 justify-items-center gap-8 py-6 md:grid-cols-2 lg:grid-cols-3">
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
				<ProductCard
					title="Air jordan"
					brand="Nike"
					attributes={[
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
					]}
				/>
			</div>
		</div>
	);
};
