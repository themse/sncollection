import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

export const useQueryString = () => {
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);

			if (value.length > 0) {
				params.set(name, value.toLowerCase());
			} else {
				params.delete(name);
			}

			return params.toString();
		},
		[searchParams],
	);

	return { createQueryString };
};
