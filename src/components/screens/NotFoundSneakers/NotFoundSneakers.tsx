import Image from 'next/image';

import { Text } from '@/ui/Text';
import notFoundImg from '/public/images/not-found.png';

export const NotFoundSneakers = () => {
	return (
		<div className="flex w-full flex-col justify-center gap-y-10 py-14">
			<div className="mx-auto">
				<Image src={notFoundImg} alt="Not Found Sneakers Page" className="object-contain" />
			</div>
			<Text className="text-center">
				Search better. <br /> There is nothing like this in your collection.
			</Text>
		</div>
	);
};
