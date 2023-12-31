import { Card, CardHeader, CardContent } from '@/ui/Card';
import { Heading } from '@/ui/Heading';
import { TrashIcon } from '@/ui/Icon';
import { cn } from '@/helpers/cn';
import { DrawerTrigger } from '@/ui/Drawer';

interface ProductCard {
	title: string;
	brand: string;

	attributes: {
		label: string;
		value: string;
	}[];

	onClick?: () => void;
}

export const ProductCard = ({ title, brand, attributes, onClick }: ProductCard) => {
	return (
		<Card>
			<CardHeader>
				<div className="flex w-full items-start justify-between">
					<div className="space-y-2">
						<Heading variant="heading-3" as="h3">
							{title}
						</Heading>
						<p className="leading-6">{brand}</p>
					</div>
					<DrawerTrigger onClick={onClick}>
						<TrashIcon />
					</DrawerTrigger>
				</div>
			</CardHeader>
			<CardContent className="grid grid-cols-3 gap-y-5">
				{attributes.map((attribute, index) => (
					<div
						key={`${title}-${brand}-${index}`}
						className={cn([
							'mr-5 space-y-1 border-r border-gray-200 pr-5',
							'[&:nth-child(3n)]:mr-0 [&:nth-child(3n)]:border-none [&:nth-child(3n)]:pr-0',
							'[&:last-child]:mr-0 [&:last-child]:border-none [&:last-child]:pr-0',
						])}
					>
						<Heading variant="subheading">{attribute.value}</Heading>
						<p className="leading-6">{attribute.label}</p>
					</div>
				))}
			</CardContent>
		</Card>
	);
};

ProductCard.display = 'ProductCard';
