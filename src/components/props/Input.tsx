import { ChangeEvent } from 'react';

type InputProps = {
	value: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {};
	return (
		<input
			type='text'
			value={value}
			onChange={handleInputChange}
		></input>
	);
};

export default Input;
