import { EmptySneakers } from '@/components/screens/EmptySneakers';
import { SneakersList } from '@/components/screens/SneakersList';
import { NotFoundSneakers } from '@/components/screens/NotFoundSneakers';
import * as CrudCrudApi from '@/api/crudCrud';

const MainPage = async () => {
	const sneakers = await CrudCrudApi.getAllSneakers();

	return (
		<>
			{/* <EmptySneakers /> */}
			<SneakersList sneakers={sneakers} />
			{/* <NotFoundSneakers /> */}
		</>
	);
};

export default MainPage;
