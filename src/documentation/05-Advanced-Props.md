# **Advanced Props**

## **String Literals With Union Types**

Now that we are fammiliar with basic types both reference and primitive types, we can dive deeper into more advanced types in React.
There may be some cases when we would need a specific string props to be passed to the component. In these situations we can use
string literals with union types and we can render the exmaple message conditionally.

```tsx
// Status.tsx
type StatusProps = {
	status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
	let message;

	switch (props.status) {
		case 'loading':
			message = 'Loading...';
		case 'success':
			message = 'Data fetched successfully!';
		case 'error':
			message = 'Error fetching data';
		default:
			message = 'No state was triggered';
	}

	return (
		<div>
			<h2>Status - {message}</h2>
		</div>
	);
};

// App.tsx
import './App.css';
import { Status } from './components/Status';

const App = () => {
	return (
		<div className='App'>
			<Status status='loading' />
		</div>
	);
};
```

This approach helps us prevent case of passing in wrong string to the componenet.

## **Children String Props**

In React we often use components to wrap other components, we will need to cover what types are children props that we get from the component.

```tsx
// Heading.tsx
type HeadingProps = {
	children: string;
};

export const Heading = (props: HeadingProps) => {
	return <h2>{props.children}</h2>;
};

// App.tsx
import './App.css';
import { Heading } from './components/Heading';
import { Status } from './componets/Staus';

const App = () => {
	return (
		<div>
			<Status status='loading' />
			<Heading>This is text from the App component</Heading>
		</div>
	);
};
```

## **Children Component Prop**

Now this works just fine but what about if we need the children prop to be another React component? We will need to import
ReactNode from the react library and specify this type in the prop types.

```tsx
// Oscar.tsx
import { ReactNode } from 'react';

type OscarProps = {
	children: ReactNode;
};

export const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>;
};

// App.tsx

import './App.css';
import { Heading } from './components/Heading';
import { Status } from './componets/Staus';
import { Oscar } from './components/Oscar';

const App = () => {
	return (
		<div>
			<Status status='loading' />
			<Oscar>
				<Heading>Oscar goes to Leonardi Dicaprio!</Heading>
			</Oscar>
		</div>
	);
};
```

## **Default & Optional Props**

Last type that we will discuss in this chapter is the optional type. In React popular library prop-types we would create a new object with the
default types. In TypeScript we can create default props the same way as we create default values inside regular JavaScript objects. For this example
let's revisit the Greet component.

```tsx
// Greet.tsx
type GreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props;

	return (
		<>
			{props.isLoggedIn ? (
				<h2>
					Welcome {props.name}! You have {messageCount} unread messages
				</h2>
			) : (
				<h2>Welcome Guest</h2>
			)}
		</>
	);
};

// App.tsx
import './App.css';
import { Greet } from './components/Greet';

const App = () => {
	return (
		<div className='App'>
			<Greet
				name='Emilia'
				isLoggedIn={true}
			/>
		</div>
	);
};
```

Now if we don't provide messageCount prop React will assume form the default param that it should be 0.
This approach is very usefull if we aren't certain that data will go to component on initial render.
