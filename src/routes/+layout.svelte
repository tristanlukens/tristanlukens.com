<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import Hr from '$lib/hr.svelte';
	import '../app.css';

	let { children } = $props();

	// ['Main text', 'Optional hover text']
	const footerQuotes = [
		['Fly, you fools', '- Gandalf the Grey (Lord of the Rings)'],
		[':wq', 'How do I exit vim again?'],
		['Why are you the way that you are?', '- Michael Scott (The Office)'],
		['Identity theft is not a joke Jim!', '- Dwight Schrute, Ast. to the Reg. Mgr. (The Office)'],
		['The mitochondria is the powerhouse of the cell'],
		['Moi he', "Krieg die 'n dreuge worst mien jong"],
		['All them years, Dutch', '- Arthur Morgan (Read Dead Redemption 2)'],
		['Ding ding ding IRELAAAAND', '- jacksepticeye'],
		['You should really try ScreenZen'],
		["I refuse to answer that on the grounds that I don't want to", '- Harvey Specter (Suits)'],
		['Terry loves yoghurt', '- Sgt. Terry Jeffords, NYPD (Brooklyn Nine Nine)'],
		["It's little Alex Horne!", '- Greg Davies, the Taskmaster himself'],
		['The work is mysterious and important', '- Lumon Industries (Severence)'],
		['NO FUCKING FIGHTING', '- Tommy Shelby (Peaky Blinders)'],
		['Will you halt this eclipse in me?', '- Vessel (Sleep Token)'],
		['And yet the water is still above my head', '- Ofc. Jackson West (The Rookie)'],
		[
			"But I refuse to buy into this tired narrative, where anyone who doesn't run with you's a fool",
			'- Dustin Kensrue (Thrice)'
		],
		['Fire that god damn kid', '- Jessica Pearson (Suits)'],
		["Don't play the odds, play the man", '- Harvey Specter (Suits)'],
		['...Like Clockwork is one of the most beautiful songs ever']
	];

	const randomQuote: () => [string] | [string, string] = () =>
		footerQuotes[Math.round(Math.random() * (footerQuotes.length - 1))];
	let quote = $state(randomQuote());
</script>

<div
	class="font-custom min-h-screen bg-neutral-50 py-8 tracking-tight text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
>
	<div class="mx-auto max-w-prose space-y-8 px-6">
		<Header />

		<Hr />

		<main>{@render children()}</main>

		<Hr />

		<Footer {quote} {randomQuote} />
	</div>
</div>
