import axios from 'axios';
import { baseUrl } from 'constants/api.constants';

export const productsApi = {
	getProducts: () => {
		return axios.get(`${baseUrl}/products`);
	}
};
