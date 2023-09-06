import { PropsWithChildren } from 'react';

export interface FormControlProps {
	errorMessage: string;
	hideError?: boolean;
}

export const FormControl = ({
	children,
	errorMessage,
	hideError = false,
}: PropsWithChildren<FormControlProps>) => {
	return (
		<div className="flex flex-col gap-1">
			{children}
			{!hideError && <span className="text-sm leading-4 text-red">{errorMessage}</span>}
		</div>
	);
};

FormControl.display = 'FormControl';
