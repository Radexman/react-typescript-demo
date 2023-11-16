# **Component Prop**

Sometimes in React we need to pass component as a prop and often that component has it's own props. Let's learn how to type this kind of situation.
We will work on three differend files in this example but the logic is still very simple. It's the regular conditional rendering.

```jsx
// Login.tsx
export const Login = () => {
	return <div>Please login to continue</div>;
};

// Profile.tsx
export type ProfileProps = {
	name: string,
};

export const Profile = ({ name }: ProfileProps) => {
	return <div>Private Profile component. Name is {name}</div>;
};

// Private.tsx
import { ComponentType } from './react';
import { Login } from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
	isLoggedIn: boolean,
	Component: ComponentType<ProfileProps>,
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name='Radek' />;
	} else {
		return <Login />;
	}
};

// App.tsx
import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';

const App = () => {
	return (
		<div className='App'>
			<Private
				isLoggedIn={true}
				component={Profile}
			/>
		</div>
	);
};

export default App;
```

All we need to do is to import ComponentType from react and add this type to the prop types. If the component itself has a prop we will need to import its prop types and add this to the angle brackets and job's done.
