import Image from 'next/image';

import { Text } from '@/ui/Text';

export const NotFoundSneakers = () => {
	return (
		<div className="flex w-full flex-col justify-center gap-y-10 py-14">
			<div className="relative mx-auto">
				<Image
					src="/images/not-found.svg"
					alt="Not Found Sneakers Page"
					width={422}
					height={472}
					className="h-auto w-auto object-contain"
				/>
			</div>
			<Text className="text-center">
				Search better. <br /> There is nothing like this in your collection.
			</Text>
		</div>
	);
};
