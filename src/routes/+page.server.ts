import { read } from '$app/server';

import md from '$lib/data/home.md';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const asset = read(md);
	const raw = await asset.text();
	return { raw };
};
