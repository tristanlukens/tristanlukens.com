<script lang="ts">
	import { marked } from 'marked';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Home | Tristan Lukens</title>
	<meta name="description" content="Personal website for articles and drum covers." />
</svelte:head>

<div>{@html marked.parse(data.raw)}</div>
