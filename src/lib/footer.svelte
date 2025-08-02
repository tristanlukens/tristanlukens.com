<script lang="ts">
	type quoteType = [string] | [string, string];
	let { quote, randomQuote }: { quote: quoteType; randomQuote: () => quoteType } = $props();
</script>

<footer class="py-6 text-center text-sm">
	<button
		onclick={() => {
			quote = randomQuote();
		}}
		class="tooltip tooltip-top cursor-pointer"
		data-tip={quote[1]}
	>
		{quote[0]}
	</button>
</footer>
