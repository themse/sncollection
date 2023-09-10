import { SneakersList } from '@/components/screens/SneakersList';
import { productService } from '@/api/ProductService';

const MainPage = async () => {
	const sneakers = await productService.find();

	return <SneakersList sneakers={sneakers} />;
};

export default MainPage;
