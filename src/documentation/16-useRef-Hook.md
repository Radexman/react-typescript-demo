# **useRef Hook**

Now typing useRef hook in TypeScript can be divided in two different segements, when the ref is unmutable and when it is mutable. It's quite easy to type useRef hook so let's get into it.

## **Unmutable useRef**

In this simple component all we need to do is to add the HTML Element so that TypeScript stops complaining about the never type.
We will need to add optional chaining character to the current property or use non null (!) assertion to tell TypeScript that we know this element does exist in the DOM.

```tsx
// DomRef.tsx
import { useRef, useEffect } from 'react';

export const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<input
				type='text'
				ref={inputRef}
			/>
		</div>
	);
};
```

## **Mutable useRef**

Now we will learn how to manage mutable refs. This component is a bit more complicated but it is just a timer, nevertheless we will focus on adding propper types so that TypeScript stops complaining. This is actually super simple all we need to do is to add number with null union type to the useRef hook.
Now this will not fix all of the problems so let's change the null values to undefined.

```tsx
// MutableRef
import { useState, useRef, useEffect } from 'react';

export const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | undefined>(undefined);

	const stopTimer = () => {
		window.clearTimer(interValRef.current);
	};

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer(() => timer + 1);
		}, 1000);
	}, []);

	return (
		<div>
			Hook Timer - {timer} -<button onClick={() => stopTimer()}>Stop Timer</button>
		</div>
	);
};
```
