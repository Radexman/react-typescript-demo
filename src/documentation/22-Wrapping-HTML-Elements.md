# **Wrapping HTML Elements**

We often want to create our own components or design systems, there is a feature that let's is wrap out component types with HTML tags to create customizable components faster. If we want we can even omit some of the props. In this section we will create customizable button and input components.

```tsx
// CustomButton.tsx
import { ComponentProps } from 'react';

type ButtonProps = {
	variant: 'primary' | 'secondary';
	children: string;
} & Omit<ComponentProps<'button'>, 'children'>;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
	return (
		<button
			className={`class-with-${variant}`}
			{...rest}
		>
			{children}
		</button>
	);
};

// CustomInput.tsx
import { ComponentProps } from 'react';

type CustomInputProps = ComponentProps<'input'>;

export const CustomInput = ({ ...rest }: CustomInputProps) => {
	return <input {...rest} />;
};

// App.tsx
import './App.css';
import CustomButton from './components/html/CustomButton';

const App = () => {
	return (
		<div className='App'>
			<CustomButton
				variant='primary'
				onClick={() => console.log('Clicked')}
			>
				Priamry Button
			</CustomButton>
		</div>
	);
};

export default App;
```
