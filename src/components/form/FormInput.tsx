'use client';

import { Field } from 'react-final-form';
import { TextInput, TextInputProps } from '@/ui/form/TextInput';
import { getErrorMessage } from '@/helpers/getErrorMessage';

interface FormInputProps extends Omit<TextInputProps, 'formControl'> {
	hideError?: boolean;
}

export const FormInput = ({ input, label, hideError = false }: FormInputProps) => {
	const { name, ...inputProps } = input;

	if (!name) {
		throw new Error(
			'"FormInput" cannot be used without the "name" field. Please ensure that the "name" attribute is included',
		);
	}

	return (
		<Field
			name={name}
			render={({ input, meta }) => {
				const hasError = !hideError && meta.touched && meta.error;

				return (
					<TextInput
						formControl={{
							errorMessage: getErrorMessage(meta.error),
							hideError: !hasError,
						}}
						label={label}
						input={{ ...inputProps, ...input }}
					/>
				);
			}}
		/>
	);
};
