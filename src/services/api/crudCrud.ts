// API docs for more details https://crudcrud.com/
import axios from 'axios';

import { SneakerEntity } from '@/services/entities/Sneaker';

const request = axios.create({
	baseURL: `https://crudcrud.com/api/${process.env.NEXT_PUBLIC_CRUDCRUD_API_KEY}`,
});

// Sneakers
const sneakersPath = 'sneakers';

export const getAllSneakers = async (): Promise<SneakerEntity[]> => {
	const { data } = await request.get<SneakerEntity[]>(`/${sneakersPath}`);

	return data;
};

export const addNewSneaker = async (dto: Omit<SneakerEntity, '_id'>) => {
	const { data } = await request.post<SneakerEntity>(`/${sneakersPath}`, dto);

	return data;
};
