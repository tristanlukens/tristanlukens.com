<script lang="ts">
	import { formatHygraphDate } from './helpers';
	import type { coverMetadata } from './server/database';

	let { data }: { data: coverMetadata } = $props();

	const formattedDate = formatHygraphDate(data.date);
</script>

<a href={`/covers/${data.slug}`}>
	<div
		class="group relative aspect-square w-3xs overflow-hidden rounded bg-black hover:outline-neutral-300 sm:w-2xs dark:outline dark:outline-neutral-700 dark:hover:shadow-neutral-800 dark:hover:outline-neutral-600"
	>
		<img
			src={data.thumbnailURL}
			alt="Thumbnail"
			class="absolute inset-0 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:blur-md dark:opacity-60"
		/>

		<div class="absolute inset-4 flex flex-col justify-between">
			<p class="font-bold tracking-wide text-neutral-100">{`${data.artist} - ${data.song}`}</p>
			<p class="coverCardEffect text-neutral-100">
				<span>{data.extraIdentifier ? `${data.extraIdentifier} d` : 'D'}rum cover</span>
				published on {formattedDate}
			</p>
		</div>
	</div>
</a>
