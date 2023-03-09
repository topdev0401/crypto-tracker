import { alpha, styled, Box, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { Asset } from '../../types';

interface SearchPropsInterface {
	list: Asset[];
	label?: string;
	onRowClicked: (row: Asset | null) => void;
}

export const Search = ({ list, label, onRowClicked }: SearchPropsInterface) => {
	const [keyword, setKeyword] = useState<string>('');
	const filteredList =
		keyword.length == 0 ? null : list?.filter((row: Asset) => row.name.toLowerCase().includes(keyword));
	return (
		<Box sx={{ display: { md: 'flex' }, width: '100%' }}>
			<SearchWrapper>
				<Autocomplete
					fullWidth
					disablePortal
					options={list}
					getOptionLabel={(option: Asset) => option.name}
					onChange={(event: any, newValue: Asset | null) => onRowClicked(newValue)}
					renderInput={(params) => <TextField {...params} label={label || 'Search'} />}
				/>
			</SearchWrapper>
		</Box>
	);
};

const SearchWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('md')]: {
		marginLeft: theme.spacing(3),
		width: '26ch',
	}
}));
