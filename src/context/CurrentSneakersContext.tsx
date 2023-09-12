'use client';

import { ProductEntity } from '@/services/entities/ProductEntity';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type State = {
	currentSneakers: ProductEntity | null;
	addCurrentSneakers: (_current: ProductEntity) => void;
	resetCurrentSneakers: () => void;
};

const CurrentSneakersContext = createContext<State | null>(null);

export const CurrentSneakersProvider = ({ children }: PropsWithChildren) => {
	const [currentSneakers, setCurrentSneakers] = useState<ProductEntity | null>(null);

	const addCurrentSneakers = (sneakers: ProductEntity) => setCurrentSneakers(sneakers);

	const resetCurrentSneakers = () => setCurrentSneakers(null);

	return (
		<CurrentSneakersContext.Provider
			value={{ currentSneakers, addCurrentSneakers, resetCurrentSneakers }}
		>
			{children}
		</CurrentSneakersContext.Provider>
	);
};

export const useCurrentSneakers = (): State | never => {
	const state = useContext(CurrentSneakersContext);

	if (!state) {
		throw new Error('useCurrentSneakers is used only within CurrentSneakersProvider');
	}

	return state;
};
