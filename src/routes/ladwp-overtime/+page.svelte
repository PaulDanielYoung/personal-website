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
                    response.element.classList.remove('border-gray-600', 'bg-gray-800');
                    response.element.classList.add('border-blue-400', 'bg-gray-700', 'scale-105');
                })
                .onStepExit((response) => {
                    // { element, index, direction }
                    console.log('Exited step:', response.index);
                    response.element.classList.remove('border-blue-400', 'bg-gray-700', 'scale-105');
                    response.element.classList.add('border-gray-600', 'bg-gray-800');
                });
        }
    });
</script>

<!-- Display Wrapper -->
<div class="min-h-screen flex items-center justify-center px-8 py-16 relative">
    <div class="max-w-5xl mx-auto text-center">
        
        <!-- Topper Image/Logo Wrapper -->
        <div class="mb-4">
            <img src="/ladwp-logo.svg" alt="LADWP Logo" class="mx-auto h-16 w-auto opacity-90" />
        </div>
        
        <!-- Main Headline -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style="font-family: Georgia, serif;">
            How to cheat the system
        </h1>
        
        <!-- Introduction/Subtitle -->
        <h2 class="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto font-light">
            A new analysis of compensation data uncovers questionable overtime charges
        </h2>
        
        <!-- Byline and Social Section -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            
            <!-- Byline -->
            <div class="text-gray-400 text-center md:text-left">
                <span class="text-base">
                    By <a href="https://paulyoung.fun" class="font-medium text-white hover:text-blue-400 transition-colors cursor-pointer">Paul Young</a>
                </span>
                <span class="block md:inline md:ml-4 text-md mt-2 md:mt-0">
                    Sept. 8, 2025
                </span>
            </div>   
        </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p class="text-gray-400 text-sm font-semibold uppercase tracking-wider">
            Scroll to continue 
            <span class="inline-block ml-1 animate-bounce">↓</span>
        </p>
    </div>
</div>

<!-- Main Content Section -->
<div class="max-w-5xl mx-auto px-8 py-16">
    <h2 class="text-center text-3xl font-bold text-white mb-16">Investigation Details</h2>
    
    <div class="step my-[50vh] p-8 border-2 border-gray-600 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out" data-step="a">
        <h2 class="text-2xl font-semibold text-white mb-4">Step 1: The Problem</h2>
        <p class="leading-relaxed text-gray-300 mb-4">This is the first step of your investigative piece. Add your content here.</p>
        <p class="leading-relaxed text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    
    <div class="step my-[50vh] p-8 border-2 border-gray-600 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out" data-step="b">
        <h2 class="text-2xl font-semibold text-white mb-4">Step 2: The Data</h2>
        <p class="leading-relaxed text-gray-300 mb-4">This is the second step. You might want to show charts or data visualizations here.</p>
        <p class="leading-relaxed text-gray-300 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    
    <div class="step my-[50vh] p-8 border-2 border-gray-600 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out" data-step="c">
        <h2 class="text-2xl font-semibold text-white mb-4">Step 3: The Impact</h2>
        <p class="leading-relaxed text-gray-300 mb-4">This is the third step. Perhaps conclusions or call-to-action content.</p>
        <p class="leading-relaxed text-gray-300 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
</div>