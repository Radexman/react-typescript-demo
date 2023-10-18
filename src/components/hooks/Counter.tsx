import { useReducer } from 'react';

type StateType = {
	count: number;
};

type UpdateAction = {
	type: 'increment' | 'decrement';
	payload: number;
};

type ResetAction = {
	type: 'reset';
};

type ActionType = UpdateAction | ResetAction;
const initialState = {
	count: 0,
};

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - action.payload };
		case 'reset':
			return initialState;
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

	const reset = () => {
		dispatch({ type: 'reset' });
	};

	return (
		<div>
			<p>{state.count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;
