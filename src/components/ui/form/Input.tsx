'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/helpers/cn';

const inputVariants = cva(
	[
		'outline-blue flex h-12 min-w-[280px] w-fit rounded-lg border border-gray-200 px-4 py-3 outline-2 placeholder:text-gray-200',
		'hover:border-gray-400',
		'active:border-2 active:border-black active:outline-none',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'focus-within:border-2 focus-within:border-black',
	],
	{
		variants: {
			fullWidth: {
				true: 'w-full',
			},
			hasError: {
				true: 'border-red',
			},
		},
	},
);

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, fullWidth, hasError, type = 'text', ...props }, ref) => {
		const [isActive, setIsActive] = useState(false);

		return (
			<input
				onClick={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
				type={type}
				className={cn(
					[inputVariants({ fullWidth, hasError }), isActive && 'focus-within:outline-none'],
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';
