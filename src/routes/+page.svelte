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

<Hero />

<p class="mx-3 my-8 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:mx-8 lg:my-12">
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

<p class="mx-3 my-8 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:mx-8 lg:my-12">
	What I'm working on...
</p>

<Projects />

<Newsletter {data} />
