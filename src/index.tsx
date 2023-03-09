import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

import { APP_TITLE } from './utils/constants';

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<title>{APP_TITLE}</title>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
			<meta name='viewport' content='initial-scale=1, width=device-width' />
		</HelmetProvider>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
