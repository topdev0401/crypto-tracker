import { createContext, Dispatch, SetStateAction } from 'react';

import { Asset } from '../types';

export interface IAssetContext {
	assets: Asset[];
	selectedAssets: Asset[];
	timestamp: string;
	loading: boolean,
	errorText: string;
	setSelectedAssets: Dispatch<SetStateAction<Asset[]>>;
	setAssets: Dispatch<SetStateAction<Asset[]>>;
	setTimestamp: Dispatch<SetStateAction<string>>;
	loadData: () => void;
}

export const AssetContext = createContext<IAssetContext>({} as IAssetContext);
