'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerDescription } from '@/ui/Drawer';
import { UpsertSneakersForm } from '@/components/form/UpsertSneakersForm';
import { Heading } from '@/components/ui/Heading';
import { CloseIcon } from '@/ui/Icon';

type State = {
	isOpenDrawer: boolean;
	onCloseDrawer: () => void;
};

const DrawerContext = createContext<State | null>(null);

export const DrawerProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);

	const onCloseDrawer = () => setIsOpen(false);

	return (
		<DrawerContext.Provider value={{ isOpenDrawer: isOpen, onCloseDrawer }}>
			<Drawer open={isOpen} onOpenChange={setIsOpen}>
				{children}

				<DrawerContent className="space-y-10">
					<DrawerTitle asChild>
						<div className="flex items-start justify-between">
							<Heading variant="heading-2" className="text-2xl sm:text-3xl md:text-4xl">
								Add sneakers to your collection
							</Heading>
							<DrawerClose>
								<CloseIcon className="h-6 w-6 text-gray-400" />
								<span className="sr-only hidden">Close</span>
							</DrawerClose>
						</div>
					</DrawerTitle>
					<DrawerDescription asChild>
						<UpsertSneakersForm />
					</DrawerDescription>
				</DrawerContent>
			</Drawer>
		</DrawerContext.Provider>
	);
};

export const useDrawer = (): State | never => {
	const state = useContext(DrawerContext);

	if (!state) {
		throw new Error('useDrawer is used only within DrawerProvider');
	}

	return state;
};
