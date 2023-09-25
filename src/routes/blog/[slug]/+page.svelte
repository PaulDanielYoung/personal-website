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

<div class="mt-3 flex justify-center px-6 lg:mt-6 lg:px-8">
	<div class="relative flex w-full max-w-6xl justify-center lg:justify-normal">
		<Breadcrumb title={data.meta.title} />
	</div>
</div>
<!-- Main Container -->
<div class="mx-6 my-6 flex items-start justify-center lg:mx-8 lg:my-8">
	<!-- Content Container -->
	<div class="relative max-w-5xl">
		<!-- Card Container -->
		<div
			class="absolute left-[-2%] top-[-.5%] z-10 h-[101%] w-[104%] rounded-3xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 shadow-lg sm:left-[-1.5%] sm:w-[103%] lg:left-[-1%] lg:w-[102%]"
		></div>
		<!-- Card 2: Pink to Red Gradient -->

		<div class="relative z-50 rounded-3xl border-2 bg-white px-4 py-10 shadow-lg">
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
					<div class="prose mt-6 px-4">
						<svelte:component this={data.content} />
					</div>
				</article>
			</div>
			<!-- (Optional) Add a section for comments or related articles here -->
		</div>
	</div>
</div>
