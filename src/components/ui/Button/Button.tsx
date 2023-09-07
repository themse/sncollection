import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/helpers/cn';

const buttonVariants = cva(
	[
		'inline-flex items-center justify-center',
		'font-medium',
		'rounded-xl outline-blue outline-4 outline-offset-1',
		'disabled:pointer-events-none',
		'active:bg-red',
	],
	{
		variants: {
			variant: {
				primary: [
					'bg-black px-8 py-3 text-white',
					'hover:bg-black/80',
					'disabled:bg-gray-200 disabled:text-gray-300',
				],
				secondary: [
					'border border-black px-3.5 py-0.5',
					'hover:border-gray-400 hover:text-gray-400',
					'disabled:border-gray-300 disabled:text-gray-300',
					'active:border-red active:text-white',
				],
			},
			isActive: {
				true: 'bg-red border-red hover:border-red/50 text-white hover:text-white',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	},
);

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, fullWidth, isActive, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';

		return (
			<Comp
				className={cn(buttonVariants({ variant, fullWidth, isActive, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = 'Button';
