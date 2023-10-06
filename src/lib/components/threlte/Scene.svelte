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
	// Define your colors
	const color1 = new Color('#DB2777');
	const color2 = new Color('#9333EA');
	const color3 = new Color('#2563EB');

	useFrame((state, delta) => {
		// Increase the dash offset
		dashOffset += delta / 2;

		// Determine the phase of the cycle (0 to 1 to 0 to 1)
		const phase = (Math.sin(dashOffset) / 2 + 0.5) * 3; // now cycles from 0 to 3

		let t;
		if (phase < 1) {
			// First segment: lerp between color1 and color2
			t = phase; // normalize t to [0, 1]
			color.lerpColors(color1, color2, t);
		} else if (phase < 2) {
			// Second segment: lerp between color2 and color3
			t = phase - 1; // normalize t to [0, 1]
			color.lerpColors(color2, color3, t);
		} else {
			// Third segment: lerp between color3 and color1
			t = phase - 2; // normalize t to [0, 1]
			color.lerpColors(color3, color1, t);
		}

		// Shrink and grow the line width
		width = Math.sin(dashOffset * 2) / 5 + 0.3;
	});

	function handleRef(ref) {
		// Do something with the ref if needed
		console.log(ref);
	}

	let cameraRef;
	let innerWidth;
	let previousWidth = window.innerWidth;

	// Define updateCameraPosition here
	function updateCameraPosition(ref) {
		const { innerWidth: width } = window;
		if (width < 640) {
			// Extra-small screens
			ref.position.set(16.5, 6, 0);
		} else if (width >= 640 && width < 768) {
			// Small screens
			ref.position.set(14, 5, 0);
		} else if (width >= 768 && width < 1024) {
			// Medium screens
			ref.position.set(13.6, 5, 0);
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
