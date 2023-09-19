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

<p class="text-center text-3xl font-bold tracking-tight sm:text-4xl">What I'm thinking about...</p>

{#if posts.length}
	<Blog {posts} />
{/if}

<p class="text-center text-3xl font-bold tracking-tight sm:text-4xl">What I'm working on...</p>

<Projects />

<Newsletter {data} />
