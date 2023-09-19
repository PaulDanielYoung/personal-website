<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let posts;

	const featuredPost = posts[0];
	const secondPost = posts[1];
	const thirdPost = posts[2];
</script>

<div class="my-12 px-6 lg:px-8">
	<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-2">
		<article class="flex h-full flex-col items-center justify-center border-b-2 lg:border-b-0">
			<div class="flex flex-col space-y-4">
				<!-- This wrapper is added to ensure the spacing between the child elements remains consistent -->
				<time datetime={featuredPost.date} class="block text-sm leading-6 text-gray-600"
					>{formatDate(featuredPost.date)}</time
				>
				<h2
					id="featured-post"
					class="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl xl:text-3xl"
				>
					{featuredPost.title}
				</h2>
				<p class="text-md mt-4 leading-6 text-gray-600 xl:text-lg">
					{featuredPost.description}
				</p>
				<div class="flex flex-col justify-between gap-4 lg:flex-col lg:gap-6">
					<div class="flex justify-between">
						<a
							href="#"
							class="text-sm font-semibold leading-6 text-indigo-600"
							aria-describedby="featured-post"
							>Continue reading <span aria-hidden="true">&rarr;</span></a
						>
						<span class="px-6 text-sm text-gray-500">5 min read</span>
					</div>
					<div class="mb-4 flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900 lg:mb-0">
						<span
							class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
							>Badge</span
						>
						<span
							class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
							>Badge</span
						>
						<span
							class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
							>Badge</span
						>
					</div>
				</div>
			</div>
		</article>

		<div class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
			<article class="border-b-2">
				<div class="group relative max-w-3xl pt-4">
					<time datetime={secondPost.date} class="block text-sm leading-6 text-gray-600"
						>{formatDate(secondPost.date)}</time
					>
					<h2 class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
						<a href="#">
							<span class="absolute inset-0"></span>
							{secondPost.title}
						</a>
					</h2>
					<p class="mt-4 text-sm leading-6 text-gray-600">
						{secondPost.description}
					</p>
				</div>
				<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
					<div class="flex justify-between">
						<a
							href="#"
							class="text-sm font-semibold leading-6 text-indigo-600"
							aria-describedby="featured-post"
							>Continue reading <span aria-hidden="true">&rarr;</span></a
						>
						<span class="px-6 text-sm text-gray-500">5 min read</span>
					</div>
					<div class="mb-4 flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
						<span
							class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
							>Badge</span
						>
						<span
							class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
							>Badge</span
						>
						<span
							class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
							>Badge</span
						>
					</div>
				</div>
			</article>

			<article>
				<div class="group relative max-w-3xl pt-4">
					<time datetime={thirdPost.date} class="block text-sm leading-6 text-gray-600"
						>{formatDate(thirdPost.date)}</time
					>
					<h2 class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
						<a href="#">
							<span class="absolute inset-0"></span>
							{thirdPost.title}
						</a>
					</h2>
					<p class="mt-4 text-sm leading-6 text-gray-600">
						{thirdPost.description}
					</p>
				</div>
				<div class="mt-3 flex flex-col justify-between gap-4 lg:flex-col">
					<div class="flex justify-between">
						<a
							href="#"
							class="text-sm font-semibold leading-6 text-indigo-600"
							aria-describedby="featured-post"
							>Continue reading <span aria-hidden="true">&rarr;</span></a
						>
						<span class="px-6 text-sm text-gray-500">5 min read</span>
					</div>
					<div class="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
						<span
							class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
							>Badge</span
						>
						<span
							class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
							>Badge</span
						>
						<span
							class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
							>Badge</span
						>
					</div>
				</div>
			</article>
		</div>
	</div>
</div>
