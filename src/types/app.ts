export interface PageProps<TParams extends Record<string, string> = {}> {
	params: TParams;
	searchParams: { [key: string]: string | string[] | undefined };
}
