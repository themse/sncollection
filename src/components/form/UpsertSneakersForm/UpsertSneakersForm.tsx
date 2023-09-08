'use client';

import { Form, FormProps } from 'react-final-form';
import * as Yup from 'yup';

import { FormInput } from '@/components/form/FormInput';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/ui/Icon';
import { SneakerEntity } from '@/services/entities/Sneaker';
import { validateForm } from '@/helpers/validateForm';

const formInputList = [
	{
		name: 'name',
		label: 'Name',
	},
	{
		name: 'brand',
		label: 'Brand',
	},
	{
		name: 'price',
		label: 'Price',
	},
	{
		name: 'size',
		label: 'Size',
	},
	{
		name: 'year',
		label: 'Year',
	},
];

type FormValues = SneakerEntity;

export const UpsertSneakersForm = () => {
	const onSubmit = async (formData: FormValues, _formApi: FormProps<FormValues>['form']) => {
		console.log({ formData }); // TODO
	};

	const getValidationRules = async (values: FormValues) => {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			price: Yup.number().required().positive(),
			brand: Yup.string().required(),
			size: Yup.number().required().integer().min(0).max(18), // USA size
			year: Yup.number().required().integer().min(1900).max(new Date().getFullYear()),
		});

		return validateForm(schema, values);
	};

	return (
		<Form<FormValues>
			onSubmit={onSubmit}
			validate={getValidationRules}
			render={({ handleSubmit, submitting, pristine }) => (
				<form onSubmit={handleSubmit}>
					<div className="space-y-10">
						<div className="space-y-5">
							{formInputList.map((formInput) => (
								<FormInput
									key={formInput.name}
									input={{
										name: formInput.name,
										fullWidth: true,
										required: true,
									}}
									label={{
										value: formInput.label,
									}}
								/>
							))}
						</div>
						<div className="space-y-3">
							<Button
								type="submit"
								variant="primary"
								className="h-fit"
								fullWidth
								disabled={submitting || pristine}
							>
								Save
							</Button>
							<Button
								type="button"
								variant="danger"
								className="h-fit"
								fullWidth
								disabled={submitting}
							>
								<Icon name="trash-2" className="mr-2" />
								Delete
							</Button>
						</div>
						<Button
							type="submit"
							variant="primary"
							className="h-fit"
							fullWidth
							disabled={submitting}
						>
							<Icon name="plus" className="mr-2" />
							Add new sneakers
						</Button>
					</div>
				</form>
			)}
		/>
	);
};
