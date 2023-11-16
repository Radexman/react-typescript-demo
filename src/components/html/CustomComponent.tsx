import { ComponentProps } from 'react';
import Greet from '../props/Greet';

const CustomComponent = (props: ComponentProps<typeof Greet>) => {
	return <div>{props.name}</div>;
};

export default CustomComponent;
