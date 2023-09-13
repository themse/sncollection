import { Input, InputProps } from '@/ui/form/Input';
import { SearchIcon } from '@/ui/Icon';
import { cn } from '@/helpers/cn';

export interface SearchInputProps extends InputProps {
	wrapperClassnames?: string;
}

export const SearchInput = ({ wrapperClassnames, className, ...props }: SearchInputProps) => {
	return (
		<div className={cn('relative flex items-center', wrapperClassnames)}>
			<SearchIcon className="absolute left-3 text-gray-200" />
			<Input placeholder="Search" className={cn('pl-11', className)} {...props} />
		</div>
	);
};
