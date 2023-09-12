export const request = async <TResponse>(
	input: RequestInfo | URL,
	init?: RequestInit,
): Promise<TResponse> => {
	const response = await fetch(input, init);

	return (await response.json()) as TResponse;
};
