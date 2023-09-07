import { TextInput } from '@/components/ui/form';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/ui/Icon';

export const UpsertSneakersForm = () => {
	return (
		<div className="space-y-10">
			<div className="space-y-5">
				<TextInput
					formControl={{ errorMessage: '' }}
					input={{
						name: 'name',
						fullWidth: true,
					}}
					label={{
						value: 'Name',
					}}
				/>
				<TextInput
					formControl={{ errorMessage: '' }}
					input={{
						name: 'brand',
						fullWidth: true,
					}}
					label={{
						value: 'Brand',
					}}
				/>
				<TextInput
					formControl={{ errorMessage: '' }}
					input={{
						name: 'price',
						fullWidth: true,
					}}
					label={{
						value: 'Price',
					}}
				/>
				<TextInput
					formControl={{ errorMessage: '' }}
					input={{
						name: 'size',
						fullWidth: true,
					}}
					label={{
						value: 'Size US',
					}}
				/>
				<TextInput
					formControl={{ errorMessage: '' }}
					input={{
						name: 'year',
						fullWidth: true,
					}}
					label={{
						value: 'Year',
					}}
				/>
			</div>
			<div className="space-y-3">
				<Button variant="primary" className="h-fit" fullWidth disabled>
					Save
				</Button>
				<Button variant="danger" className="h-fit" fullWidth>
					<Icon name="trash-2" className="mr-2" />
					Delete
				</Button>
			</div>
			<Button variant="primary" className="h-fit" fullWidth>
				<Icon name="plus" className="mr-2" />
				Add new sneakers
			</Button>
		</div>
	);
};
