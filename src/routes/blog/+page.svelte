<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="bg-white py-8">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				Sometimes, I write about stuff that interests me.
			</p>
		</div>
		<div
			class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data.posts as post}
				<a href={post.slug}>
					<article
						class="flex flex-col items-start justify-between rounded-lg border-2 bg-slate-50 lg:transition lg:hover:scale-101 lg:hover:shadow-xl"
					>
						<div class="relative w-full">
							<img
								src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
								alt=""
								class="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
						</div>
						<div class="w-full px-4">
							<div class="mt-2 flex items-center gap-x-4 text-xs">
								<time datetime={post.date} class="text-gray-500">{formatDate(post.date)}</time>
								<span
									class="relative z-10 rounded-full bg-red-50 px-3 py-1.5 font-medium text-gray-600"
									>Marketing</span
								>
							</div>
							<div class="group relative">
								<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
									{post.title}
								</h3>
								<p class="mb-2 mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
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
