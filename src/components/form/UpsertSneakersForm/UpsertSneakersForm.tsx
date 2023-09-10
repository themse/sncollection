'use client';

import { Form, FormProps } from 'react-final-form';
import * as Yup from 'yup';

import { FormInput } from '@/components/form/FormInput';
import { Button } from '@/components/ui/Button';
import { PlusIcon, TrashIcon } from '@/ui/Icon';
import { ProductEntity } from '@/api/crudCrud/ProductEntity';
import { validateForm } from '@/helpers/validateForm';
import { productService } from '@/api/ProductService';
import { sneakersFormInputList } from '@/utils/consts';
import { useDrawer } from '@/context/DrawerContext';
import { useCurrentSneakers } from '@/context/CurrentSneakersContext';
import { useAllSneakers } from '@/context/AllSneakersContext';

type FormValues = ProductEntity;

export const UpsertSneakersForm = () => {
	const { onCloseDrawer } = useDrawer();
	const { currentSneakers, resetCurrentSneakers } = useCurrentSneakers();
	const { addSneakersItem, onDeleteSneakersItem, onUpdateSneakersItem } = useAllSneakers();

	const onSubmit = async (formData: FormValues, _formApi: FormProps<FormValues>['form']) => {
		const { _id, ...dto } = formData;

		if (_id) {
			// TODO fix caching
			const _updatedSneakers = await productService.update(_id, dto);
			onUpdateSneakersItem({ ...dto, _id });
		} else {
			// @ts-ignore TODO omit _id implement a separate CreateProductModel
			const createdSneakers = await productService.create(dto);
			addSneakersItem(createdSneakers);
		}

		resetCurrentSneakers();
		onCloseDrawer();
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

	const onDelete = async (id: string) => {
		await productService.delete(id);

		resetCurrentSneakers();
		onDeleteSneakersItem(id);
		onCloseDrawer();
	};

	return (
		<Form<FormValues>
			initialValues={currentSneakers ?? undefined}
			onSubmit={onSubmit}
			validate={getValidationRules}
			render={({ handleSubmit, submitting, pristine }) => (
				<form onSubmit={handleSubmit}>
					<div className="space-y-10">
						<div className="space-y-5">
							{sneakersFormInputList.map((formInput) => (
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
							<FormInput
								input={{
									name: '_id',
									type: 'hidden',
								}}
							/>
						</div>
						{currentSneakers?._id ? (
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
									onClick={() => onDelete(currentSneakers._id!)}
									type="button"
									variant="danger"
									className="h-fit"
									fullWidth
									disabled={submitting}
								>
									<TrashIcon className="mr-2" />
									Delete
								</Button>
							</div>
						) : (
							<Button
								type="submit"
								variant="primary"
								className="h-fit"
								fullWidth
								disabled={submitting}
							>
								<PlusIcon className="mr-2" />
								Add new sneakers
							</Button>
						)}
					</div>
				</form>
			)}
		/>
	);
};
