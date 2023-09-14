<footer>
	<div class="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-10">
		<div class="flex justify-center space-x-6 md:order-2">
			<a
				href="https://www.linkedin.com/in/paul-daniel-young"
				class="lg:hover-scale-115 text-black"
				target="_blank"
				rel="noreferrer"
			>
				<span class="sr-only">LinkedIn</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="footersvg icon icon-tabler icon-tabler-brand-linkedin"
					width="36"
					height="36"
					viewBox="2 2 20 20"
					stroke-width="1.7"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
					></path>
					<path d="M8 11l0 5"></path>
					<path d="M8 8l0 .01"></path>
					<path d="M12 16l0 -5"></path>
					<path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
				</svg>
			</a>
			<a
				href="https://github.com/PaulDanielYoung"
				class="lg:hover-scale-115 text-black"
				target="_blank"
				rel="noreferrer"
			>
				<span class="sr-only">Github</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="footersvg icon icon-tabler icon-tabler-brand-github"
					width="36"
					height="36"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					></path>
				</svg>
			</a>
			<a
				href="mailto:pauldanielyoung@outlook.com"
				class="lg:hover-scale-115 text-black"
				target="_blank"
				rel="noreferrer"
			>
				<span class="sr-only">Email</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="footersvg icon icon-tabler icon-tabler-at"
					width="36"
					height="36"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
					<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
				</svg>
			</a>
		</div>
		<div class="mt-5 md:order-1 md:mt-0">
			<p class="text-center text-sm leading-5 text-black">
				&copy; 2023 Paul Young. All rights reserved.
			</p>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		background: linear-gradient(
			to right,
			rgba(252, 165, 165, 0.4),
			rgba(165, 55, 253, 0.4),
			rgba(55, 154, 255, 0.4)
		);
	}

	.footersvg {
		transition: transform 0.3s ease;
	}

	/* This sets up a custom class for the hover effect */
	@screen lg {
		.lg\:hover-scale-115:hover .footersvg {
			transform: scale(1.15);
		}
	}
</style>
