import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

import { DARK_MODE_THEME } from '../utils/constants';

export const getAppTheme = (mode: typeof DARK_MODE_THEME): Theme => {
	let theme = createTheme({
		palette: {
			mode,
		},
	});
	theme = responsiveFontSizes(theme);
	return theme;
};
