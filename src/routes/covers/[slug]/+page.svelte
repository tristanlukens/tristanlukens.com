<script lang="ts">
	import { marked } from 'marked';
	import { second } from '$lib/logo.svelte.ts';
	import type { PageProps } from './$types';
	import { formatHygraphDate } from '$lib/helpers';
	import Hr from '$lib/hr.svelte';

	second.value = 'drums';

	let { data }: PageProps = $props();

	const formattedDate = formatHygraphDate(data.cover.date);
	const subtext = `${data.cover.extraIdentifier ? `${data.cover.extraIdentifier} d` : 'D'}rum cover published on ${formattedDate}`;
</script>

<svelte:head>
	<title>{data.cover.artist} - {data.cover.song} | Drum cover by Tristan Lukens</title>
	<meta name="description" content={subtext} />
</svelte:head>

<main class="prose-custom">
	<h1>{data.cover.artist} - {data.cover.song}</h1>

	<p class="-mt-2 text-center font-normal italic">
		{subtext}
	</p>

	<Hr />

	<iframe
		class="mt-8 aspect-video w-full"
		src="https://www.youtube.com/embed/{data.cover.videoID}"
		title={subtext}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>

	{@html marked.parse(data.cover.content)}
</main>
