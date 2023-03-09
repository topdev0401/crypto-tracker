import { Button, Grid, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useContext } from 'react';
import { Search } from '../../../components/Search';
import { AssetContext } from '../../../contexts/AssetContext';
import { Asset } from '../../../types';

export const CurrencyToolbar = () => {
	const { assets, selectedAssets, timestamp, setAssets, setSelectedAssets, loadData } = useContext(AssetContext);

	const addNewSelectedAsset = (newAsset: Asset | null): void => {
		if (!newAsset) return;
		setAssets(assets.filter((asset) => asset.id !== newAsset.id));
		setSelectedAssets([...selectedAssets, newAsset]);
	};

	const handleRefresh = (): void => {
		loadData();
	};

	return (
		<Grid container spacing={2} justifyContent='space-between'>
			<Grid item container sm={12} md={4} justifyContent='space-between'>
				<Search list={assets || []} label='Search Currency to Track' onRowClicked={addNewSelectedAsset} />
			</Grid>
			<Grid item container xs={12} md={8} spacing={2} alignItems="center" justifyContent='flex-end'>
				<Typography align='right'>{`Synced at ${new Date(timestamp).toUTCString()}  `}</Typography>
				<Button color='primary' variant="text" onClick={handleRefresh}>
					<RefreshIcon />
				</Button>
				
			</Grid>
		</Grid>
	);
};
