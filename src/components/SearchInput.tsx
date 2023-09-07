import { Input, InputProps } from '@/ui/form/Input';
import { Icon } from '@/ui/Icon';

export const SearchInput = (props: InputProps) => {
	return (
		<div className="relative flex items-center">
			<Icon name="search" className="absolute left-3 text-gray-200" />
			<Input placeholder="Search" className="pl-11" {...props} />
		</div>
	);
};
