# **Basic Props**

In previous section we covered how to type React props, now we will focus on the everyday data types.
We will work on the same component from the previous chapter.

```tsx
// Greet.tsx
type GreetProps = {
	name: string;
};

export const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>Welcome {props.name}! You have 10 unread messages</h2>
		</div>
	);
};
```

Now to make this component more interesting let's convert message count into a number prop.
We will also add a boolean type and have some conditional rendering,

```tsx
// Greet.tsx
type GreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
	return (
		<>
			{props.isLoggedIn ? (
				<div>
					<h2>
						Welcome {props.name}! You have {props.messageCount} unread messages
					</h2>
				</div>
			) : (
				<div>
					<h2>Hello Guest!</h2>
				</div>
			)}
		</>
	);
};

// App.tsx
import './App.css';
import { Greet } from './components/Greet';

const App = () => {
	return (
		<Greet
			name='Jack'
			messageCount={10}
			isLoggedIn={false}
		/>
	);
};

export default App;
```

TypeScrip will warn us if any prop that we declared in component's prop types is missing in the component.
Now that we have covered basic primitive types let's learn how to type reference types like objects and arrays.

```tsx
// Person.tsx
type PersonProps = {
	name: {
		first: string;
		last: string;
	};
};

export const Person = (props: PersonProps) => {
	return (
		<div>
			{props.name.first}
			{props.name.last}
		</div>
	);
};

// App.js
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

const App = () => {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

	return (
		<Greet
			name='Jack'
			messageCount={10}
			isLoggedIn={false}
		/>
        <Person name={personName}/>
	);
};

export default App;

```

This example shows how we type an object prop in TypeScript. Next we will explore array of objects,
a common data structure used in React.

```tsx
// PersonList.tsx

type PersonListProps = {
	list: {
        first: string;
        last: string;
    }[];
};

export const PersonList = (props: PersonListProps) => {
	return (
		<div>
            {props.list.map((person, index) => (
                <h2 key={index}>{person.first}{person.last}</h2>
            ))}
		</div>
	);
};

// App.js
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList'

const App = () => {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne',
        },
        {
            first: 'Clark',
            last: 'Kent',
        },
        {
            first: 'Princess',
            last: 'Diana',
        }
    ]

	return (
		<Greet
			name='Jack'
			messageCount={10}
			isLoggedIn={false}
		/>
        <Person name={personName}/>
        <PersonList list={nameList}/>
	);
};

export default App;

```
