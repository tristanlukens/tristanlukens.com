// place files you want to import through the `$lib` alias in this folder.
import { read } from '$app/server';

export const readMarkdown = async (path: string) => {
	const asset = read(path);
	return await asset.text();
};
