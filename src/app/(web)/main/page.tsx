import { EmptySneakers } from '@/components/screens/EmptySneakers';
import { SneakersList } from '@/components/screens/SneakersList';
import { NotFoundSneakers } from '@/components/screens/NotFoundSneakers';

const MainPage = () => {
	return (
		<>
			{/* <EmptySneakers /> */}
			{/* <SneakersList /> */}
			<NotFoundSneakers />
		</>
	);
};

export default MainPage;
