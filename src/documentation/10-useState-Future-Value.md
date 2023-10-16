## **useState Future Value**

In the previous section we relied on the type inference, but sometimes we have a situation when the value is yet to come and the state
has to be null for a while.

For this approach to work we will need to implement union type in the state.

```tsx
// User.tsx
import { useState } from 'react';

type AuthUser = {
	name: string;
	email: string;
};

export const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({
			name: 'John',
			email: 'johndoe@gmail.com',
		});
	};
	const handleLogout = () => {
		setUser(null);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User name is {user?.name}</p>
			<p>User email is {user?.email}</p>
		</div>
	);
};
```

With this implementation we pacified TypeScript and covered the case of temporary lack of data. We will get usefull hint from TS
that will add to our properties optional chaining operator that will handle ptotenially missng data. This triggers because user can
be potentially null.
