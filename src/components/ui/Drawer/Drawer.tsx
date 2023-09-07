'use client';

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as DrawerPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/helpers/cn';

const Drawer = DrawerPrimitive.Root;
const DrawerPortal = DrawerPrimitive.Portal;

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;

const DrawerTitle = DrawerPrimitive.Title;
const DrawerDescription = DrawerPrimitive.Description;

const DrawerOverlay = forwardRef<
	ElementRef<typeof DrawerPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		className={cn(
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60',
			className,
		)}
		{...props}
		ref={ref}
	/>
));

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
	'fixed z-50 gap-4 bg-white px-12 py-16 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom:
					'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-[524px] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
				right:
					'inset-y-0 right-0 h-full w-[524px] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	},
);

interface DrawerContentProps
	extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
		VariantProps<typeof drawerVariants> {}

const DrawerContent = forwardRef<ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
	({ side = 'right', className, children, ...props }, ref) => (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content
				ref={ref}
				className={cn(drawerVariants({ side }), className)}
				{...props}
			>
				{children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	),
);

DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerTitle, DrawerDescription };
