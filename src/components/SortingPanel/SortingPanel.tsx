import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { Icon } from '@/ui/Icon';

export const SortingPanel = () => {
	return (
		<div className="flex flex-col items-center justify-end gap-4 whitespace-nowrap md:flex-row">
			<Text variant="secondary">Sort by:</Text>

			<div className="flex flex-wrap justify-center gap-2">
				<Button type="button" variant="secondary" isActive>
					<Icon className="mr-2 h-4 w-4" name="calendar" />
					Oldest Year
				</Button>
				<Button type="button" variant="secondary">
					<div className="mr-2 flex -space-x-2">
						<Icon name="chevron-left" className="h-4 w-4" />
						<Icon name="chevron-right" className="h-4 w-4" />
					</div>
					Smallest Size
				</Button>
				<Button type="button" variant="secondary">
					<Icon className="mr-2 h-4 w-4" name="dollar-sign" />
					Lowest Price
				</Button>
			</div>
		</div>
	);
};
