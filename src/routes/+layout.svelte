<script>
	import '../app.postcss';
	import PageTransition from '$lib/components/Transition.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<div class="flex min-h-screen flex-col">
	{#if data.url.startsWith('/blog')}
		<Header />
	{/if}
	<div class="flex-grow">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</div>
	<Footer />
</div>
