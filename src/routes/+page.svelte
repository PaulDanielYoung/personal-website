<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	export let data;
</script>

<Hero />

<p class="text-center text-3xl font-bold tracking-tight sm:text-4xl">What I'm thinking about...</p>

<Blog />

<p class="text-center text-3xl font-bold tracking-tight sm:text-4xl">What I'm working on...</p>

<Projects />

<Newsletter {data} />
