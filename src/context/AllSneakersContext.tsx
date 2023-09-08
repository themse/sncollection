'use client';

import { SneakerEntity } from '@/services/entities/Sneaker';
import { createContext, PropsWithChildren, useContext, useState, useCallback } from 'react';

type State = {
	allSneakers: SneakerEntity[];
	addAllSneakers: (_allSneakers: SneakerEntity[]) => void;
	addSneakersItem: (_sneakersItem: SneakerEntity) => void;
	onUpdateSneakersItem: (_sneakersItem: SneakerEntity) => void;
	onDeleteSneakersItem: (_id: string) => void;
};

const AllSneakersContext = createContext<State | null>(null);

export const AllSneakersProvider = ({ children }: PropsWithChildren) => {
	const [allSneakers, setAllSneakers] = useState<SneakerEntity[]>([]);

	const addAllSneakers = useCallback((sneakers: SneakerEntity[]) => setAllSneakers(sneakers), []);

	const addSneakersItem = (sneakersItem: SneakerEntity) =>
		setAllSneakers((prev) => [...prev, sneakersItem]);

	const onUpdateSneakersItem = (updatedItem: SneakerEntity) => {
		setAllSneakers((prev) =>
			prev.map((item) => (item._id === updatedItem._id ? updatedItem : item)),
		);
	};

	const onDeleteSneakersItem = (id: string) => {
		const updatedSneakers = allSneakers.filter((item) => item._id !== id);

		setAllSneakers(updatedSneakers);
	};

	return (
		<AllSneakersContext.Provider
			value={{
				allSneakers,
				addAllSneakers,
				addSneakersItem,
				onDeleteSneakersItem,
				onUpdateSneakersItem,
			}}
		>
			{children}
		</AllSneakersContext.Provider>
	);
};

export const useAllSneakers = (): State | never => {
	const state = useContext(AllSneakersContext);

	if (!state) {
		throw new Error('useAllSneakers is used only within AllSneakersContext');
	}

	return state;
};
