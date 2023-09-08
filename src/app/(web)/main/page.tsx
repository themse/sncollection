import { SneakersList } from '@/components/screens/SneakersList';
import * as CrudCrudApi from '@/api/crudCrud';

const MainPage = async () => {
	const sneakers = await CrudCrudApi.getAllSneakers();

	return <SneakersList sneakers={sneakers} />;
};

export default MainPage;
