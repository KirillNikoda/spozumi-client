import axios from 'axios';
import { baseUrl } from 'constants/api.constants';
import { LoginUserDto, RegisterUserDto } from 'models/dtos.models';

export const authApi = {
	login: async (user: LoginUserDto) => {
		const { data } = await axios.post(`${baseUrl}/auth/login`, user);
		return data;
	},
	register: async (user: RegisterUserDto) => {
		const { data } = await axios.post(`${baseUrl}/auth/register`, {
			...user,
			role: 'user'
		});
		return data;
	},
	getMe: async () => {
		const { data } = await axios.get(`${baseUrl}/auth/me`, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});

		return data;
	}
};
