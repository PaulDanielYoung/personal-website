export type Categories = 'Audit' | 'Data Analytics' | 'SvelteKit' | 'Svelte';

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
