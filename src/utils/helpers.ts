import { Asset } from '../types';
import { USER_DATA_KEY } from './constants';

export const parseResponse = (response: any): Asset[] => {
	const { data } = response;

	const numberFormat = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

	return data.map(
		(asset: any): Asset => ({
			id: asset['id'],
			percentChangeUsdLast24Hours: parseFloat(
				asset['metrics']['market_data']['percent_change_usd_last_24_hours']
			).toFixed(2),
			priceUsd: numberFormat.format(parseFloat(asset['metrics']['market_data']['price_usd'])),
			name: asset['name'],
			symbol: asset['symbol'],
		})
	);
};

export const getTimestampFromResponse = (response: any): string => {
	const {
		status: { timestamp },
	} = response;

	return timestamp || '';
};

export const saveAssetsToLocalStorage = (assets: Asset[]): void => {
	localStorage.setItem(USER_DATA_KEY, JSON.stringify(assets));
};

export const readAssetsFromLocalStorage = (): Asset[] => {
	return JSON.parse(localStorage.getItem(USER_DATA_KEY) || '[]');
};
