<script lang="ts">
	export let href: string;

	let target = href.startsWith('#') ? '_self' : '_blank';
</script>

<a {href} {target}>
	<slot />
</a>
