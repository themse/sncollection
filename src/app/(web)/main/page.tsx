import { PageProps } from '@/types/app';
import { SneakersList } from '@/components/screens/SneakersList';
import { EmptySneakers } from '@/components/screens/EmptySneakers';
import * as ProductAPI from '@/api/crudCrud';

const MainPage = async ({}: PageProps) => {
	const sneakers = await ProductAPI.findAll();

	return sneakers.length > 0 ? <SneakersList sneakers={sneakers} /> : <EmptySneakers />;
};

export default MainPage;
