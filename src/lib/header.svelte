<script>
	import Logo from '$lib/logo.svelte';
	import NavItem from '$lib/navItem.svelte';
</script>

<header class="text-center select-none">
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
						class="btn nav-item text-theme-text-accent dark:text-theme-text-accent-dark rounded-box bg-theme-bg-card dark:bg-theme-bg-card-dark shadow-none dark:border-neutral-700 dark:hover:border-neutral-700"
					>
						profiles
					</div>
					<ul
						class="dropdown-content menu rounded-box bg-theme-bg-card dark:bg-theme-bg-card-dark mt-1 w-52 p-2 outline-1 outline-neutral-200 dark:outline-neutral-700"
					>
						<li>
							<a tabindex="0" target="_blank" href="https://instagram.com/tris_lukens"
								>→ Instagram</a
							>
						</li>
						<li>
							<a tabindex="0" target="_blank" href="https://threads.com/tris_lukens">→ Threads</a>
						</li>
						<li>
							<a
								tabindex="0"
								target="_blank"
								href="https://news.ycombinator.com/user?id=tristanlukens">→ Hacker News</a
							>
						</li>
						<li>
							<a tabindex="0" target="_blank" href="https://github.com/tristanlukens">→ GitHub</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</nav>
</header>
