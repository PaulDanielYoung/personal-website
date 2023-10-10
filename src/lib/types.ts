export type Categories =
	| 'Internal Audit'
	| 'Data Analytics'
	| 'Data Visualization'
	| 'Web Development'
	| 'SvelteKit'
	| 'Svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	readingLength: string;
	categories: Categories[];
	imageSrc: string;
	imageAlt: string;
	published: boolean;
};
