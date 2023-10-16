# **useState Type Assertion**

In the previous section we learned how to type state hook when te initial value is not specified. Sometimes TypeScript's complains
doesn't match with our vision, especially when we are certain about data types that will be used in our app. Here comes type assertions
which will be handy in this kind of situations.

```tsx
// User.tsx
import { useState } from 'react';

type AuthUser = {
	name: string;
	email: string;
};

export const User = () => {
	const [user, setUser] = useState<AuthUser>({} as AuthUser);

	const handleLogin = () => {
		setUser({
			name: 'John',
			email: 'johndoe@gmail.com',
		});
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User name is {user.name}</p>
			<p>User email is {user.email}</p>
		</div>
	);
};
```

This syntax will allow us to declare a type when we are certain that it will have the specified structure.
We can delete optional chaining operatore from our code because there will be no case of possibble null state.
