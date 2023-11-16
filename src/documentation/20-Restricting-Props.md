# **Restricting Props**

Sometimes in our app we will need to implement an restricting mechanism. What this means is basically we will want only one prop to be passed into the component.

We will create that logic in RandomNumber component. How this component works is basically the render correct propst depending on what prop is passed in. But we want to only one of the to be passed into component.

To achieve that result we will need to create type for each case that will include the common type that will be in all of the cases.

We are going to make use of never type

```tsx
// RandomNumber.tsx
type RandonmNumberType = {
	value: number;
};

type PositiveNumber = RandomNumberType & {
	isPositive: boolean;
	isNegative?: never;
	isZero?: never;
};

type NegativeNumber = RandomNumberType & {
	isNegative: boolean;
	isPositive?: never;
	isZero?: never;
};

type isZero = RandomNumberType & {
	isZero: boolean;
	isPositive?: never;
	isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | isZero;

export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
	return (
		<div>
			{value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
		</div>
	);
};

// App.tsx
import './App.css';
import RandomNumber from './components/restriction/RandomNumber';

export const App = () => {
	return (
		<div className='App'>
			<RandomNumber
				value={10}
				isPositive={true}
			/>
		</div>
	);
};

export default App;
```
