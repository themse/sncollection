import { EmptySneakers } from '@/components/screens/EmptySneakers';
import { SneakersList } from '@/components/screens/SneakersList';
import * as CrudCrudApi from '@/api/crudCrud';

const MainPage = async () => {
	const sneakers = await CrudCrudApi.getAllSneakers();

	return sneakers?.length > 0 ? <SneakersList sneakers={sneakers} /> : <EmptySneakers />;
};

export default MainPage;
