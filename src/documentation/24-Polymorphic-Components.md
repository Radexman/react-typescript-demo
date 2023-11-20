# **Polymorphic Components**

In this section we will dive deeper into creating our own design systems and we will create components with tags based on the porp passed to the component. This can prove usefull when creating design systems from scratch and not using any UI framework. Let's create three different tags and see how to use generics to create customizable compoenents.

```tsx
// Text.tsx
import { ComponentProps, ElementType, ReactNode } from 'react';

type TextOwnProps<E extends ElementType> = {
	size?: 'sm' | 'md' | 'lg';
	color?: 'primary' | 'secondary';
	children: ReactNode;
	as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends ElementType = 'div'>({ size, color, children, as }: TextProps<E>) => {
	const Component = as || 'div';
	return <Component className={`class-with-${size}-${color}`}>{children}</Component>;
};

// App.tsx

import './App.css';
import { Text } from './components/polymorphic/Text';

function App() {
	return (
		<div className='App'>
			<Text
				as='h1'
				size='lg'
			>
				Heading
			</Text>
			<Text
				as='p'
				size='md'
			>
				Paragraph
			</Text>
			<Text
				as='label'
				htmlFor='someId'
				size='sm'
				color='secondary'
			>
				Label
			</Text>
		</div>
	);
}

export default App;
```
