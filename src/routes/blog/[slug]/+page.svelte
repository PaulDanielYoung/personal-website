<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex justify-center px-6 pb-2 pt-6 sm:pt-12 lg:px-8">
	<div class="relative flex w-full max-w-6xl justify-center py-3 sm:justify-normal">
		<Breadcrumb title={data.meta.title} />
	</div>
</div>
<!-- Main Container -->
<div class="flex min-h-screen items-start justify-center px-6 py-6 lg:px-8">
	<!-- Content Container -->
	<div class="relative w-full max-w-6xl py-3">
		<!-- Card Container -->
		<div
			class="absolute inset-0 -rotate-6 skew-y-1 transform rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg lg:-rotate-6 lg:skew-y-3"
		></div>
		<div class="relative rounded-3xl border-2 bg-white px-4 py-10 shadow-lg">
			<!-- Blog Header (Consider adding a back button or breadcrumb for navigation) -->

			<!-- Slot - This is where your blog content will be injected -->
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
					<div class="mt-10 px-4">
						<svelte:component this={data.content} />
					</div>
				</article>
			</div>
			<!-- (Optional) Add a section for comments or related articles here -->
		</div>
	</div>
</div>
