import axios from 'axios';
import { baseUrl } from 'constants/api.constants';
import { RegisterUserDto } from 'models/user.models';
import { LoginUserDto } from 'store/thunks/userThunks';

export const userApi = {
	login: async (user: LoginUserDto) => {
		const { data } = await axios.post(`${baseUrl}/auth/login`, user);
		return data;
	},
	register: async (user: RegisterUserDto) => {
		const { data } = await axios.post(`${baseUrl}/auth/register`, user);
		return data;
	},
	getMe: async () => {
		const { data } = await axios.get(`${baseUrl}/auth/get-me`, {
			headers: {
				authorization: localStorage.getItem('token')
			}
		});

		return data;
	}
};
