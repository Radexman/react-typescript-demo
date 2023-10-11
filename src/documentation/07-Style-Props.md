# **Style Props**

In this section we will learn how to type style props in React. We will add styles to the mock container element.
Now what exactly is the type of styles of CSS in JS? As you can expect it's object with key value pairs. But React
gives more concise way of typing styles which helps us prevent typos while writing CSS properties. This type is
simply called the CSSProperties. With this prop specified we can pass any styles that we want to the component.

```tsx
// Container.tsx
import { CSSProperties } from 'react';

type ContainerProps = {
	styles: CSSProperties;
};

export const Container = (props: ContainerProps) => {
	return <div style={props.styles}>Text conetnt goes here</div>;
};

// App.tex
import { Container } from './components/Container';

const App = () => {
	return (
		<div>
			<Container styles={{ border: '1px solid black', padding: '1rem' }} />
		</div>
	);
};

export default App;
```

If we will try to add any propery that is not a valid CSS proprty, TypeScript will complain which is good for us.
