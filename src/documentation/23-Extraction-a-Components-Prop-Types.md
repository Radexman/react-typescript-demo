# **Extracting a Component Prop Types**

There are some cases when we will want the exact same prop types as in some other component in out app. If we can't directly import that type we can extract it by ComponentProps. Here's how to do it.

```tsx
// CustomComponent.tsx
import { ComponentProps } from 'react';
import { Greet } from '../Greet';

export const CustomComponent = (props: CompnentProps<typeof Greet>) => {
	return <div>{props.name}</div>;
};
```
