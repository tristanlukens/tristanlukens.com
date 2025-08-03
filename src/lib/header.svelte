<script>
	import Logo from './logo.svelte';
	import NavItem from './navItem.svelte';
</script>

<header class="text-center select-none">
	<!-- <span class="mb-4 block">🫨</span> -->

	<Logo />

	<!-- Navigation -->
	<nav class="mt-4">
		<ul class="xs:grid-cols-4 grid grid-cols-3 gap-y-2">
			{#each ['home', 'covers', 'articles'] as page}
				<li class="col-span-1"><NavItem {page} /></li>
			{/each}

			<li class="xs:col-auto col-span-3">
				<div class="dropdown dropdown-center xs:dropdown-end font-mono">
					<div
						tabindex="0"
						role="button"
						class="btn nav-item rounded-box bg-neutral-100 shadow-none dark:bg-neutral-800"
					>
						profiles
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="dropdown-content menu rounded-box z-1 mt-1 w-52 bg-neutral-100 p-2 text-neutral-800 outline-1 outline-neutral-200 dark:bg-neutral-800 dark:text-neutral-200"
					>
						<li><a target="_blank" href="https://instagram.com/tris_lukens">→ Instagram</a></li>
						<li><a target="_blank" href="https://threads.com/tris_lukens">→ Threads</a></li>
						<li>
							<a target="_blank" href="https://news.ycombinator.com/user?id=tristanlukens"
								>→ Hacker News</a
							>
						</li>
						<li><a target="_blank" href="https://github.com/tristanlukens">→ GitHub</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</nav>
</header>
