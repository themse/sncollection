import { PropsWithChildren, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/helpers/cn';

const textVariants = cva('block font-excon font-normal', {
	variants: {
		variant: {
			primary: 'text-base leading-6',
			secondary: 'text-sm leading-4',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

interface TextProps
	extends HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof textVariants> {
	as?: 'p' | 'span';
}
export const Text = ({
	className,
	variant,
	children,
	as,
	...props
}: PropsWithChildren<TextProps>) => {
	const DynamicTag = as ?? 'p';

	return (
		<DynamicTag className={cn(textVariants({ variant, className }))} {...props}>
			{children}
		</DynamicTag>
	);
};

Text.display = 'Text';
