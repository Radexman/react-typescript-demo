import { ComponentType } from 'react';
import { Login } from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
	isLoggedIn: boolean;
	component: ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name='Radek' />;
	} else {
		return <Login />;
	}
};
