<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	type PieDatum = {
		language: string;
		speakers: number;
	};

	const data: PieDatum[] = [
		{ language: 'Mandarin', speakers: 918 },
		{ language: 'Spanish', speakers: 460 },
		{ language: 'English', speakers: 379 },
		{ language: 'Hindi', speakers: 341 },
		{ language: 'Bengali', speakers: 228 },
		{ language: 'Portuguese', speakers: 221 },
		{ language: 'Russian', speakers: 154 },
		{ language: 'Japanese', speakers: 128 },
		{ language: 'Punjabi', speakers: 92.7 },
		{ language: 'Marathi', speakers: 83.1 },
		{ language: 'Telugu', speakers: 82 },
		{ language: 'Wu Chinese', speakers: 81.4 },
		{ language: 'Turkish', speakers: 79.4 },
		{ language: 'Korean', speakers: 77.3 },
		{ language: 'French', speakers: 77.2 },
		{ language: 'German', speakers: 76.1 },
		{ language: 'Vietnamese', speakers: 76 },
		{ language: 'Tamil', speakers: 75 },
		{ language: 'Yue Chinese', speakers: 73.1 },
		{ language: 'Urdu', speakers: 68.6 }
	];

	function labelPosition(d: d3.PieArcDatum<PieDatum>, radius: number) {
		const a = (d.startAngle + d.endAngle) / 2 - Math.PI / 2;
		const r = 0.65 * radius;
		return [Math.cos(a) * r, Math.sin(a) * r];
	}

	function getFontSize(width: number): string {
		if (width >= 225) return '12px';
		if (width >= 175) return '8px';
		return '6px';
	}

	const setDimensions = () => {
		const width = window.innerWidth >= 1024 ? 225 : window.innerWidth >= 768 ? 175 : 125;
		const fontSize = getFontSize(width);
		const height = width;
		const radius = Math.min(width, height) / 2;

		drawChart('#languageChart', data, width, height, radius, fontSize);
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
		const pie = d3.pie<PieDatum>().value((d) => d.speakers);
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
			.text((d) => d.data.language);
	};

	onMount(() => {
		setDimensions();
	});
</script>

<svelte:window on:resize={setDimensions} />

<div class="my-6 flex justify-center" id="languageChart"></div>
