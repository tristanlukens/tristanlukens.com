import type { PageServerLoad } from './$types';
import * as db from '$lib/server/database';

export const load: PageServerLoad = async () => {
	return {
		articles: await db.getArticlesMetadata()
	};
};
