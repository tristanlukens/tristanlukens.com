<script lang="ts">
	let { page, href = page } = $props();
</script>

<a class="nav-item" href="/{href}">{page}</a>
