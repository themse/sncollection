import Link from 'next/link';
import Image from 'next/image';

import { Heading } from '@/ui/Heading';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';
import welcomeImg from '/public/images/welcome.png';

export const Welcome = () => {
	return (
		<div className="flex h-screen items-center justify-between p-8">
			<div className="w-7/12">
				<Image src={welcomeImg} alt="Welcome Page" className="object-contain" priority />
			</div>
			<div className="flex w-4/12 flex-col gap-y-14">
				<div className="space-y-6">
					<Heading as="h1">Welcome to a sneaker collector</Heading>
					<Text>
						This tool not only lets you showcase your prized sneaker collection but also provides
						you with the tools to curate, organize, and catalogue your sneakers like never before.
					</Text>
				</div>
				<Button asChild className="w-fit">
					<Link href="/main">Start your new collection</Link>
				</Button>
			</div>
		</div>
	);
};
