import { Brand } from './brand.models';
import { Category } from './category.models';

export interface Product {
	id: number;
	price: number;
	color: string;
	size: string;
	countryOfOrigin: string;
	category: Category;
	brand: Brand;
}

export interface ProductsState {
	products: Product[];
	isFetching: boolean;
	err: null | string;
}
