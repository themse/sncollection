import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Container } from '@/components/Container';
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/ui/Icon';
import {
	Drawer,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerDescription,
} from '@/ui/Drawer';
import { UpsertSneakersForm } from '@/components/form/UpsertSneakersForm';

export const metadata: Metadata = {
	title: 'SN Collector - Sneakers',
};

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<Drawer>
			<Container>
				<header className="my-16 flex flex-col items-center gap-4 md:items-start md:justify-between lg:flex-row">
					<Heading>Your collection</Heading>
					<div className="flex items-center gap-x-4">
						<SearchInput />
						<DrawerTrigger asChild>
							<Button
								variant="primary"
								className="fixed bottom-8 left-0 right-0 mx-auto h-fit w-11/12 whitespace-nowrap md:static md:w-max"
							>
								<Icon name="plus" className="mr-2" />
								Add new sneakers
							</Button>
						</DrawerTrigger>
					</div>
				</header>

				{children}
			</Container>

			<DrawerContent className="space-y-10">
				<DrawerTitle asChild>
					<div className="flex items-start justify-between">
						<Heading variant="heading-2">Add sneakers to your collection</Heading>
						<DrawerClose>
							<Icon name="x" className="h-6 w-6 text-gray-400" />
							<span className="sr-only">Close</span>
						</DrawerClose>
					</div>
				</DrawerTitle>
				<DrawerDescription asChild>
					<UpsertSneakersForm />
				</DrawerDescription>
			</DrawerContent>
		</Drawer>
	);
};

export default MainLayout;
