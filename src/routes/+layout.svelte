<script>
	import '../app.postcss';
	import PageTransition from '$lib/components/Transition.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-r from-white to-gray-100">
	<div class="flex flex-grow justify-center">
		<div class="max-w-11xl">
			<PageTransition url={data.url}>
				<slot />
			</PageTransition>
		</div>
	</div>
	<Footer />
</div>
