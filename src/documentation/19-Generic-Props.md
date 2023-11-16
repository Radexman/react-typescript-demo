# **Generic Props**

In TypeScript we can use feature called generics which hepls us when we need to parametrize functions or in this case props. We already used generics in this course but this time we will focus on props.

Let's imagine that we have an list of differend data types to render. Covering each case with the union type is an option but it is better to use generic in this situation.

Let's render List component and pass in different data types to it.
We will need to add generic prop type to handle this case.

```tsx
// App.tsx
import './App.css';
import { List } from './compontnts/generics/List';

const App = () => {
	return (
		<App className='App'>
			<List
				items={['Batman', 'Superman', 'Wonder Woman']}
				onClick={(item) => console.log(item)}
			/>
			<List
				items={[1, 2, 3]}
				onClick={(item) => console.log(item)}
			/>
			<List
				items={[
					{
						first: 'Bruce',
						last: 'Wayne',
					},
					{
						first: 'Clark',
						last: 'Kent',
					},
					{
						first: 'Jeremy',
						last: 'Clarksons',
					},
				]}
			/>
		</App>
	);
};

export default App;

// List.tsx
type ListProps<T> = {
	items: T[];
	onClick: (value: T) => void;
};

export const List <T extends {}>({items, onClick}: ListProps<T>) => {
    render (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => onClick(item)}>{item}</div>
            ))}
        </div>
    )
}
```

By adding generic prop types we can handle mutiple possible prop types that are beeing passed to the component.
