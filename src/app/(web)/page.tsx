import { redirect } from 'next/navigation';

import { PageProps } from '@/types/app';

const HomePage = ({}: PageProps) => {
	redirect('/create');
};

export default HomePage;
