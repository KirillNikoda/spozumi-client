import { createReducer } from '@reduxjs/toolkit';
import { ProductsState } from 'models/product.models';
import { setError, setIsFetching, setProducts } from 'store/actions/productsActions';

const initialState: ProductsState = {
	products: [],
	isFetching: false,
	err: null
};

export const productsReducer = createReducer(initialState, (builder) => {
	builder.addCase(setIsFetching, (state, action) => {
		state.isFetching = action.payload;
	});

	builder.addCase(setProducts, (state, action) => {
		state.products = action.payload;
	});

	builder.addCase(setError, (state, action) => {
		state.err = action.payload;
	});
});
