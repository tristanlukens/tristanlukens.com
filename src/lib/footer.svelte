<script lang="ts">
	type quoteType = [string, string];
	let { quote, randomQuote }: { quote: quoteType; randomQuote: () => quoteType } = $props();
</script>

<footer class="py-6 text-center text-sm">
	<button
		onclick={() => {
			quote = randomQuote();
		}}
		class="tooltip tooltip-bottom sm:tooltipx-right -my-4 -ml-8 py-4 pl-8"
		data-tip={quote[1]}
	>
		{quote[0]}
	</button>
</footer>
