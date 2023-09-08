import { ObjectSchema, AnyObject, Maybe } from 'yup';

export const validateForm = async <T extends Maybe<AnyObject>>(
	schema: ObjectSchema<T>,
	values: T,
) => {
	try {
		await schema.validate(values, { abortEarly: false });

		return {};
	} catch (error) {
		// @ts-ignore TODO
		return error.inner.reduce((acc, err) => {
			// eslint-disable-next-line no-param-reassign
			acc[err.path] = err.message;

			return acc;
		}, {});
	}
};
