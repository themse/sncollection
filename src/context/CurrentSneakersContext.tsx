'use client';

import { SneakerEntity } from '@/services/entities/Sneaker';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type State = {
	currentSneakers: SneakerEntity | null;
	addCurrentSneakers: (_current: SneakerEntity) => void;
	resetCurrentSneakers: () => void;
};

const CurrentSneakersContext = createContext<State | null>(null);

export const CurrentSneakersProvider = ({ children }: PropsWithChildren) => {
	const [currentSneakers, setCurrentSneakers] = useState<SneakerEntity | null>(null);

	const addCurrentSneakers = (sneakers: SneakerEntity) => setCurrentSneakers(sneakers);

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
