# **useReducer Strict Action Types**

In the previous example we learned how to type basic reducers in React but we often need more sophistications than that so let's
dive into string literal unuion types and descriminating union types inside React.

We will add on to the previous example. Let's be more specitic with the action type to prevent us from typing something silly instead of
propper action name into dispatch function. We can achieve that with something we already covered, string literals or template literals.

```tsx
// Counter.tsx
import { useReact } from 'react';

type StateTypes = {
    count: number;
}

type ActionTypes = {
    type: 'increment' | 'decrement';
    payload: number;
}

const initialState = {
    count: 0;
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: 'increment', payload: 1 });
    }

    const decrement = () => {
        dispatch({ type: 'decrement', payload: 1 });
    }

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter

```

Now this solution helps us prevent typos and mistakes in the action types. But let's complicate things further and add a reset functionality.

First add the 'reset' string type to our ActionTypes. Next add the case for reducer, we can reset our state by returning initialState. And
the next move is to bring the dispatch function and add it to another button to complete the process.

```tsx
// Counter.tsx
import { useReact } from 'react';

type StateTypes = {
    count: number;
}

type ActionTypes = {
    type: 'increment' | 'decrement' | 'reset';
    payload?: number;
}

const initialState = {
    count: 0;
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initalState;
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: 'increment', payload: 1 });
    }

    const decrement = () => {
        dispatch({ type: 'decrement', payload: 1 });
    }

    const reset = () => {
        dispatch({ type: 'reset' });
    }

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter

```

Now this had to cause some problems, you may have noticed that we got some problems. Because this action doesn't need a payload
we will get an warning. Now to get rid of that we will use our optional type. This also has caused a problem, so what's the solution?
We will use something called discriminated unions, the adviced way of typing reducers in React.

Basically what we need to do is to create two different types for case of existing payload or lack of payload. Than we will remove types from ActionTypes
and create the union type of those two types. This solution will work just fine and it is advised by TypeScript team.

```tsx
// Counter.tsx
import { useReact } from 'react';

type StateTypes = {
    count: number;
}

type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number;
}

type ResetAction = {
    type: 'reset';
}

type ActionTypes = UpdateAction | ResetAction;

const initialState = {
    count: 0;
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initalState;
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: 'increment', payload: 1 });
    }

    const decrement = () => {
        dispatch({ type: 'decrement', payload: 1 });
    }

    const reset = () => {
        dispatch({ type: 'reset' });
    }

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter

```

This solution prevents common reducer errors.
