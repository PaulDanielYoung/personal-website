<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="mx-3 lg:mx-8">
	<div class="relative my-4 flex max-w-5xl justify-center lg:my-8 lg:justify-normal">
		<nav class="flex" aria-label="Breadcrumb">
			<ol role="list" class="flex space-x-4 rounded-md bg-white px-6 shadow">
				<li class="flex">
					<div class="flex items-center">
						<a href="/" class="text-gray-400 hover:text-gray-500">
							<svg
								class="h-5 w-5 flex-shrink-0"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Home</span>
						</a>
					</div>
				</li>
				<li class="flex">
					<div class="flex items-center">
						<svg
							class="h-full w-6 flex-shrink-0 text-gray-200"
							viewBox="0 0 24 44"
							preserveAspectRatio="none"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
						</svg>
						<a href="/blog" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
							>Blog</a
						>
					</div>
				</li>
			</ol>
		</nav>
	</div>

	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">The #1 Paul Young blog on the internet.</p>
		</div>
		<div
			class="mx-auto my-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data.posts as post}
				<a href={post.slug}>
					<article
						class="flex flex-col items-start justify-between rounded-xl border-4 bg-slate-50 lg:transition lg:hover:scale-101 lg:hover:shadow-xl"
					>
						<div class="relative w-full">
							<img
								src={post.imageSrc}
								alt={post.imageAlt}
								class="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
						</div>
						<div class="w-full px-4">
							<div class="mt-4 flex items-center justify-between text-xs">
								<time datetime={post.date} class="text-gray-500">{formatDate(post.date)}</time>
								<div class="space-x-1">
									{#each post.categories as category}
										<span
											class="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
										>
											{category}
										</span>
									{/each}
								</div>
							</div>
							<div class="group relative">
								<h3 class="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-gray-900">
									{post.title}
								</h3>
								<p class="mb-4 mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
									{post.description}
								</p>
							</div>
							<div class="mb-4 flex items-center justify-between">
								<span class="text-sm font-semibold leading-6 text-indigo-600"
									>Continue reading <span aria-hidden="true">&rarr;</span></span
								>
								<span class="text-sm text-gray-500">{post.readingLength}</span>
							</div>
						</div>
					</article>
				</a>
			{/each}
		</div>
	</div>
</div>
