import { PropsWithChildren, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/helpers/cn';

const headingVariants = cva('block text-base font-excon font-normal', {
	variants: {
		variant: {
			'heading-1': 'font-boxing text-6xl leading-16',
			'heading-2': 'font-boxing text-4xl leading-9',
			'heading-3': 'text-2xl font-bold leading-8',
			subheading: 'font-bold leading-6',
		},
	},
	defaultVariants: {
		variant: 'heading-1',
	},
});

interface HeadingProps
	extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
		VariantProps<typeof headingVariants> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	asChild?: boolean;
}

export const Heading = ({
	className,
	variant,
	children,
	as,
	asChild,
	...props
}: PropsWithChildren<HeadingProps>) => {
	const DynamicTag = as ?? 'p';
	const Comp = asChild ? Slot : DynamicTag;

	return (
		<Comp className={cn(headingVariants({ variant, className }))} {...props}>
			{children}
		</Comp>
	);
};

Heading.displayName = 'Heading';
