import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, DollarSignIcon } from '@/ui/Icon';

export const SortingPanel = () => {
	return (
		<div className="flex flex-col items-center justify-end gap-4 whitespace-nowrap md:flex-row">
			<Text variant="secondary">Sort by:</Text>

			<div className="flex flex-wrap justify-center gap-2">
				<Button type="button" variant="secondary" isActive>
					<CalendarIcon className="mr-2 h-4 w-4" />
					Oldest Year
				</Button>
				<Button type="button" variant="secondary">
					<div className="mr-2 flex -space-x-2">
						<ChevronLeftIcon className="h-4 w-4" />
						<ChevronRightIcon className="h-4 w-4" />
					</div>
					Smallest Size
				</Button>
				<Button type="button" variant="secondary">
					<DollarSignIcon className="mr-2 h-4 w-4" />
					Lowest Price
				</Button>
			</div>
		</div>
	);
};
