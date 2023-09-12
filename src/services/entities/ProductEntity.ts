export interface ProductEntity {
	name: string;
	price: number;
	brand: string;
	size: number;
	year: number;
	isActive?: boolean;

	_id: string;
}
