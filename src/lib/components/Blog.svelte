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

<div class="mx-3 lg:mx-8">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 space-y-4 lg:max-w-none lg:grid-cols-2 lg:space-y-0"
	>
		<a href={featuredPost.slug}>
			<article
				class="h-full rounded-xl border-4 bg-slate-50 p-3 lg:flex lg:transform lg:flex-col lg:p-6 lg:transition lg:hover:scale-101 lg:hover:shadow-xl"
			>
				<div class="relative">
					<div class="flex items-center justify-between text-xs lg:text-sm">
						<time datetime={featuredPost.date} class="text-gray-500">
							{formatDate(featuredPost.date)}
						</time>
						<div class="space-x-2">
							{#each featuredPost.categories as category}
								<span
									class="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
								>
									{category}
								</span>
							{/each}
						</div>
					</div>
					<h2 class="mt-2 text-lg font-semibold text-gray-900 lg:mt-6 lg:text-3xl xl:text-4xl">
						{featuredPost.title}
					</h2>
					<p
						class="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 lg:mt-6 lg:line-clamp-8 lg:text-base xl:text-base"
					>
						{featuredPost.description}
					</p>
				</div>

				<div class="mt-3 flex flex-col justify-end gap-4 lg:mt-auto">
					<div class="flex items-center justify-between">
						<span class="text-sm font-semibold leading-6 text-indigo-600 lg:text-base">
							Continue reading <span aria-hidden="true">&rarr;</span>
						</span>
						<span class="text-sm text-gray-500 lg:text-base">{featuredPost.readingLength}</span>
					</div>
				</div>
			</article>
		</a>

		<div class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
			<a href={secondPost.slug} class="">
				<article
					class="mb-4 rounded-xl border-4 bg-slate-50 p-3 lg:p-6 lg:transition lg:hover:scale-101 lg:hover:shadow-xl"
				>
					<div class="relative">
						<div class="flex items-center justify-between text-xs">
							<time datetime={secondPost.date} class="block text-sm leading-6 text-gray-600"
								>{formatDate(secondPost.date)}</time
							>
							<div class="space-x-2">
								{#each secondPost.categories as category}
									<span
										class="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
									>
										{category}
									</span>
								{/each}
							</div>
						</div>
						<h2 class="mt-2 text-lg font-semibold text-gray-900">
							{secondPost.title}
						</h2>
						<p class="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
							{secondPost.description}
						</p>
					</div>
					<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
						<div class="flex items-center justify-between">
							<span class="text-sm font-semibold leading-6 text-indigo-600"
								>Continue reading <span aria-hidden="true">&rarr;</span></span
							>
							<span class="text-sm text-gray-500">{secondPost.readingLength}</span>
						</div>
					</div>
				</article>
			</a>

			<a href={thirdPost.slug} class="">
				<article
					class="rounded-xl border-4 bg-slate-50 p-3 lg:p-6 lg:transition lg:hover:scale-101 lg:hover:shadow-xl"
				>
					<div class="relative">
						<div class="flex items-center justify-between text-xs">
							<time datetime={thirdPost.date} class="block text-sm leading-6 text-gray-600"
								>{formatDate(thirdPost.date)}</time
							>
							<div class="space-x-2">
								{#each thirdPost.categories as category}
									<span
										class="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
									>
										{category}
									</span>
								{/each}
							</div>
						</div>
						<h2 class="mt-2 text-lg font-semibold text-gray-900">
							{thirdPost.title}
						</h2>
						<p class="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
							{thirdPost.description}
						</p>
					</div>
					<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
						<div class="flex items-center justify-between">
							<span class="text-sm font-semibold leading-6 text-indigo-600"
								>Continue reading <span aria-hidden="true">&rarr;</span></span
							>
							<span class="text-sm text-gray-500">{thirdPost.readingLength}</span>
						</div>
					</div>
				</article>
			</a>
		</div>
	</div>
</div>
