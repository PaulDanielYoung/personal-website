export type Categories =
	| 'Internal Audit'
	| 'Data Analytics'
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
