import type { ReadInterface, WriteInterface } from '@/services/interfaces/repository';
import type { ProductEntity } from '@/api/crudCrud/ProductEntity';
import apiClient from '@/api/crudCrud/client';

export class ProductRepository
	implements ReadInterface<ProductEntity>, WriteInterface<ProductEntity>
{
	private readonly client = apiClient;
	private readonly path = 'sneakers';

	async find(): Promise<ProductEntity[]> {
		const { data } = await this.client.get<ProductEntity[]>(`/${this.path}`);

		const products = data.filter((item) => item.isActive);

		return products;
	}

	async findOne(id: string): Promise<ProductEntity | null> {
		const { data } = await this.client.get<ProductEntity>(`/${this.path}/${id}`);

		return data;
	}

	async findOneOrThrow(id: string): Promise<ProductEntity | never> {
		const product = await this.findOne(id);

		if (!product) {
			throw new Error(`Product with id "${id}" not found`);
		}

		return product;
	}

	async create(dto: ProductEntity): Promise<ProductEntity> {
		const { data } = await this.client.post<ProductEntity>(`/${this.path}`, dto);

		return data;
	}

	async update(id: string, dto: Partial<ProductEntity>): Promise<ProductEntity> {
		const product = await this.findOneOrThrow(id);

		const { data } = await this.client.put<ProductEntity>(`/${this.path}/${product._id}`, dto);

		return data;
	}

	async delete(id: string): Promise<void> {
		const product = await this.findOneOrThrow(id);

		await this.client.delete<ProductEntity>(`/${this.path}/${product._id}`);
	}

	async deleteSoft(id: string): Promise<void> {
		const { _id: productId, ...restAttrs } = await this.findOneOrThrow(id);

		await this.update(productId, {
			...restAttrs,
			isActive: false,
		});
	}
}
