<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	type PieDatum = {
		brand: string;
		value: number;
	};

	const data: PieDatum[] = [
		{ brand: 'Brand A', value: 20 },
		{ brand: 'Brand B', value: 21 },
		{ brand: 'Brand C', value: 20.5 },
		{ brand: 'Brand D', value: 19.8 },
		{ brand: 'Brand E', value: 18.7 }
	];

	function labelPosition(d: d3.PieArcDatum<{ brand: string; value: number }>, radius: number) {
		const a = (d.startAngle + d.endAngle) / 2 - Math.PI / 2;
		const r = 0.65 * radius; // You can tweak this value for better positioning.
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

		drawChart('#chart', data, width, height, radius, fontSize);
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
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		const color = d3.scaleOrdinal(d3.schemeTableau10);
		const pie = d3.pie<PieDatum>().value((d) => d.value);
		const arc = d3.arc().innerRadius(0).outerRadius(radius);

		const g = svg.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

		g.append('path')
			.attr('d', <any>arc)
			.style('fill', function (d, i) {
				let fillColor = color(i.toString());
				d3.select(this).attr('data-original-color', fillColor);
				return fillColor;
			});

		g.append('text')
			.attr('transform', (d) => {
				const [x, y] = labelPosition(d, radius);
				return `translate(${x},${y})`;
			})

			.attr('dy', '.35em')
			.attr('text-anchor', 'middle')
			.attr('fill', '#fff')
			.style('font-size', fontSize)
			.text((d) => d.data.brand);
	};

	onMount(() => {
		setDimensions();
	});
</script>

<svelte:window on:resize={setDimensions} />

<div class="my-6 flex justify-center" id="chart"></div>
