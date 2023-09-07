import Image from 'next/image';

import { Container } from '@/components/Container';
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/ui/Icon';
import { Text } from '@/ui/Text';

const MainPage = () => {
	return (
		<Container>
			<header className="my-16 flex justify-between gap-x-4">
				<Heading>Your collection</Heading>
				<div className="flex items-center gap-x-4">
					<SearchInput />
					<Button variant="primary" className="h-fit w-max">
						<Icon name="plus" className="mr-2" />
						Add new sneakers
					</Button>
				</div>
			</header>
			<div className="flex w-full flex-col justify-center gap-y-10">
				<div className="relative mx-auto">
					<Image
						src="/images/empty.svg"
						alt="Empty Page"
						width={868}
						height={499}
						className="h-auto w-auto object-contain"
					/>
				</div>
				<Text className="text-center">
					Seem&apos;s like you still didn&apos;t add
					<br /> any new sneaker to your collection
				</Text>
			</div>
		</Container>
	);
};

export default MainPage;
