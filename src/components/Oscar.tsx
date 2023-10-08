import { ReactNode } from 'react';

type OscarType = {
	children: ReactNode;
};

const Oscar = ({ children }: OscarType) => {
	return <div>{children}</div>;
};

export default Oscar;
