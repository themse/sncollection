'use client';

import { ProductEntity } from '@/api/crudCrud/ProductEntity';
import { createContext, PropsWithChildren, useContext, useState, useCallback } from 'react';

type State = {
	allSneakers: ProductEntity[];
	addAllSneakers: (_allSneakers: ProductEntity[]) => void;
	addSneakersItem: (_sneakersItem: ProductEntity) => void;
	onUpdateSneakersItem: (_sneakersItem: ProductEntity) => void;
	onDeleteSneakersItem: (_id: string) => void;
};

const AllSneakersContext = createContext<State | null>(null);

export const AllSneakersProvider = ({ children }: PropsWithChildren) => {
	const [allSneakers, setAllSneakers] = useState<ProductEntity[]>([]);

	const addAllSneakers = useCallback((sneakers: ProductEntity[]) => setAllSneakers(sneakers), []);

	const addSneakersItem = (sneakersItem: ProductEntity) =>
		setAllSneakers((prev) => [...prev, sneakersItem]);

	const onUpdateSneakersItem = (updatedItem: ProductEntity) => {
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
