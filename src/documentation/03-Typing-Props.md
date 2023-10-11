# **Typing Props**

Create initial component called Greet.tsx for this chapter.

```tsx
// Greet.tsx
export const Greet = () => {
	return (
		<div>
			<h2>Welcome Jack! You have 10 unread messages</h2>
		</div>
	);
};
```

This component needs to be imported and included in the App.tsx as well as all the other
components that we will create.

```tsx
// App.tsx
import './App.css';
import { Greet } from './components/Greet';

const App = () => {
	return (
		<div className='App'>
			<Greet />
		</div>
	);
};

export default App;
```

We will explore some basic prop types when working in TypeScript and how to use them.
Let's start with replacing hardcoded name with dynamic prop.

```tsx
// Greet.tsx

type GreetProps = {
	name: string;
};

const Greet = (props: GreetProps) = > {
    return (
        <div>
            <h2>Welcome {props.name}! You have 10 unread messages</h2>
        </div>
    )
}
```

Now we can sent the prop from the component.

```tsx
// App.tsx
import './App.css';
import { Greet } from './components/Greet';

const App = () => {
	return (
		<div className='App'>
			<Greet name='Jack' />
		</div>
	);
};

export default App;
```

This solution may seem to be much more time consuming but whis approach actually gives us more type sefety
and neat intelliseanse when working with props. This makes our core less error prone in the long run.
Also when nivoking data in the component we will get errors if we will pass wrong data type to the component.

## **Types or Interfaces**

Taking into consideration latest TypeScript releases there is hadrly any differance between type and interface.
