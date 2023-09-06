// API docs for more details https://crudcrud.com/
import axios from 'axios';

import { Sneaker } from '@/services/entities/Sneaker';

const request = axios.create({
	baseURL: `https://crudcrud.com/api/${process.env.NEXT_PUBLIC_CRUDCRUD_API_KEY}`,
});

// Sneakers
const sneakersPath = 'sneakers';

export const getAllSneakers = async (): Promise<Sneaker[]> => {
	const { data } = await request.get<Sneaker[]>(`/${sneakersPath}`);

	return data;
};

export const addNewSneaker = async (dto: Omit<Sneaker, '_id'>) => {
	const { data } = await request.post<Sneaker>(`/${sneakersPath}`, dto);

	return data;
};
