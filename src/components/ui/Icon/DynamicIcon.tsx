import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Loader } from '@/ui/Loader';

interface DynamicIconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name], {
		loading: () => <Loader />,
	});

	return <LucideIcon {...props} />;
};

DynamicIcon.display = 'DynamicIcon';
