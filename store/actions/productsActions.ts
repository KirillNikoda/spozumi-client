import { createAction } from '@reduxjs/toolkit';
import { Product } from 'models/product.models';

export const setProducts = createAction<Product[]>('products/setProducts');
export const setIsFetching = createAction<boolean>('products/setIsFetching');
export const setError = createAction<any>('products/setError');
