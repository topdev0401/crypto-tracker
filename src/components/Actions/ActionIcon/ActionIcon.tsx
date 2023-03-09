import { ComponentType } from 'react';
import { Badge, Icon, useTheme } from '@mui/material';

interface ActionIconProps {
	badgeContent?: number;
	icon: ComponentType;
}

export const ActionIcon = ({ badgeContent, icon }: ActionIconProps) => {
	const theme = useTheme();
	return badgeContent ? (
		<Badge badgeContent={badgeContent} color={'primary'}>
			<Icon component={icon} />
		</Badge>
	) : (
		<Icon component={icon} />
	);
};
