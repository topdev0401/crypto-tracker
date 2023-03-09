import { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import { PageTitle } from './PageTitle';
import { Asset } from '../../types';
import { AssetContext } from '../../contexts/AssetContext';

import { API } from '../../api';
import { API_FIELDS } from '../../utils/constants';
import {
	getTimestampFromResponse,
	parseResponse,
	readAssetsFromLocalStorage,
	saveAssetsToLocalStorage,
} from '../../utils/helpers';
import { CurrencyToolbar } from './CurrencyToolbar';
import { CurrencyList } from './CurrencyList';

export const Dashboard = () => {
	const [assets, setAssets] = useState<Asset[]>([]);
	const [selectedAssets, setSelectedAssets] = useState<Asset[]>(readAssetsFromLocalStorage());
	const [timestamp, setTimestamp] = useState<string>('');
	const [loading, setLoading] = useState(false);
	const [errorText, setErrorText] = useState<string>('');

	const loadData = async () => {
		setLoading(true);
		try {
			
			const response = await API.assets.getAssets({
				params: {
					fields: API_FIELDS.join(','),
				},
			});

			// Parse the API response
			const updatedAssets = parseResponse(response);
			const newTimestamp = getTimestampFromResponse(response);

			const newAssets: Asset[] = [];
			const newSelectedAssets: Asset[] = [];
			// Convert selected assets to a hashed object to improve the time complexity
			const hashedAssets = selectedAssets.reduce((prev, asset) => ({ ...prev, [asset.id]: asset }), {});

			// Get new selected and non-selected assets
			updatedAssets.forEach((asset: Asset) => {
				if (Object.prototype.hasOwnProperty.call(hashedAssets, asset.id)) {
					newSelectedAssets.push(asset);
				} else {
					newAssets.push(asset);
				}
			});

			setTimestamp(newTimestamp);
			setAssets(newAssets);
			setSelectedAssets(newSelectedAssets);
			setErrorText('');
		} catch (error) {
			console.log(error);
			let message = 'Unknown Error'
  			if (error instanceof Error) message = error.message
			setErrorText(message);
		}
		setLoading(false);
	};

	useEffect(() => {
		loadData()
		const timerId = setInterval(() => {
			loadData()
		}, 60 * 1000);

		return () => clearInterval(timerId)
	}, []);

	useEffect(() => {
		saveAssetsToLocalStorage(selectedAssets);
	}, [selectedAssets]);

	return (
		<AssetContext.Provider
			value={{ assets, selectedAssets, timestamp, loading, errorText, loadData, setAssets, setSelectedAssets, setTimestamp }}
		>
			<PageTitle title='Dashboard' />
			<Box sx={{ p: 3 }}>
				<Grid container flexDirection='column' spacing={2}>
					<Grid item>
						<CurrencyToolbar />
					</Grid>
					<Grid item>
						<CurrencyList />
					</Grid>
				</Grid>
			</Box>
		</AssetContext.Provider>
	);
};
