<script lang="ts">
	import { formatHygraphDate } from './helpers';
	import type { articleMetadata } from './server/database';

	let { data }: { data: articleMetadata } = $props();

	const formattedDate = formatHygraphDate(data.date);
</script>

<a href={`/articles/${data.slug}`}>
	<div
		class="hove:bg-neutral-200 space-y-3 rounded bg-neutral-100 p-4 outline-1 outline-neutral-200 transition-colors hover:bg-neutral-200 hover:outline-neutral-300 active:bg-neutral-200 active:outline-neutral-300 dark:bg-neutral-800 dark:outline-neutral-700 dark:hover:bg-neutral-700 dark:hover:outline-neutral-600 dark:active:bg-neutral-700 dark:active:outline-neutral-600"
	>
		<p>{data.title}</p>
		<p class="text-sm">
			Published to <span class="font-mono tracking-wide uppercase">{data.category}</span> on
			<span>{formattedDate}</span>
		</p>
		<p class="text-sm text-neutral-500 dark:text-neutral-400">{data.abstract}</p>
	</div>
</a>
