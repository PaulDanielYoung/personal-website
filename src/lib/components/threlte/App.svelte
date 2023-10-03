<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let isLargeScreen = false;

	const updateScreenSize = () => {
		isLargeScreen = window.innerWidth >= 1024;
	};

	onMount(() => {
		window.addEventListener('resize', updateScreenSize);
		updateScreenSize();
		return () => {
			window.removeEventListener('resize', updateScreenSize);
		};
	});
</script>

{#if !isLargeScreen}
	<div class="relative h-full w-full">
		<div class="absolute h-full w-full" />
		<Canvas>
			<Scene />
		</Canvas>
	</div>
{:else}
	<Canvas>
		<Scene />
	</Canvas>
{/if}
