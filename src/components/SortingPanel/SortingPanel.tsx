import { Text } from '@/ui/Text';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, DollarSignIcon } from '@/ui/Icon';
import { SortByButton } from '@/components/SortingPanel/SortByButton';

export const SortingPanel = () => {
	return (
		<div className="flex flex-col items-center justify-end gap-4 whitespace-nowrap md:flex-row">
			<Text variant="secondary">Sort by:</Text>

			<div className="flex flex-wrap justify-center gap-2">
				<SortByButton
					sortingField="year"
					labelOption={{
						asc: 'Oldest Year',
						desc: 'Newest Year',
					}}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
				</SortByButton>

				<SortByButton
					sortingField="size"
					labelOption={{
						asc: 'Smallest Size',
						desc: 'Biggest Size',
					}}
				>
					<div className="mr-2 flex -space-x-2">
						<ChevronLeftIcon className="h-4 w-4" />
						<ChevronRightIcon className="h-4 w-4" />
					</div>
				</SortByButton>

				<SortByButton
					sortingField="price"
					labelOption={{
						asc: 'Lowest Price',
						desc: 'Highest Price',
					}}
				>
					<DollarSignIcon className="mr-2 h-4 w-4" />
				</SortByButton>
			</div>
		</div>
	);
};
