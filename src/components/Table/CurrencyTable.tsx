import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { Asset } from '../../types';

interface CurrencyTableProp {
	assets: Asset[];
	actionText: string;
	onAction: (asset: Asset) => void;
}

export const CurrencyTable: FC<CurrencyTableProp> = ({ assets, actionText, onAction }) => {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>#</TableCell>
					<TableCell>Asset</TableCell>
					<TableCell>Symbol</TableCell>
					<TableCell>Price</TableCell>
					<TableCell>24H</TableCell>
					<TableCell>Action</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{assets.map((asset: Asset, index: number) => (
					<TableRow key={asset.id}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>{asset.name}</TableCell>
						<TableCell>{asset.symbol}</TableCell>
						<TableCell>{asset.priceUsd}</TableCell>
						<TableCell>{`${asset.percentChangeUsdLast24Hours}%`}</TableCell>
						<TableCell width={5}>
							<Button variant='outlined' onClick={() => onAction(asset)}>
								{actionText}
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
