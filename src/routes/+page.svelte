<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	//import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data; // : PageData

	const { form, enhance, errors, constraints, message } = superForm(data.form, {
		resetForm: true
	});

	$: {
		if ($errors.email && Array.isArray($errors.email)) {
			$errors.email.forEach((err) =>
				toast.error(err, {
					position: 'bottom-center',
					duration: 5000,
					style:
						'font-size: 1.2em; background-color: rgba(255, 0, 0, 1); color: white; border: 2px solid white; border-radius: 8px; padding: 10px 20px;'
				})
			);
		}

		if ($message) {
			toast.success($message, {
				position: 'bottom-center',
				duration: 5000,
				style:
					'font-size: 1.2em; background-color: rgba(0, 200, 0, 1); color: white; border: 2px solid white; border-radius: 8px; padding: 10px 20px;'
			});
		}
	}
</script>

<Toaster />

<div
	class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
>
	<div
		class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
		aria-hidden="true"
	>
		<div
			class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
			style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
		></div>
	</div>
	<div
		class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
		aria-hidden="true"
	>
		<div
			class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
			style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
		></div>
	</div>
	<p class="text-center text-xl font-bold leading-6 text-gray-900">
		This website is currently a WIP, undergoing updates started on 9/12/2023. Check back soon!
	</p>
	<div class="flex flex-1 justify-end"></div>
</div>

<div class="flex h-[80vh] flex-col justify-center">
	<h1 class="mt-10 text-center text-2xl">Hi, I'm</h1>
	<h1 class="text-center text-9xl">Paul Young</h1>
	<h2 class="mt-5 text-center text-lg">
		I'm currently exploring how I can create efficiencies for internal auditors.
	</h2>
</div>

<Blog />

<Projects />

<div class="mb-24 mt-12 flex">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
		<div class="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
			<h2 class="block lg:inline xl:block">Want updates?</h2>
			<p class="block lg:inline xl:block">Sign up for my newsletter.</p>
		</div>
		<form method="POST" use:enhance class="w-full max-w-md lg:col-span-5 lg:pt-2">
			<div class="flex gap-x-4">
				<label for="email" class="sr-only">Email address</label>
				<div class="relative">
					<input
						id="email"
						name="email"
						type="email"
						aria-invalid={$errors.email ? 'true' : undefined}
						bind:value={$form.email}
						{...$constraints.email}
						autocomplete="email"
						required
						class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Enter your email"
					/>
				</div>
				<button
					type="submit"
					class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Subscribe
				</button>
			</div>
			<p class="mt-4 text-sm leading-6 text-gray-900">
				You will be notified when a new post or project is added.
			</p>
		</form>
	</div>
</div>

<Footer />
