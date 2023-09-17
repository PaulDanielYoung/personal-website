<script>
	import '../app.postcss';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<div class="flex-grow">
		<slot />
	</div>
	<Footer />
</div>
