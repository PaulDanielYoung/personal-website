<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div class="relative h-full w-full">
	<div class="absolute h-full w-full" />
	<div class="h-full w-full">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</div>
