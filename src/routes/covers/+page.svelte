<script lang="ts">
	import CoverCard from '$lib/coverCard.svelte';

	import { second } from '$lib/logo.svelte.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	second.value = 'drums';
</script>

<svelte:head>
	<title>Covers | Tristan Lukens</title>
	<meta name="description" content="A set of songs I covered. Watch one if you want." />
</svelte:head>

<ul class="flex flex-wrap justify-center gap-4">
	{#each data.covers as cover}
		<li><CoverCard data={cover} /></li>
	{/each}
</ul>
