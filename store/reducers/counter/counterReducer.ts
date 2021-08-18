import { createReducer, createSlice } from '@reduxjs/toolkit';
import { decrement, increment } from '../../actions/counterActions';

export type CounterState = {
	value: number;
};

const initialState = {
	value: 0
};

export const counterReducer = createReducer(initialState, (builder) => {
	builder.addCase(increment, (state) => {
		console.log(state.value);

		state.value++;
	});

	builder.addCase(decrement, (state) => {
		state.value--;
	});
});
