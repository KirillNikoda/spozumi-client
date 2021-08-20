import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api/user.api';
import { LoginUserDto, RegisterUserDto } from 'models/dtos.models';

export const login = createAsyncThunk('users/login', async (user: LoginUserDto, thunkApi) => {
	return await authApi.login(user);
});

export const register = createAsyncThunk(
	'users/register',
	async (user: RegisterUserDto, thunkApi) => {
		return await authApi.register(user);
	}
);

export const getMe = createAsyncThunk('users/getMe', async (_, thunkApi) => {
	return await authApi.getMe();
});
