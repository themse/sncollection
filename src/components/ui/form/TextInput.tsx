'use client';

import { useId } from 'react';

import { FormControl, type FormControlProps } from './FormControl';
import { Label, type LabelProps } from './Label';
import { Input, type InputProps } from './Input';

export interface TextInputProps {
	formControl: FormControlProps;
	input: InputProps;
	label?: LabelProps & { value: string };
}

export const TextInput = ({ formControl, label, input }: TextInputProps) => {
	const inputId = useId();
	const hasError = formControl.errorMessage.length > 0; // TODO check the type

	return (
		<FormControl {...formControl}>
			{label && (
				<Label htmlFor={inputId} {...label}>
					{label.value}
				</Label>
			)}
			<Input id={inputId} hasError={hasError} {...input} />
		</FormControl>
	);
};

TextInput.display = 'TextInput';
