import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { productsReducer } from './reducers/products/productsReducer';
import { userReducer } from './reducers/user/userReducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
