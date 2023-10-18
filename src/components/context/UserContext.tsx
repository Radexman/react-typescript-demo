import { useState, createContext, ReactNode } from 'react';

type UserContextProviderProps = {
	children: ReactNode;
};

export type AuthUser = {
	name: string;
	email: string;
};

type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
