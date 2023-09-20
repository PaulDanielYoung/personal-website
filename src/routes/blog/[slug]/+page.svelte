<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<div class="mx-auto max-w-md">
		<h1 class="mb-2 text-center text-2xl font-bold">{data.meta.title}</h1>
		<p class="mb-2 text-center text-gray-500">Posted on: {formatDate(data.meta.date)}</p>
	</div>

	<div class="flex justify-center gap-2">
		{#each data.meta.categories as category}
			<span class="">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="mt-10 px-4">
		<svelte:component this={data.content} />
	</div>
</article>
