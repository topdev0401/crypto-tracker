import { API_ENDPOINT, API_FIELDS } from '../../utils/constants';
import { ApiController } from './type';
import axios from 'axios';

const apiController: ApiController = {
	getAssets: async ({ params }) => {
		return await axios
			.get(`${API_ENDPOINT}`, {
				params,
			})
			.then((response) => response.data);
	},
};

export default apiController;
