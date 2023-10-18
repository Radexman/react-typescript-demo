import { useReducer } from 'react';

type StateType = {
	count: number;
};

type ActionType = {
	type: string;
	payload: number;
};

const initialState = {
	count: 0,
};

const reducer = (state: StateType, action: ActionType) => {
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

	const increment = () => {
		dispatch({ type: 'increment', payload: 1 });
	};

	const decrement = () => {
		dispatch({ type: 'decrement', payload: 1 });
	};

	return (
		<div>
			<p>{state.count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;
