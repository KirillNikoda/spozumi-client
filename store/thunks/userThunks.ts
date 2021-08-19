import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from 'api/user.api';
import { LoginUserDto, RegisterUserDto } from 'models/user.models';

export const login = createAsyncThunk('users/login', async (user: LoginUserDto, thunkApi) => {
	return await userApi.login(user);
});

export const register = createAsyncThunk(
	'users/register',
	async (user: RegisterUserDto, thunkApi) => {
		return await userApi.register(user);
	}
);

export const getMe = createAsyncThunk('users/getMe', async (_, thunkApi) => {
	return await userApi.getMe();
});
