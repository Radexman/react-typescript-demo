# **Template Literals and Exclude**

We use some literal untion types in the past but here we will explore how to use template literals in some specific use case. We will create a component that will accept a couple of props that are specific because their names overlap.

By using template literals this way we can shorten the union types and we can even exclude types that we don't want by using Exclude keyword.

```tsx
// Toast.tsx
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
	position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

export const Toast = ({ position }: ToastProps) => {
	return <div>Toast Notification Position - {position}</div>;
};

// App.tsx
import './App.css';
import Toast from './components/templateLiterals/Toast';

const App = () => {
	return (
		<div className='App'>
			<Toast postion='left-top' />
		</div>
	);
};
```
