import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Loader } from '@/ui/Loader';

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name], {
		loading: () => <Loader />,
	});

	return <LucideIcon {...props} />;
};

Icon.display = 'Icon';
