# **useContext Future Value**

We will now cover the case of possibillity of the lack of existencre of state like we did in the useState section. This approach will
have some simmilarities but will be a bit more complex so let's get into starter code.

```tsx
// User.tsx
const User = () => {
	const handleLogin = () => {};
	const handleLogout = () => {};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User name is</p>
			<p>User email is</p>
		</div>
	);
};
```

We will add login and logout functionality via context to this component. We will need to handle the temporary null state.

```tsx
// UserContext.tsx
import { useState, createContext, ReactNode } from 'react';

type UserContextProviderProps = {
	children: ReactNode;
};

type AuthUser = {
	name: string;
	email: string;
};

type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContect({} as UserContextType);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
```

Some of that code will resamble things that we did previously like ReactNode type on
component's children prop and union type on useState hook because the value will
be sometimes null and sometimes it will have the shape of AuthUser type.

New thing is the UserContextType, we specified a shape of the context itself
by adding uniont types to the state. user object will have previously specified
AuthUser type or be null and setUser will be of type React.Dispatch which can
be neatly copied from TypeScript's hints on hover.

We can improve this code by adding type assertion to the create context, this
will make our component clearer due to removal of the oprional chaining operator
while using state.

We can now wrap our App with the context and create login/logout functionality.

```tsx
// App.tsx
import { UserContextProvider } from './components/context/UserContextProvider';
import User from './components/context/User'

const App = () => {
    return (
        <div>
            <UserContextProvider>
                <User />
            </UserContextProvider>
        </div>
    )
}

// User.tsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
    const userContext = useContext(UserContext)

	const handleLogin = () => {
        if(userContext) {
            userContext.setUser({
                name: 'Emilia';
                email: 'emilia@gmail.com';
            })
        }
    };
	const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    };

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User name is {userContext.user?.name}</p>
			<p>User email is {userContext.user?.email}</p>
		</div>
	);
};

```

This case scenario is very often when working with React so it is worth to memorize.
All we need to do is to type children prop with ReactNode, set the shape of our state which often will be some object and then we will need to create context types
which will consist of two properties, one for 'getter' and another for 'setter'.
The state will be of type of the already created state and union type with null.
Second property will be React.Dispatch which can be copied from TypeScript's hints
and union type for null.
