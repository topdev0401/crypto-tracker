import {
	Home as HomeIcon,
	BarChartOutlined as DashboardIcon,
	CodeOutlined as CodeIcon,
	GitHub as GitHubIcon,
	Public as PublicIcon,
	PublicOff as PrivateIcon,
	AccountBoxRounded as UserIcon,
	SettingsOutlined as SettingsIcon,
	ListAlt as ListIcon,
	CreditCard as BillingIcon,
} from '@mui/icons-material';

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';

import { Route } from '../types/Route';

const routes: Array<Route> = [
	{
		key: 'router-home',
		title: 'Home',
		description: 'Home',
		component: Home,
		path: '/',
		isEnabled: true,
		icon: HomeIcon,
		appendDivider: true,
	},
	{
		key: 'router-dashboard',
		title: 'Dashboard',
		component: Dashboard,
		description: 'Dashboard',
		path: '/dashboard',
		isEnabled: true,
		icon: DashboardIcon,
	},
];

export default routes;
