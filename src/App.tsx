import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { routes } from './config';
import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME } from './utils/constants';

function App() {
	const theme = getAppTheme(DARK_MODE_THEME);
	const addRoute = (route: AppRoute) => <Route key={route.key} path={route.path} component={route.component} exact />;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Layout>
						{routes.map((route: AppRoute) =>
							route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
						)}
					</Layout>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
