<script lang="ts">
	import { marked } from 'marked';
	import { second } from '$lib/logo.svelte.ts';
	import type { PageProps } from './$types';
	import { formatHygraphDate } from '$lib/helpers';

	second.value = 'writes';

	let { data }: PageProps = $props();

	const formattedDate = formatHygraphDate(data.article.date);
</script>

<svelte:head>
	<title>{data.article.title} | Tristan Lukens</title>
	<meta
		name="description"
		content={`${data.article.abstract} | Article written by Tristan Lukens on ${data.article.date}`}
	/>
</svelte:head>

<main class="prose-custom">
	<h1>{data.article.title}</h1>
	<p class="text-center">
		in <span class="category">{data.article.category}</span> | {formattedDate}
	</p>
	<section>{@html marked.parse(data.article.content)}</section>
</main>
