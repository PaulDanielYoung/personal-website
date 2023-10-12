<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	type PieDatum = {
		quarter: string;
		value: number;
	};

	const dataYear1: PieDatum[] = [
		{ quarter: 'Q1', value: 25 },
		{ quarter: 'Q2', value: 30 },
		{ quarter: 'Q3', value: 20 },
		{ quarter: 'Q4', value: 25 }
	];

	const dataYear2: PieDatum[] = [
		{ quarter: 'Q1', value: 20 },
		{ quarter: 'Q2', value: 35 },
		{ quarter: 'Q3', value: 25 },
		{ quarter: 'Q4', value: 20 }
	];

	function labelPosition(d: d3.PieArcDatum<PieDatum>, radius: number) {
		const a = (d.startAngle + d.endAngle) / 2 - Math.PI / 2;
		const r = 0.65 * radius;
		return [Math.cos(a) * r, Math.sin(a) * r];
	}

	function getFontSize(width: number): string {
		if (width >= 225) return '14px';
		if (width >= 175) return '10px';
		return '8px';
	}

	const setDimensions = () => {
		const width = window.innerWidth >= 1024 ? 225 : window.innerWidth >= 768 ? 175 : 125;
		const fontSize = getFontSize(width);
		const height = width;
		const radius = Math.min(width, height) / 2;

		drawChart('#chartYear1', dataYear1, width, height, radius, fontSize);
		drawChart('#chartYear2', dataYear2, width, height, radius, fontSize);
	};

	const drawChart = (
		selector: string,
		data: PieDatum[],
		width: number,
		height: number,
		radius: number,
		fontSize: string
	) => {
		d3.select(selector).html('');

		const svg = d3
			.select(selector)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${width / 2},${height / 2})`);

		const color = d3.scaleOrdinal(d3.schemeTableau10);
		const pie = d3.pie<PieDatum>().value((d) => d.value);
		const arc = d3.arc().innerRadius(0).outerRadius(radius);

		const g = svg.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

		g.append('path')
			.attr('d', <any>arc)
			.style('fill', (d, i) => color(i.toString()));

		g.append('text')
			.attr('transform', (d) => {
				const [x, y] = labelPosition(d, radius);
				return `translate(${x},${y})`;
			})
			.attr('dy', '.35em')
			.attr('text-anchor', 'middle')
			.attr('fill', '#fff')
			.style('font-size', fontSize)
			.text((d) => d.data.quarter);
	};

	onMount(() => {
		setDimensions();
	});
</script>

<svelte:window on:resize={setDimensions} />

<div class="mt-6 flex flex-row justify-center space-x-10 sm:space-x-28 md:space-x-36">
	<div class="flex flex-col items-center">
		<div id="chartYear1"></div>
		<p class="mt-2">Year 1</p>
	</div>
	<div class="flex flex-col items-center">
		<div id="chartYear2"></div>
		<p class="mt-2">Year 2</p>
	</div>
</div>
