<script lang="ts">
	import { formatHygraphDate } from '$lib/helpers';
	import type { articleMetadata } from '$lib/server/database';

	let { data }: { data: articleMetadata } = $props();

	const formattedDate = formatHygraphDate(data.date);
</script>

<a href={`/articles/${data.slug}`}>
	<div
		class="bg-theme-bg-card hover:bg-theme-bg-card-state active:bg-theme-bg-card-state dark:bg-theme-bg-card-dark dark:hover:bg-theme-bg-card-state-dark dark:active:bg-theme-bg-card-state-dark space-y-3 rounded p-4 outline-1 outline-neutral-200 transition-colors hover:outline-neutral-300 active:outline-neutral-300 dark:outline-neutral-700 dark:hover:outline-neutral-600 dark:active:outline-neutral-600"
	>
		<p>{data.title}</p>
		<p class="text-sm">
			Published to <span class="font-mono tracking-wide uppercase">{data.category}</span> on
			<span>{formattedDate}</span>
		</p>
		<p class="text-theme-text-accent dark:text-theme-text-accent-dark text-sm">{data.abstract}</p>
	</div>
</a>
