import { ReadInterface, WriteInterface } from '@/services/interfaces/repository';
import * as PrismaApi from './prisma/ProductRepository';

interface Repository<T> extends ReadInterface<T>, WriteInterface<T> {
	deleteSoft(_id: string): Promise<void> | void;
}

export class ProductService<T> {
	constructor(private readonly repository: Repository<T>) {
		this.repository = repository;
	}

	async find(_criteria?: unknown) {
		return this.repository.find(_criteria);
	}

	async findOne(id: string) {
		return this.repository.findOne(id);
	}

	async create(dto: T) {
		return this.repository.create({ ...dto, isActive: true });
	}

	async update(id: string, dto: Partial<T>) {
		return this.repository.update(id, dto);
	}

	async delete(id: string) {
		return this.repository.deleteSoft(id);
	}
}

const productService = new ProductService(new PrismaApi.ProductRepository());

export { productService };
