<script lang="ts">
	import ArticleCard from '$lib/articleCard.svelte';

	import { second } from '$lib/logo.svelte.ts';
	import type { PageProps } from './$types';

	second.value = 'writes';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Articles | Tristan Lukens</title>
	<meta
		name="description"
		content="I wrote a few thousand words on my all kind of things that interest me. Read an article if you can find the time."
	/>
</svelte:head>

<ul class="space-y-2">
	{#each data.articles as article}
		<li><ArticleCard data={article} /></li>
	{/each}
</ul>
