import { ComponentType, FC } from 'react';

/**
 * Represents the route of a page.
 */
export type Route = {
	key: string;
	title: string;
	description?: string;
	path?: string;
	component?: FC<{}>;
	isEnabled: boolean;
	icon?: ComponentType;
	subRoutes?: Route[];
	appendDivider?: boolean;
	expanded?: boolean;
};
