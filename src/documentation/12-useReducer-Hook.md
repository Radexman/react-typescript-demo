# **useReducer Hook**

Now we will learn how to type reducers in React. Type inference will be helping us grately but there is some
work to be done as us programmers. We will need to add two types for our reducer function, one for state and
one for action.

Let's explore this topic inside simple counter app used in many boiler plates code for simplicity so that
we can focus on the mani topic and not too complicated logic.

Small reminder, this documentation is not a tutorial on how to work with React but how to type most common patterns in this library.
Knowledge about React core concepts is necessary to proceed further.

```tsx
// Counter.tsx
import { useReducer } from 'react';

type StateTypes = {
	count: number;
};

type ActionTypes = {
	type: string;
	payload: number;
};

const initialState = {
	count: 0,
};

const reducer = (state: StateTypes, action: ActionTypes) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - action.payload };
		default:
			return state;
	}
};

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const inctement = () => {
		dispatch({ type: 'increment', payload: 10 });
	};

	const decrement = () => {
		dispatch({ type: 'decrement', payload: 10 });
	};

	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;
```

Notice how we typed our reducer. We basically needed to create two seperate types both for the function
arguments. Action is simply action type which is string in this case and the second property on action object
is payload which in our case is of course of type number. State object in this example is of type number because
we only play with numerical values in this example.

If you will hover over the useReducer inside our JSX compnent we will notice some usefull information about the
types and diapatch actions. This approach will help us prevent case of passing wrong data type as TypeScript will
complain that we are trying to do something forbidden. Try to change type and payload inside one of the functions
to see this behaviour.

## **Tip**

If you're stuck while trying to add types in React, try to hover on red squiggly lines as they may give you
advice on what exactly is expected to be typed and then gradually figure out what and where needs typing.
