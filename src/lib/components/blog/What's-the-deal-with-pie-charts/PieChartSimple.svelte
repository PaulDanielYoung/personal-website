<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as d3 from 'd3';

	let goodData = [20, 40];
	let badData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

	const setDimensions = () => {
		const width = window.innerWidth >= 1024 ? 225 : window.innerWidth >= 768 ? 175 : 125;
		const height = width;
		const radius = Math.min(width, height) / 2;

		drawChart('#chart-good', goodData, width, height, radius);
		drawChart('#chart-bad', badData, width, height, radius);
	};

	const drawChart = (
		selector: string,
		data: number[],
		width: number,
		height: number,
		radius: number
	) => {
		d3.select(selector).html(''); // Clear previous SVG

		const svg = d3
			.select(selector)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		const color = d3.scaleOrdinal(d3.schemeTableau10);
		const pie = d3.pie();
		const arc = d3.arc().innerRadius(0).outerRadius(radius);

		const g = svg.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

		g.append('path')
			.attr('d', <any>arc)
			.style('fill', function (d, i) {
				let fillColor = color(i.toString());
				d3.select(this).attr('data-original-color', fillColor);
				return fillColor;
			});
	};

	onMount(() => {
		setDimensions();
	});
</script>

<svelte:window on:resize={setDimensions} />

<div class="mb-6 flex flex-row justify-center space-x-16 sm:space-x-28 md:space-x-36">
	<div>
		<p class="text-center font-bold">Good</p>
		<div id="chart-good"></div>
	</div>
	<div>
		<p class="text-center font-bold">Bad</p>
		<div id="chart-bad"></div>
	</div>
</div>
