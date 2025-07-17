<script>
	import Logo from './logo.svelte';
	import NavItem from './navitem.svelte';
</script>

<header class="text-center select-none">
	<!-- <span class="mb-4 block">🫨</span> -->

	<Logo />

	<!-- Navigation. I'm only using it once, so it doesn't make sense to put it in a component -->
	<nav class="mt-4">
		<ul class="flex justify-evenly">
			{#each ['covers', 'posts', 'socials'] as item}
				<NavItem page={item} />
			{/each}
		</ul>
	</nav>
</header>

<!-- <header class="space-y-7 text-center select-none">
	<Logo />

	<nav>
		<ul class="flex items-center justify-evenly">
			<li>
				<a
					class="text-sm font-bold text-amber-500 uppercase transition hover:text-amber-400"
					href="/">home</a
				>
			</li>
			<li>
				<a
					class="text-sm font-bold text-amber-500 uppercase transition hover:text-amber-400"
					href="/blog">blog</a
				>
			</li>
			<li>
				<a
					class="text-sm font-bold text-amber-500 uppercase transition hover:text-amber-400"
					href="/covers">covers</a
				>
			</li>
		</ul>
	</nav>
</header> -->
