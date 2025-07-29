<script lang="ts">
	import { marked } from 'marked';
	import { second } from '$lib/logo.svelte.ts';
	import type { PageProps } from './$types';

	second.value = 'writes';

	let { data }: PageProps = $props();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const [YYYY, MM, DD] = data.article.date.split('-'); // Hygraph parses dates in YYYY-MM-DD
	const formatted = `${months[parseInt(MM) - 1]} ${DD}, ${YYYY}`;
</script>

<svelte:head>
	<title>{data.article.title} | Tristan Lukens</title>
	<meta
		name="description"
		content={`${data.article.abstract} | Article written by Tristan Lukens on ${data.article.date}`}
	/>
</svelte:head>

<div class="prose-custom">
	<h1>{data.article.title}</h1>
	<p class="text-center">in <span class="category">{data.article.category}</span> | {formatted}</p>
	<section>{@html marked.parse(data.article.content)}</section>
</div>
