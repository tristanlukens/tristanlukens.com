<script lang="ts">
	import { marked } from 'marked';
	import { second } from '$lib/logo.svelte.ts';

	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	second.value = 'lukens';
</script>

<svelte:head>
	<title>Home | Tristan Lukens</title>
	<meta name="description" content="Personal website for articles and drum covers." />
</svelte:head>

<div class="prose-custom">{@html marked.parse(data.raw)}</div>
