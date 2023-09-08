'use client';

import { Heading } from '@/ui/Heading';
import { Button } from '@/ui/Button';
import { Container } from '@/components/Container';

type Props = {
	error: Error;
	reset: () => void;
};

const Error = ({ error, reset }: Props) => {
	return (
		<Container>
			<Heading>
				Error - {error.name} {error.message}
			</Heading>
			<Button type="button" onClick={reset}>
				Try again
			</Button>
		</Container>
	);
};

export default Error;
