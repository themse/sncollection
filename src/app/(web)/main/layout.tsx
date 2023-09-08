import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Container } from '@/components/Container';
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { PlusIcon } from '@/ui/Icon';
import { DrawerTrigger } from '@/ui/Drawer';
import { DrawerProvider } from '@/context/DrawerContext';
import { CurrentSneakersProvider } from '@/context/CurrentSneakersContext';
import { AllSneakersProvider } from '@/context/AllSneakersContext';

export const metadata: Metadata = {
	title: 'SN Collector - Sneakers',
};

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<AllSneakersProvider>
			<CurrentSneakersProvider>
				<DrawerProvider>
					<Container>
						<header className="mt-16 flex flex-col items-center gap-6 md:my-16 md:justify-between lg:flex-row">
							<Heading className="whitespace-nowrap text-3xl sm:text-4xl xl:text-5xl 3xl:text-6xl">
								Your collection
							</Heading>
							<div className="flex w-full items-center gap-x-4 md:w-fit">
								<SearchInput wrapperClassnames="w-full md:w-fit" className="w-full md:w-fit" />
								<DrawerTrigger asChild>
									<Button
										type="button"
										variant="primary"
										className="fixed bottom-8 left-0 right-0 mx-auto h-fit w-11/12 whitespace-nowrap md:static md:w-max"
									>
										<PlusIcon name="plus" className="mr-2" />
										Add new sneakers
									</Button>
								</DrawerTrigger>
							</div>
						</header>

						{children}
					</Container>
				</DrawerProvider>
			</CurrentSneakersProvider>
		</AllSneakersProvider>
	);
};

export default MainLayout;
