'use client';

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@helpers/cn';

export interface LabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
	({ className, ...props }, ref) => (
		<LabelPrimitive.Root
			ref={ref}
			className={cn(
				'text-sm leading-4 text-gray-300 hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				className,
			)}
			{...props}
		/>
	),
);

Label.displayName = LabelPrimitive.Root.displayName;
