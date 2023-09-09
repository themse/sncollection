import Image from 'next/image';

import { Text } from '@/ui/Text';
import emptyImg from '/public/images/empty.png';

export const EmptySneakers = () => {
	return (
		<div className="flex w-full flex-col justify-center gap-y-10 py-14">
			<div className="mx-auto">
				<Image src={emptyImg} alt="Empty Page" className="object-contain" priority />
			</div>
			<Text className="text-center">
				Seem&apos;s like you still didn&apos;t add
				<br /> any new sneaker to your collection
			</Text>
		</div>
	);
};
