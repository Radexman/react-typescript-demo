import { ComponentProps } from 'react';

type CustomInputProps = ComponentProps<'input'>;

export const CustomInput = ({ ...rest }: CustomInputProps) => {
	return <input {...rest} />;
};
