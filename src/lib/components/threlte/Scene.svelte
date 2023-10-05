<script lang="ts">
	// @ts-nocheck
	import { T, useFrame } from '@threlte/core';
	import { MeshLineMaterial, MeshLineGeometry, Grid, OrbitControls } from '@threlte/extras';
	import { Vector3, CatmullRomCurve3, Color } from 'three';

	// create a smooth curve from 4 points
	const curve = new CatmullRomCurve3([
		new Vector3(-3, 0, 0),
		new Vector3(-1, 1, -1),
		new Vector3(1, -1, 1),
		new Vector3(3, 0, 0)
	]);

	// convert curve to an array of 100 points
	const points = curve.getPoints(100);

	let width = 0.5;
	let dashOffset = 0;
	let color = new Color();
	const orange = new Color('#fe3d00');
	const purple = new Color('#9800fe');

	useFrame((state, delta) => {
		// every frame we:
		// increase the dash offset
		dashOffset += delta / 2;
		// transition between two colors
		color.lerpColors(orange, purple, Math.sin(dashOffset * 2) / 2 + 0.5);
		// shrink and grow the line width
		width = Math.sin(dashOffset * 2) / 5 + 0.3;
	});

	function handleRef(ref) {
		// Do something with the ref if needed
		console.log(ref);
	}

	let cameraRef; // Define cameraRef here
	let innerWidth; // Declare variables to hold window dimensions
	let previousWidth = window.innerWidth; // Initialize previousWidth with the current window width

	// Define updateCameraPosition here
	function updateCameraPosition(ref) {
		const { innerWidth: width } = window;
		if (width < 640) {
			// Extra-small screens
			ref.position.set(24.5, 7.5, 0);
		} else if (width >= 640 && width < 768) {
			// Small screens
			ref.position.set(19, 6, 0);
		} else if (width >= 768 && width < 1024) {
			// Medium screens
			ref.position.set(16.5, 5, 0);
		} else if (width >= 1024 && width < 1152) {
			// Large screens part one
			ref.position.set(35, 10, 0);
		} else if (width >= 1152 && width < 1280) {
			// Large screens part two
			ref.position.set(27.5, 7.5, 0);
		} else if (width >= 1280 && width < 1536) {
			// Extra-large screens
			ref.position.set(22.5, 6, 0);
		} else {
			// 2XL screens
			ref.position.set(20, 5, 0);
		}
	}

	function handleResize() {
		if (innerWidth !== previousWidth) {
			// Check if the window width has changed
			updateCameraPosition(cameraRef); // If so, update the camera position
			previousWidth = innerWidth; // Update previousWidth for the next resize event
		}
	}
</script>

<svelte:window bind:innerWidth on:resize={handleResize} />

<T.Mesh position.y={3} scale={2}>
	<MeshLineGeometry {points} />

	<MeshLineMaterial
		{width}
		{color}
		dashArray={0.5}
		dashRatio={0.5}
		{dashOffset}
		transparent
		depthTest={false}
	/>
</T.Mesh>

<T.PerspectiveCamera
	makeDefault
	on:create={({ ref }) => {
		cameraRef = ref; // Store the camera ref
		updateCameraPosition(ref);
	}}
>
	<OrbitControls
		autoRotate={true}
		autoRotateSpeed={1.5}
		enableDamping
		target.y={2}
		enableZoom={false}
		enablePan={false}
	/>
</T.PerspectiveCamera>

<Grid gridSize={[10, 10]} cellColor={'#46536b'} sectionThickness={0} ref={handleRef} />
