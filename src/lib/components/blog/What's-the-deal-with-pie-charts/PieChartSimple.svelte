<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let goodData = [20, 40];
	let badData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

	onMount(() => {
		const width = 200;
		const height = 200;
		const radius = Math.min(width, height) / 2;

		const svgGood = d3
			.select('#chart-good')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		const svgBad = d3
			.select('#chart-bad')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		const color = d3.scaleOrdinal(d3.schemeTableau10);

		const pie = d3.pie();
		const arc = d3.arc().innerRadius(0).outerRadius(radius);

		const g = svgGood
			.selectAll('.arc')
			.data(pie(goodData))
			.enter()
			.append('g')
			.attr('class', 'arc');

		const b = svgBad.selectAll('.arc').data(pie(badData)).enter().append('g').attr('class', 'arc');

		g.append('path')
			.attr('d', <any>arc)
			.style('fill', function (d, i) {
				let fillColor = color(i.toString());
				d3.select(this).attr('data-original-color', fillColor);
				return fillColor;
			});

		b.append('path')
			.attr('d', <any>arc)
			.style('fill', function (d, i) {
				let fillColor = color(i.toString());
				d3.select(this).attr('data-original-color', fillColor);
				return fillColor;
			});
	});
</script>

<div class="flex flex-row justify-center space-x-4 sm:space-x-20 md:space-x-32 lg:space-x-44">
	<div>
		<p class="text-center font-bold">Good</p>
		<div id="chart-good"></div>
	</div>
	<div>
		<p class="text-center font-bold">Bad</p>
		<div id="chart-bad"></div>
	</div>
</div>
