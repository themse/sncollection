'use client';

import { ProductEntity } from '@/services/entities/ProductEntity';
import createFastContext from '@/helpers/createFastContext';
import { useCallback } from 'react';

const { FastContextProvider, useStore } = createFastContext<{
	currentSneakers: ProductEntity | null;
}>({
	currentSneakers: null,
});

const useCurrentSneakers = () => {
	const [currentSneakers, setStore] = useStore((store) => store.currentSneakers);

	const addCurrentSneakers = useCallback(
		(sneakers: ProductEntity) => setStore({ currentSneakers: sneakers }),
		[setStore],
	);

	const resetCurrentSneakers = useCallback(() => setStore({ currentSneakers: null }), [setStore]);

	return {
		currentSneakers,
		addCurrentSneakers,
		resetCurrentSneakers,
	};
};

export { useCurrentSneakers, FastContextProvider as CurrentSneakersProvider };
