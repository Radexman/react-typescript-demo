# **Event Props**

In this chapter we will cover typing event props. In React there are a lot of types of events but we will cover the most common ones, click and change.
Often times we will need to pass down to the event handler an event parameter.

## **Click Event**

```tsx
// Button.tsx
import { MouseEvent } from 'react';

type ButtonProps = {
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps) => {
	return <button onClick={handleClick}>Click</button>;
};

// App.tsx
import './App.css';
import { Button } from './components/Button';

const App = () => {
	return (
		<div className='App'>
			<Button
				handleClick={(event) => {
					console.log('Button Clicked', event);
				}}
			/>
		</div>
	);
};

export default App;
```

## **Change Event**

Typically in this scenario the input component would need a value prop and on change fucntion.

```tsx
// Input.tsx
import { KeyboardEvent } from 'react';

type InputProps = {
	handleChange: (event: KeyboardEvent<HTMLInputElement>) => void;
	value: string;
};

export const Input = (props: InputProps) => {
	return (
		<input
			onChange={props.handleChange}
			type='text'
			value={props.value}
		/>
	);
};

// App.tsx
import './App.css';
import { Input } from './components/Input';

const App = () => {
	return (
		<div className='App'>
			<Input
				value=''
				handleChange={(event) => {
					console.log(event);
				}}
			/>
		</div>
	);
};

export default App;
```

This approach works fine but if we want we can add this typing inside component as well but it's less reusable.
