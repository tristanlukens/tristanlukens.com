import { read } from '$app/server';

// I'm importing a txt file with markdown syntax, because apparently Svelte doesn't
// support importing a .md file. Wish I could've found that out sooner, because it
// took a lot of trial and error.
import md from './home.txt';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const asset = read(md);
	const raw = await asset.text();
	return { raw };
};
