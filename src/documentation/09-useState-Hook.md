# **useState Hook**

We have covered all of the prop types subjects so it'a time to move on to next subject which is typing React hooks.
Let' start with the LoggedIn component. What we need to do is to bring useState hook and create a piece of state
that will hold a boolean.

Inside login handlers we need to toggle the state of isLoggedIn.

```tsx
import { useState } from 'react';

export const LoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>Uset is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
		</div>
	);
};
```

Now believe or not this is correct way to create state with useState hook in TypeScript. Thanks to TypeScript's type inference we
don't need to declare any additional types but if we want to be explicit we can add angle brackets to indicate the type.
