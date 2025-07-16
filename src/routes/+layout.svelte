<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="font-arvo py-4 tracking-tight sm:py-8">
	{@render children()}
</div>
