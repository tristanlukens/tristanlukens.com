<script lang="ts">
	import { marked } from 'marked';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div>{@html marked.parse(data.raw)}</div>
