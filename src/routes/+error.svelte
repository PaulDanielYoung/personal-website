<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center" style="min-height: calc(100vh - var(--error-offset))">
	<h1 class="text-4xl font-semibold text-blue-500">
		{$page.status}: {$page.error?.message}
	</h1>
</div>

<style lang="postcss">
	/* Base size */
	:root {
		--error-offset: 100px;
	}

	/* Medium screen */
	@media (min-width: 768px) {
		:root {
			--error-offset: 68px;
		}
	}
</style>
