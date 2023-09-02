import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => {
	const classNames = clsx(...inputs);

	return twMerge(classNames);
};
