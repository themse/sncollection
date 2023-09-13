import { Container } from '@/components/Container';
import { Welcome } from '@/components/screens/Welcome';
import { PageProps } from '@/types/app';

const CreatePage = ({}: PageProps) => {
	return (
		<Container>
			<Welcome />
		</Container>
	);
};

export default CreatePage;
