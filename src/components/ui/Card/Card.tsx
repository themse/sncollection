import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/helpers/cn';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<article
			ref={ref}
			className={cn(
				'flex min-h-[186px] w-fit min-w-[424px] flex-col justify-between gap-6 p-6',
				'rounded-xl shadow-[0_3px_5px_5px] shadow-blue-dark/5',
				'border-transparent border hover:border-black',
				className,
			)}
			{...props}
		/>
	),
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<header ref={ref} className={cn('flex', className)} {...props} />
	),
);

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn('flex', className)} {...props} />,
);

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<footer ref={ref} className={cn('flex', className)} {...props} />
	),
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
