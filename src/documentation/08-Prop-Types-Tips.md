# **Prop Types Tips**

In this optional section we will go over three tips related to propt types in React.

## **Destructuring Prop**

We can extract individual props directly from the props object inside component.

```tsx
// Greet.tsx

type GreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

export const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
    return (
        <div>
            {isLoggedIn ? (
                <h2>Welcome {name}! You have {message count} unread messages</h2>
            ) : (
                <h2>Welcome Guest</h2>
            )}
        </div>
    )
}
```

## **Exporting Types**

For now we have defined our types at the top of each individual files, now this works fine in the small apps but can
get really messy really fast. We can keep our types inside individual files outside components and simply import them
as any other modules.

```tsx
// Person.types.ts
export type PersonProps = {
	name: {
		first: string;
		last: string;
	};
};

// Person.tsx
import { PersonProps } from './Person.types.tsx';

export const Person = ({ name: { first }, name: { last } }: PersonProps) => {
	return (
		<div>
			{first}
			{last}
		</div>
	);
};
```

## **Reusing Types**

It is possible to extract type and use it in multiple places. Let's extract the name object from the previous example
into separate object. Now that we have separate type we can use it in other places. This method enforces reusability and
prevents code duplication.

```tsx
// Person.types.ts
export type Name = {
	first: string;
	last: string;
};

export type PersonProps = {
	name: Name;
};

// PersonList.tsx
import { Name } from './Person.types.ts';

type PersonListProps = {
	names: Name[];
};

export const PersonList = ({ names }: PersonListProps) => {
	return (
		<div>
			{names.map((name, index) => (
				<h2 key={index}>
					{name.first}
					{name.last}
				</h2>
			))}
		</div>
	);
};
```
