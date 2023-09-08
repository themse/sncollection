// API docs for more details https://crudcrud.com/
import axios from 'axios';

import { SneakerEntity } from '@/services/entities/Sneaker';
import { mockedSneakersForStory } from '@/utils/consts';

const request = axios.create({
	baseURL: `https://crudcrud.com/api/${process.env.NEXT_PUBLIC_CRUDCRUD_API_KEY}`,
});

// Sneakers
const sneakersPath = 'sneakers';

export const getAllSneakers = async (): Promise<SneakerEntity[]> => {
	try {
		const { data } = await request.get<SneakerEntity[]>(`/${sneakersPath}`);

		return data;
	} catch (err) {
		return mockedSneakersForStory;
	}
};

const getSneakerById = async (id: string): Promise<SneakerEntity> => {
	const { data } = await request.get<SneakerEntity>(`/${sneakersPath}/${id}`);

	return data;
};

// guard
const isCurrentSneakersExist = async (id: string): Promise<boolean> => {
	const currentSneaker = await getSneakerById(id);

	return Boolean(currentSneaker);
};

export const addNewSneaker = async (dto: Omit<SneakerEntity, '_id'>): Promise<SneakerEntity> => {
	const { data } = await request.post<SneakerEntity>(`/${sneakersPath}`, dto);

	return data;
};

export const updateSneaker = async (
	id: string,
	dto: Omit<SneakerEntity, '_id'>,
): Promise<SneakerEntity> => {
	if (!isCurrentSneakersExist(id)) {
		throw new Error(`Sneakers with id ${id} not found`);
	}

	const { data } = await request.put<SneakerEntity>(`/${sneakersPath}/${id}`, dto);

	return data;
};

export const deleteSneaker = async (id: string) => {
	if (!isCurrentSneakersExist(id)) {
		throw new Error(`Sneakers with id ${id} not found`);
	}

	return request.delete<SneakerEntity>(`/${sneakersPath}/${id}`);
};
