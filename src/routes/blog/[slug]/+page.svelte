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

<div class="relative mx-3 my-4 flex justify-center lg:mx-8 lg:my-8 lg:justify-normal">
	<Breadcrumb title={formatDate(data.meta.date)} />
</div>

<div class="border-wrapper mx-2 mb-16 max-w-4xl rounded-2xl shadow-xl lg:mx-8 lg:mb-24">
	<!-- Content Card -->
	<div class="rounded-xl bg-white p-4">
		<article>
			<!-- Title -->
			<div class="mx-auto my-4 max-w-lg lg:my-8">
				<h1 class=" text-center text-3xl font-bold lg:text-4xl">{data.meta.title}</h1>
				<p class="mt-2 text-center text-sm text-gray-500 lg:text-base">
					Posted on: {formatDate(data.meta.date)}
				</p>
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
