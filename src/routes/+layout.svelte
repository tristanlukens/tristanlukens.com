<script lang="ts">
	import Header from '$lib/header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="font-arvo min-h-screen bg-neutral-50 py-4 tracking-tight text-neutral-800 sm:py-8 dark:bg-neutral-900 dark:text-neutral-200"
>
	<div class="mx-auto max-w-prose">
		<Header />
		<section
			class="prose prose-headings:text-center prose-rose prose-p:leading-loose prose-a:no-underline prose-a:italic dark:prose-invert mt-8 text-justify"
		>
			<hr />
			{@render children()}
			<hr />
			<footer class="prose-sm text-center">Bottom. Fly, you fools.</footer>
		</section>
	</div>
</div>
