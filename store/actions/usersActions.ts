import { createAction } from '@reduxjs/toolkit';

export const setIsFetching = createAction<boolean>('users/setIsFetching');
export const setError = createAction<string>('users/setError');
