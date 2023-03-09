/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';

import { APP_TITLE, PAGE_TITLE_HOME } from '../../utils/constants';

export const Home = () => {
	return (
		<>
			<HelmetProvider>
				<title>
					{PAGE_TITLE_HOME} | {APP_TITLE}
				</title>
			</HelmetProvider>
			<Typography variant='h4'>{`Hello, Shift Network Team!`}</Typography>
			<div
				css={css`
					text-align: center;
					margin-top: 6rem;
				`}
			>
				<Typography variant='h6'>{"Let's track the crypto currencies!"}</Typography>
			</div>
		</>
	);
};
