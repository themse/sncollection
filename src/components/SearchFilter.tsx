'use client';

import { ChangeEventHandler } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { useQueryString } from '@/hooks/useQueryString';
import { SearchInput, SearchInputProps } from '@/components/SearchInput';

export const SearchFilter = (props: SearchInputProps) => {
	const router = useRouter();
	const pathname = usePathname();

	const { createQueryString } = useQueryString();

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const updatedParams = createQueryString('search', event.target.value);

		router.push(`${pathname}?${updatedParams}`);
	};

	return <SearchInput {...props} onChange={onChange} />;
};

SearchFilter.display = 'SearchFilter';
