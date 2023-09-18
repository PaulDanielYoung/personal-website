<script>
	import '../app.postcss';
	import PageTransition from '$lib/components/Transition.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<div class="flex min-h-screen flex-col">
	<div class="flex-grow">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</div>
	<Footer />
</div>
