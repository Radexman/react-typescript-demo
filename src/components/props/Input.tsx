import { ChangeEvent } from 'react';

type InputProps = {
	value: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {};
	return (
		<input
			type='text'
			value={props.value}
			onChange={handleInputChange}
		></input>
	);
};

export default Input;
