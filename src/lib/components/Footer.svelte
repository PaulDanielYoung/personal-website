<script lang="ts">
	import { IconBrandLinkedin } from '@tabler/icons-svelte';
	import { IconBrandGithub } from '@tabler/icons-svelte';
	import { IconAt } from '@tabler/icons-svelte';
</script>

<footer class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-10">
		<div class="flex justify-center space-x-6 md:order-2">
			<a href="#" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">LinkedIn</span>
				<IconBrandLinkedin class="h-8 w-8" />
			</a>
			<a href="#" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Github</span>
				<IconBrandGithub class="h-8 w-8" />
			</a>
			<a href="#" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Email</span>
				<IconAt class="h-8 w-8" />
			</a>
		</div>
		<div class="mt-10 md:order-1 md:mt-0">
			<p class="text-center text-xs leading-5 text-gray-500">
				&copy; 2023 Paul Young. All rights reserved.
			</p>
		</div>
	</div>
</footer>
