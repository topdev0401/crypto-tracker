/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Alert, AlertTitle, Box } from '@mui/material';

import { CurrencyTable } from '../../../components/Table';
import { AssetContext } from '../../../contexts/AssetContext';
import { Asset } from '../../../types';

export const CurrencyList = () => {
	const { selectedAssets, assets, loading, errorText, setSelectedAssets, setAssets } = useContext(AssetContext);

	const removeAsset = (deletedAsset: Asset) => {
		setSelectedAssets(selectedAssets.filter((asset: Asset) => asset.id !== deletedAsset.id));
		setAssets([...assets, deletedAsset]);
	};

	return (
		<Box display='flex' flexDirection='column' gap={2}>
			{errorText.length > 0 && (
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					{errorText}
				</Alert>
			)}
			{loading && <LinearProgress />}
			<CurrencyTable assets={selectedAssets} actionText='Delete' onAction={removeAsset} />
		</Box>
	);
};
