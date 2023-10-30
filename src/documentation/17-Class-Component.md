# **Class Component**

Now we need to cover also how to type class based components. It's the old school way of creating React components and it's actually quite easy. Just like in functional components we will need to create component's prop type. Also in the class components we will need to create state type. In functional components the TypeScript's type inference will do the job for us but here we need to create it just like prop types.

```tsx
import { Component } from 'react'

type CounterProps = {
    message: string;
}

type CounterState = {
    count: number;
}

export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count:  0,
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevCount.count + 1 }))
    }

    render() {
        return (
             <button onClick={this.handleClick}>Increment</button>
             {this.props.message} {this.state.count}
        )
    }
}

```
