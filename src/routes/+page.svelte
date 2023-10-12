<script lang="ts">
	import type { Post } from '$lib/types';

	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	export let data;

	let posts: Post[] = [];

	onMount(async () => {
		const response = await fetch('/api/posts');
		if (response.ok) {
			posts = await response.json();
			posts = posts.slice(0, 3);
		}
	});
</script>

<svelte:head>
	<title>Paul Young</title>
</svelte:head>

<Hero />

<p
	class="mx-2 my-8 text-center text-2xl font-bold tracking-tight sm:text-3xl lg:mx-8 lg:my-12 lg:text-4xl"
>
	What I'm thinking about...
</p>

{#if posts.length}
	<Blog {posts} />
{/if}

<div class="mt-4 flex justify-center lg:mr-8 lg:justify-end">
	<a
		href="/blog"
		class="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 ease-in-out hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
	>
		See more posts
	</a>
</div>

<p
	class="mx-2 mb-2 mt-8 text-center text-2xl font-bold tracking-tight sm:text-3xl lg:mx-8 lg:mb-4 lg:mt-12 lg:text-4xl"
>
	What I'm working on...
</p>

<p
	class="mx-2 mb-8 text-center text-lg font-bold tracking-tight text-indigo-600 sm:text-xl lg:mx-8 lg:mb-12 lg:text-2xl"
>
	More projects coming soon!
</p>

<Projects />

<Newsletter {data} />
