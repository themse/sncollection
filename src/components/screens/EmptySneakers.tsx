import Image from 'next/image';

import { Text } from '@/ui/Text';

export const EmptySneakers = () => {
	return (
		<div className="flex w-full flex-col justify-center gap-y-10 py-14">
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
	);
};
