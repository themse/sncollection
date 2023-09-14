import { PropsWithChildren, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import { Button } from '@/ui/Button';
import { Order } from '@/utils/helpers/sortByProperty';
import { useQueryString } from '@/hooks/useQueryString';
import { ProductEntity } from '@/services/entities/ProductEntity';

interface SortByButtonProps extends PropsWithChildren {
	sortingField: keyof ProductEntity;
	labelOption: {
		desc: string;
		asc: string;
	};
}

export const SortByButton = ({ sortingField, labelOption, children }: SortByButtonProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { createQueryString } = useQueryString();

	const queryParam = searchParams.get(sortingField);
	const isDesc = queryParam === Order.DESC;

	const label = useMemo(() => {
		if (!queryParam) {
			return labelOption.asc;
		}

		return isDesc ? labelOption.asc : labelOption.desc;
	}, [isDesc, queryParam, labelOption]);

	const onClick = () => {
		const updatedParams = createQueryString(sortingField, isDesc ? Order.ASC : Order.DESC);

		router.push(`${pathname}?${updatedParams}`);
	};

	return (
		<Button onClick={onClick} type="button" variant="secondary" isActive={Boolean(queryParam)}>
			{children}
			{label}
		</Button>
	);
};
