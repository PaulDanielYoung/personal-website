<!-- Main Container -->
<div class="flex min-h-screen items-center justify-center px-6 py-6 sm:py-12 lg:px-8">
	<!-- Content Container -->
	<div class="relative w-full max-w-6xl py-3">
		<!-- Card Container -->
		<div
			class="absolute inset-0 -rotate-6 skew-y-1 transform rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg lg:-rotate-6 lg:skew-y-3"
		></div>
		<div class="relative rounded-3xl border-2 bg-white px-4 py-10 shadow-lg">
			<!-- Blog Header (Consider adding a back button or breadcrumb for navigation) -->

			<!-- Slot - This is where your blog content will be injected -->
			<div class="flex justify-center">
				<slot />
			</div>
			<!-- (Optional) Add a section for comments or related articles here -->
		</div>
	</div>
</div>
