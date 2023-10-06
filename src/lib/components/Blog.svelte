<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let posts;

	const featuredPost = posts[0];
	const secondPost = posts[1];
	const thirdPost = posts[2];
</script>

<div class="mx-2 lg:mx-8">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 space-y-4 lg:max-w-none lg:grid-cols-2 lg:space-y-0"
	>
		<a href={featuredPost.slug}>
			<article
				class="h-full rounded-xl border-4 bg-slate-50 p-3 lg:flex lg:transform lg:flex-col lg:p-6 lg:transition lg:hover:scale-101 lg:hover:shadow-xl"
			>
				<div class="relative mt-1 lg:mt-0">
					<div class="flex items-center justify-between text-xs">
						<time
							datetime={featuredPost.date}
							class="block text-xs leading-6 text-gray-600 lg:text-sm"
							>{formatDate(featuredPost.date)}</time
						>
						<div class="space-x-2">
							{#each featuredPost.categories as category}
								<span
									class="relative z-10 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 lg:py-1.5"
								>
									{category}
								</span>
							{/each}
						</div>
					</div>
					<h2 class="mt-2 line-clamp-2 text-base font-semibold text-gray-900 lg:mt-6 lg:text-3xl">
						{featuredPost.title}
					</h2>
					<p
						class="mt-2 line-clamp-3 text-xs leading-6 text-gray-600 lg:mt-6 lg:line-clamp-8 lg:text-base"
					>
						{featuredPost.description}
					</p>
				</div>

				<div class="mt-3 flex flex-col justify-end gap-4 lg:mt-auto">
					<div class="flex items-center justify-between">
						<span class="text-xs font-semibold leading-6 text-indigo-600 lg:text-base">
							Continue reading <span aria-hidden="true">&rarr;</span>
						</span>
						<span class="text-xs text-gray-500 lg:text-base">{featuredPost.readingLength}</span>
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
							<time
								datetime={secondPost.date}
								class="block text-xs leading-6 text-gray-600 lg:text-sm"
								>{formatDate(secondPost.date)}</time
							>
							<div class="space-x-2">
								{#each secondPost.categories as category}
									<span
										class="relative z-10 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 lg:py-1.5"
									>
										{category}
									</span>
								{/each}
							</div>
						</div>
						<h2 class="mt-2 line-clamp-2 text-base font-semibold text-gray-900 lg:text-lg">
							{secondPost.title}
						</h2>
						<p class="mt-2 line-clamp-3 text-xs leading-6 text-gray-600 lg:text-sm">
							{secondPost.description}
						</p>
					</div>
					<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
						<div class="flex items-center justify-between">
							<span class="text-xs font-semibold leading-6 text-indigo-600 lg:text-sm"
								>Continue reading <span aria-hidden="true">&rarr;</span></span
							>
							<span class="text-xs text-gray-500 lg:text-sm">{secondPost.readingLength}</span>
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
							<time
								datetime={thirdPost.date}
								class="block text-xs leading-6 text-gray-600 lg:text-sm"
								>{formatDate(thirdPost.date)}</time
							>
							<div class="space-x-2">
								{#each thirdPost.categories as category}
									<span
										class="relative z-10 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 lg:py-1.5"
									>
										{category}
									</span>
								{/each}
							</div>
						</div>
						<h2 class="mt-2 line-clamp-2 text-base font-semibold text-gray-900 lg:text-lg">
							{thirdPost.title}
						</h2>
						<p class="mt-2 line-clamp-3 text-xs leading-6 text-gray-600 lg:text-sm">
							{thirdPost.description}
						</p>
					</div>
					<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
						<div class="flex items-center justify-between">
							<span class="text-xs font-semibold leading-6 text-indigo-600 lg:text-sm"
								>Continue reading <span aria-hidden="true">&rarr;</span></span
							>
							<span class="text-xs text-gray-500 lg:text-sm">{thirdPost.readingLength}</span>
						</div>
					</div>
				</article>
			</a>
		</div>
	</div>
</div>
