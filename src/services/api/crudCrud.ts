'use server';

// API docs for more details https://crudcrud.com/
import { revalidateTag } from 'next/cache';
import axios from 'axios';

import type { ProductEntity } from '@/services/entities/ProductEntity';
import { request as fetchClient } from '@/helpers/request';

const API_KEY = process.env.NEXT_PUBLIC_CRUDCRUD_API_KEY;
const BASE_URL = `https://crudcrud.com/api/${API_KEY}`;

const QUERY_KEY = {
	PRODUCT_COLLECTION: 'product-collection',
};

const axiosClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
	},
});

const productSlug = 'sneakers';
const productUrl = `${BASE_URL}/${productSlug}`;

export async function findAll(_criteria?: unknown): Promise<ProductEntity[]> {
	const data = await fetchClient<ProductEntity[]>(productUrl, {
		next: {
			tags: [QUERY_KEY.PRODUCT_COLLECTION],
			revalidate: 60 * 60, // 1 hour
		},
	});

	// TODO do all filters and sorting here
	const products = data.filter((item) => item.isActive);

	return products;
}

export const findOne = async (id: string): Promise<ProductEntity | null> => {
	const product = await fetchClient<ProductEntity | null>(`${productUrl}/${id}`, {
		next: {
			revalidate: 60 * 60, // 1 hour
		},
	});

	return product;
};

export const findOneOrThrow = async (id: string): Promise<ProductEntity | never> => {
	const product = await findOne(id);

	if (!product) {
		throw new Error(`Product with id "${id}" not found`);
	}

	return product;
};

export const create = async (dto: Omit<ProductEntity, '_id'>): Promise<ProductEntity> => {
	const { data } = await axiosClient.post<ProductEntity>(`/${productSlug}`, {
		...dto,
		isActive: true,
	});

	revalidateTag(QUERY_KEY.PRODUCT_COLLECTION);

	return data;
};

export const update = async (id: string, dto: Partial<ProductEntity>): Promise<any> => {
	const { _id: productId, ...product } = await findOneOrThrow(id);

	const { data } = await axiosClient.put<ProductEntity>(`/${productSlug}/${productId}`, {
		...product,
		...dto,
	});

	revalidateTag(QUERY_KEY.PRODUCT_COLLECTION);

	return data;
};

export const deleteItem = async (id: string): Promise<void> => {
	const { _id: productId } = await findOneOrThrow(id);

	await axiosClient.delete<ProductEntity>(`/${productSlug}/${productId}`);

	revalidateTag(QUERY_KEY.PRODUCT_COLLECTION);
};

export const deleteSoft = async (id: string): Promise<void> => {
	const { _id: productId, ...product } = await findOneOrThrow(id);

	await update(productId, {
		...product,
		isActive: false,
	});

	revalidateTag(QUERY_KEY.PRODUCT_COLLECTION);
};
