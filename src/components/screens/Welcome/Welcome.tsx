import Link from 'next/link';
import Image from 'next/image';

import { Heading } from '@/ui/Heading';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';
import welcomeImg from '/public/images/welcome.png';

export const Welcome = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-start gap-x-4 gap-y-10 py-4 md:flex-row md:justify-between">
			<div className="w-11/12 md:w-5/12 lg:w-6/12 xl:w-7/12">
				<Image src={welcomeImg} alt="Welcome Page" className="object-contain" priority />
			</div>
			<div className="flex w-full flex-col gap-y-14 md:w-7/12 lg:w-6/12 xl:w-4/12">
				<div className="space-y-6 text-center md:text-left">
					<Heading as="h1">Welcome to a sneaker collector</Heading>
					<Text>
						This tool not only lets you showcase your prized sneaker collection but also provides
						you with the tools to curate, organize, and catalogue your sneakers like never before.
					</Text>
				</div>
				<Button asChild className="w-full md:w-fit">
					<Link href="/main">Start your new collection</Link>
				</Button>
			</div>
		</div>
	);
};
