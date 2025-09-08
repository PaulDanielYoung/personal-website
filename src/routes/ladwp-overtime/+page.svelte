<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    onMount(async () => {
        if (browser) {
            // Dynamically import scrollama only on the client
            const scrollama = (await import('scrollama')).default;
            
            // instantiate the scrollama
            const scroller = scrollama();

            // setup the instance, pass callback functions
            scroller
                .setup({
                    step: ".step",
                })
                .onStepEnter((response) => {
                    // { element, index, direction }
                    console.log('Entered step:', response.index);
                    response.element.classList.remove('border-gray-300', 'bg-gray-50');
                    response.element.classList.add('border-blue-600', 'bg-blue-50', 'scale-105');
                })
                .onStepExit((response) => {
                    // { element, index, direction }
                    console.log('Exited step:', response.index);
                    response.element.classList.remove('border-blue-600', 'bg-blue-50', 'scale-105');
                    response.element.classList.add('border-gray-300', 'bg-gray-50');
                });
        }
    });
</script>

<div class="max-w-4xl mx-auto px-8 py-8">
    <h1 class="text-center text-4xl font-bold text-gray-800 mb-12">LADWP Overtime Investigation</h1>
    
    <div class="step my-[50vh] p-8 border-2 border-gray-300 rounded-lg bg-gray-50 transition-all duration-300 ease-in-out" data-step="a">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Step 1: The Problem</h2>
        <p class="leading-relaxed text-gray-600 mb-4">This is the first step of your investigative piece. Add your content here.</p>
        <p class="leading-relaxed text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    
    <div class="step my-[50vh] p-8 border-2 border-gray-300 rounded-lg bg-gray-50 transition-all duration-300 ease-in-out" data-step="b">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Step 2: The Data</h2>
        <p class="leading-relaxed text-gray-600 mb-4">This is the second step. You might want to show charts or data visualizations here.</p>
        <p class="leading-relaxed text-gray-600 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    
    <div class="step my-[50vh] p-8 border-2 border-gray-300 rounded-lg bg-gray-50 transition-all duration-300 ease-in-out" data-step="c">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Step 3: The Impact</h2>
        <p class="leading-relaxed text-gray-600 mb-4">This is the third step. Perhaps conclusions or call-to-action content.</p>
        <p class="leading-relaxed text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
</div>