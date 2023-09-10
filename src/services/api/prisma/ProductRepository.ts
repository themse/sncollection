import { Product } from '@prisma/client';

import type { ReadInterface, WriteInterface } from '@/services/interfaces/repository';
import prismaClient from '@/api/prisma/client';

export class ProductRepository implements ReadInterface<Product>, WriteInterface<Product> {
	private readonly client = prismaClient;

	async find(_criteria?: unknown): Promise<Product[]> {
		return this.client.product.findMany({
			where: {
				isActive: true,
			},
		});
	}

	async findOne(id: string): Promise<Product | null> {
		return this.client.product.findUnique({
			where: {
				id,
			},
		});
	}

	async findOneOrThrow(id: string): Promise<Product | never> {
		return this.client.product.findUniqueOrThrow({
			where: {
				id,
			},
		});
	}

	async create(dto: Product): Promise<Product> {
		return this.client.product.create({ data: dto });
	}

	async update(id: string, dto: Partial<Product>): Promise<Product> {
		const product = await this.findOneOrThrow(id);

		return this.client.product.update({
			where: {
				id: product.id,
			},
			data: dto,
		});
	}

	async delete(id: string): Promise<void> {
		const product = await this.findOneOrThrow(id);

		await this.client.product.delete({
			where: {
				id: product.id,
			},
		});
	}

	async deleteSoft(id: string): Promise<void> {
		const product = await this.findOneOrThrow(id);

		await this.client.product.update({
			where: {
				id: product.id,
			},
			data: {
				isActive: false,
			},
		});
	}
}
