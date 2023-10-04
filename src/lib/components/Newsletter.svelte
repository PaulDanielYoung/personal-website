<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';

	//import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	const { form, enhance, errors, constraints, message } = superForm(data.form, {
		resetForm: true
	});

	$: {
		if ($errors.email && Array.isArray($errors.email)) {
			$errors.email.forEach((err) =>
				toast.error(err, {
					position: 'bottom-center',
					duration: 4000,
					style:
						'font-size: 1.2em; background-color: rgba(255, 0, 0, 1); color: white; border: 2px solid white; border-radius: 8px; padding: 10px 20px;'
				})
			);
		}

		if ($message) {
			toast.success($message, {
				position: 'bottom-center',
				duration: 4000,
				style:
					'font-size: 1.2em; background-color: rgba(0, 200, 0, 1); color: white; border: 2px solid white; border-radius: 8px; padding: 10px 20px;'
			});
		}
	}
</script>

<Toaster />

<div class="mx-2 mb-12 mt-8 flex lg:mx-8 lg:mb-16 lg:mt-12">
	<div class="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
		<div class="max-w-xl text-2xl font-bold tracking-tight text-gray-900 lg:col-span-7 lg:text-4xl">
			<h2 class="block text-center lg:inline lg:text-left xl:block">
				Want updates?<span class="hidden lg:inline xl:hidden"><br /></span>
			</h2>
			<p class="block text-center lg:inline lg:text-left xl:block">Sign up for my newsletter.</p>
		</div>
		<form method="POST" use:enhance class="w-full max-w-md lg:col-span-5 lg:pt-2">
			<div class="flex justify-center gap-x-4">
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
					class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
				>
					Subscribe
				</button>
			</div>
			<p class="mt-2 text-center text-xs leading-6 text-gray-900 lg:text-sm">
				You will be notified when a new post or project is added.
			</p>
		</form>
	</div>
</div>
