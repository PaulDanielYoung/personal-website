import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkUnwrapImages, remarkToc],
	rehypePlugins: [rehypeSlug, rehypeCodeTitles],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const [actualLang, title] = lang.split(':'); // Extracts actualLang and title

			const highlighter = await shiki.getHighlighter({ theme: 'one-dark-pro' });
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang: actualLang
				})
			);

			// Wraps the code and title as per your desired format
			const titledHtml = title
				? `<div class="rehype-code-title">${title}</div><pre><code class="language-${actualLang}">${html}</code></pre>`
				: `<pre><code class="language-${actualLang}">${html}</code></pre>`;

			return `{@html \`${titledHtml}\` }`;
		}
	},
	layout: {
		_: './src/mdsvex.svelte'
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
