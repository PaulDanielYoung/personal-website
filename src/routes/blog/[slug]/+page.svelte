<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="relative mx-4 my-4 flex justify-center lg:mx-8 lg:my-8 lg:justify-normal">
	<Breadcrumb title={formatDate(data.meta.date)} />
</div>

<div class="border-wrapper mx-4 mb-4 max-w-5xl rounded-2xl shadow-xl lg:mx-8 lg:mb-8">
	<!-- Content Card -->
	<div class="rounded-xl bg-white px-8 py-6">
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
			<div class="prose mt-6 min-w-0">
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>

<style>
	.border-wrapper {
		background: linear-gradient(to right, #f9a8d4, #d8b4fe, #93c5fd);
		padding: 5px;
	}
</style>
