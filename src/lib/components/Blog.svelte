<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let posts;

	const featuredPost = posts[0];
	const secondPost = posts[1];
	const thirdPost = posts[2];

	function getBgColor(index: number): string {
		switch (index % 3) {
			case 0:
				return 'bg-red-50 text-red-700 ring-red-600/10';
			case 1:
				return 'bg-blue-50 text-blue-700 ring-blue-600/10';
			case 2:
				return 'bg-green-50 text-green-700 ring-green-600/10';
			default:
				return 'bg-red-50 text-red-700 ring-red-600/10';
		}
	}
</script>

<div class="my-12 px-6 lg:px-8">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 space-y-4 lg:max-w-none lg:grid-cols-2 lg:space-y-0"
	>
		<article class="rounded-xl border-2 bg-slate-50 p-3 lg:flex lg:flex-col lg:p-6">
			<div class="group relative max-w-3xl">
				<time datetime={featuredPost.date} class="block text-sm leading-6 text-gray-600"
					>{formatDate(featuredPost.date)}</time
				>
				<h2
					class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600 lg:mt-4 lg:text-2xl xl:text-4xl"
				>
					<a href="#">
						<span class="absolute inset-0"></span>
						{featuredPost.title}
					</a>
				</h2>
				<p class="mt-2 text-sm leading-6 text-gray-600 lg:mt-4 lg:text-base xl:text-lg">
					{featuredPost.description}
				</p>
			</div>
			<div class="mt-3 flex flex-col justify-end gap-4 lg:mt-auto">
				<div class="flex items-center justify-between">
					<a
						href={featuredPost.slug}
						class="text-sm font-semibold leading-6 text-indigo-600"
						aria-describedby="featured-post"
						>Continue reading <span aria-hidden="true">&rarr;</span></a
					>
					<span class="px-6 text-sm text-gray-500">{featuredPost.readingLength}</span>
				</div>
				<div class="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
					{#each featuredPost.categories as category, index}
						<span
							class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset {getBgColor(
								index
							)}">{category}</span
						>
					{/each}
				</div>
			</div>
		</article>

		<div class="mx-auto w-full max-w-2xl space-y-4 lg:mx-0 lg:max-w-none">
			<article class="rounded-xl border-2 bg-slate-50 p-3 lg:p-6">
				<div class="group relative max-w-3xl">
					<time datetime={secondPost.date} class="block text-sm leading-6 text-gray-600"
						>{formatDate(secondPost.date)}</time
					>
					<h2 class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
						<a href="#">
							<span class="absolute inset-0"></span>
							{secondPost.title}
						</a>
					</h2>
					<p class="mt-2 text-sm leading-6 text-gray-600">
						{secondPost.description}
					</p>
				</div>
				<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
					<div class="flex items-center justify-between">
						<a
							href={secondPost.slug}
							class="text-sm font-semibold leading-6 text-indigo-600"
							aria-describedby="featured-post"
							>Continue reading <span aria-hidden="true">&rarr;</span></a
						>
						<span class="px-6 text-sm text-gray-500">{secondPost.readingLength}</span>
					</div>
					<div class="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
						{#each secondPost.categories as category, index}
							<span
								class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset {getBgColor(
									index
								)}">{category}</span
							>
						{/each}
					</div>
				</div>
			</article>

			<article class="rounded-xl border-2 bg-slate-50 p-3 lg:p-6">
				<div class="group relative max-w-3xl">
					<time datetime={thirdPost.date} class="block text-sm leading-6 text-gray-600"
						>{formatDate(thirdPost.date)}</time
					>
					<h2 class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
						<a href="#">
							<span class="absolute inset-0"></span>
							{thirdPost.title}
						</a>
					</h2>
					<p class="mt-2 text-sm leading-6 text-gray-600">
						{thirdPost.description}
					</p>
				</div>
				<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
					<div class="flex items-center justify-between">
						<a
							href={thirdPost.slug}
							class="text-sm font-semibold leading-6 text-indigo-600"
							aria-describedby="featured-post"
							>Continue reading <span aria-hidden="true">&rarr;</span></a
						>
						<span class="px-6 text-sm text-gray-500">{thirdPost.readingLength}</span>
					</div>
					<div class="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
						{#each thirdPost.categories as category, index}
							<span
								class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset {getBgColor(
									index
								)}">{category}</span
							>
						{/each}
					</div>
				</div>
			</article>
		</div>
	</div>
</div>
