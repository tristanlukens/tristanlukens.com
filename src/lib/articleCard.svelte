<script lang="ts">
	import type { articleMetadata } from './server/database';

	let { data }: { data: articleMetadata } = $props();
</script>

<a href={`/articles/${data.slug}`}>
	<div
		class="space-y-3 rounded bg-neutral-100 p-4 outline-1 outline-neutral-200 transition-colors hover:bg-neutral-200 hover:outline-neutral-300 dark:bg-neutral-800 dark:outline-neutral-700 dark:hover:bg-neutral-700 dark:hover:outline-neutral-600"
	>
		<p>{data.title}</p>
		<p class="text-sm">
			in <span class=" font-mono tracking-wide uppercase">{data.category}</span> from
			<span class="font-mono tracking-wide uppercase">{data.date}</span>
		</p>
		<p class="text-sm text-neutral-500 dark:text-neutral-400">{data.abstract}</p>
	</div>
</a>
