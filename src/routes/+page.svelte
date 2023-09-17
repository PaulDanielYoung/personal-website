<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	export let data;
</script>

<Hero />

<Newsletter {data} />
