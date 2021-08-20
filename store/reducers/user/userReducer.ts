import { createReducer } from '@reduxjs/toolkit';
import { getMe, login, register } from 'store/thunks/userThunks';

const initialState = {
	currentUser: {},
	err: '',
	isFetching: false
};

export const userReducer = createReducer(initialState, (builder) => {
	builder.addCase(login.fulfilled, (state, action) => {
		state.currentUser = action.payload;
	});

	builder.addCase(login.rejected, (state, action) => {
		state.err = action.error.message as string;
	});

	builder.addCase(register.fulfilled, (state, action) => {
		state.currentUser = action.payload;
	});

	builder.addCase(register.rejected, (state, action) => {
		state.err = action.error.message as string;
	});

	builder.addCase(getMe.pending, (state) => {
		state.isFetching = true;
	});

	builder.addCase(getMe.fulfilled, (state, action) => {
		state.currentUser = action.payload;
	});
});
