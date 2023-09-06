import { Product } from './Product';

export interface Sneaker extends Product {
	brand: string;
	size: number;
	year: number;
	_id: string;
}
