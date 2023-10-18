# **useContext Hook**

We will now see how to type another React hook for state management called useContext. As you should know, useContext
is used to handle more complex state in React. Luckylli TypeScript's inference will help us again greately here.
Let's create common context use case which is theme provider. Let's look at starting files.

```tsx
// theme.ts
export const theme = {
	primary: {
		main: '#3f51b5',
		text: '#ffffff',
	},
	secondary: {
		main: '#f50057',
		text: '#ffffff',
	},
};

//Box.tsx
const Box = () => {
	return <div>Theme Context</div>;
};

export default Box;
```

This is our starter code. Theme object and Box component which will recieve styling from context. Now let's create ThemeContext.
createContext function needs to recieve the theme object. We already worked with the child props as other React components. So the
correct way to type this is to bring ReactNode.

```tsx
// ThemeContext.tsx
import { ReactNode, createContext } from 'react';
import { theme } from 'theme';

type ThemeContextProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContectProvider = ({ children }: ThemeContextProviderProps) => {
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
```

Now that we have correctly typed context we can bring it to the App component and use it on the Box component, let's get into it!
The way to create global context is of course wrapping our whole app in it.

```tsx
// App.tsx
import './App.css';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';

function App() {
	return (
		<div className='App'>
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
		</div>
	);
}

export default App;

// Box.tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.tsx';

const Box = () => {
	const { theme } = useContext(ThemeContext);

	return <div style={ backgroundColor: theme.primary.main, color: theme.primary.text }>Theme Context</div>;
};

export default Box;
```

This is the correct way to create Context API with TypeScript the fastest way, as you can probably see some of the work was done
again by type inferrence.
