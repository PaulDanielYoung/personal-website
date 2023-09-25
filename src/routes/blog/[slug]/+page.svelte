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

<div class="mt-3 flex justify-center px-6 lg:mt-6 lg:px-8">
	<div class="relative flex w-full max-w-6xl justify-center lg:justify-normal">
		<Breadcrumb title={data.meta.title} />
	</div>
</div>

<!-- Main Container -->
<div class="m-6 flex items-start justify-center lg:m-8">
	<!-- Content Container -->
	<div
		class="border-wrapper relative flex w-full max-w-5xl flex-col items-center overflow-hidden rounded-2xl shadow-xl"
	>
		<!-- Content Card -->
		<div class="relative rounded-xl bg-white p-4 lg:p-6">
			<div class="flex justify-center">
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
					<div class="prose mt-6">
						<svelte:component this={data.content} />
					</div>
				</article>
			</div>
		</div>
	</div>
</div>

<style>
	.border-wrapper {
		background: linear-gradient(to right, #f9a8d4, #d8b4fe, #93c5fd);
		padding: 5px;
	}
</style>
