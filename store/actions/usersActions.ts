import { createAction } from '@reduxjs/toolkit';
import { User } from 'store/reducers/user/userReducer';

export const setIsFetching = createAction<boolean>('users/setIsFetching');
export const setError = createAction<string>('users/setError');
