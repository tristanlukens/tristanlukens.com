<script lang="ts">
	import Markdown from '../lib/components/markdown.svelte';

	const md = `
**Hulloo! Welcome to my site. Here you can read a bit about me, the projects I've worked on and some articles I wrote about things that interest me. You can also watch me beat my drumset like it owes me fifty dollars.**

This site was made using [TailwindCSS](https://tailwindcss.com) and its Typography plugin. It looks absolutely stunning, so I decided against changing too much of it, especially since most of this site is text-based. You should be aware of the fact that **most of this was not designed by me**. Thank you, Tailwind.

---

## about<span class="text-amber-400">me</span>

I'm Tristan, seventeen and live in the Netherlands. I like all kinds of foods, my favourite animal is the 🐘 and I'm a huge perfectionist. I like computers, biking, science, music, reading, F1, rally, and sitcoms (my favourite being Brooklyn 99, but The Office is amazing too). The Hobbit is and probably will for the next while be my favourite book, but I'm reading The Lord of the Rings at the moment. Tolkien is simply incredible.

I play the drums, and I occasionally like to experiment with the bass guitar. Aside from that, I'm a huge music lover — I've got a [huge (yet evergrowing) playlist of music I love](https://open.spotify.com/playlist/7MKHIXzTUI1g0hT0nAs671?si=fb9331480d89486f) on Spotify. I'll probably write a blog post on that soon as well. My music taste is... diverse, but well-defined. That is, I like a lot of things, but I know what I like and what I don't.

I like GitHub. [Here's my profile](https://github.com/tristanlukens). I'm not really working on anything in particular at the moment, but I've got some ideas.

On another, unrelated note — [speculoos](https://duckduckgo.com/?q=speculoos+broodbeleg&t=brave&iax=images&ia=images&iai=https%3A%2F%2Fstatic-images.jumbo.com%2Fproduct_images%2F250120212354_80533POT-5_360x360_2.png) is een deel van mijn persoonlijkheid.

That's about it. If it's not enough — first of all, thank you — you could read some articles I wrote at [my blog](/blog), or watch some drum covers over at the [covers tab](/covers).
`;
</script>

<svelte:head>
	<title>Home | Tristan Lukens</title>
	<meta name="description" content="My personal corner on the internet. Welcome!" />
</svelte:head>

<Markdown {md} />
