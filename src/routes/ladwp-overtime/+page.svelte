<script lang="ts">
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

            // Fetch top earners data for table display
            // GET /data/ladwp_2024.json – loads LADWP 2024 compensation records
            // Expected fields used: RegularPay, OvertimePay, LumpSumPay, OtherPay, TotalWages,
            // TotalRetirementAndHealthContribution, HealthDentalVision, Position
            try {
                const res = await fetch('/data/ladwp_2024.json');
                if (!res.ok) throw new Error(`Failed to load data (${res.status})`);
                const data: RecordItem[] = await res.json();

                const toNumber = (v: unknown): number => (typeof v === 'number' ? v : Number(v) || 0);

                const ranked: RankedRow[] = (Array.isArray(data) ? data : [])
                    .map((d: RecordItem): RankedRow => {
                        const totalWages = toNumber(d.TotalWages) || (
                            toNumber(d.RegularPay) + toNumber(d.OvertimePay) + toNumber(d.LumpSumPay) + toNumber(d.OtherPay)
                        );
                        const benefits = toNumber(d.TotalRetirementAndHealthContribution) || toNumber(d.HealthDentalVision);
                        const totalComp = totalWages + benefits;
                        return {
                            position: d.Position || '—',
                            regular: toNumber(d.RegularPay),
                            overtime: toNumber(d.OvertimePay),
                            other: toNumber(d.OtherPay) + toNumber(d.LumpSumPay),
                            totalWages,
                            benefits,
                            totalComp
                        };
                    })
                    .sort((a, b) => b.totalComp - a.totalComp)
                    .slice(0, 10);

                topTen = ranked;
                topTenError = '';
            } catch (err) {
                console.error(err);
                topTenError = 'Sorry, we could not load the compensation data right now.';
            } finally {
                topTenLoading = false;
            }
        }
    });

    type RecordItem = {
        Position?: string;
        RegularPay?: number | string;
        OvertimePay?: number | string;
        LumpSumPay?: number | string;
        OtherPay?: number | string;
        TotalWages?: number | string;
        TotalRetirementAndHealthContribution?: number | string;
        HealthDentalVision?: number | string;
    };

    type RankedRow = {
        position: string;
        regular: number;
        overtime: number;
        other: number;
        totalWages: number;
        benefits: number;
        totalComp: number;
    };

    let topTen: RankedRow[] = [];
    let topTenLoading: boolean = true;
    let topTenError: string = '';
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
<div class="max-w-4xl mx-auto px-8 py-16">
    <!-- Introduction -->
    <div class="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-left text-gray-200 leading-relaxed space-y-4" style="font-family: Georgia, serif;">
        <p>Every year, the California State Controller provides information on employee pay and benefits for approximately 2 million positions at more than 5,000 public employers — including the Los Angeles Department of Water and Power (LADWP).</p>
        <p>For this analysis, I exported the '2024 City Data' dataset from the State Controller's website and filtered the 'DepartmentOrSubdivision' column for 'Los Angeles Department Of Water And Power'.</p>
        <p>Let's start off by showing the highest paid employees in 2024.</p>

        <!-- Top 10 compact table -->
        <div class="mt-6">
            {#if topTenLoading}
                <p class="text-gray-400">Loading top earners…</p>
            {:else if topTenError}
                <p class="text-red-400">{topTenError}</p>
            {:else}
                <div class="overflow-x-auto">
                    <table class="min-w-full text-sm text-gray-200">
                        <thead>
                            <tr class="text-left text-gray-400 border-b border-gray-700">
                                <th class="py-2 pr-4">#</th>
                                <th class="py-2 pr-4">Position</th>
                                <th class="py-2 pr-4 text-right">Regular</th>
                                <th class="py-2 pr-4 text-right">Overtime</th>
                                <th class="py-2 pr-4 text-right">Benefits</th>
                                <th class="py-2 pr-0 text-right">Total Comp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each topTen as row, i}
                                <tr class="border-b border-gray-800">
                                    <td class="py-2 pr-4">{i + 1}</td>
                                    <td class="py-2 pr-4">{row.position}</td>
                                    <td class="py-2 pr-4 text-right">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.regular)}</td>
                                    <td class="py-2 pr-4 text-right">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.overtime)}</td>
                                    <td class="py-2 pr-4 text-right">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.benefits)}</td>
                                    <td class="py-2 pr-0 text-right font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.totalComp)}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            {/if}
        </div>
        <p>Wow, that's great compensation! But at first glance, this appears to make sense. These are supervisors which usually command a higher salary. However, there's one individual who doesn't appear to be a supervisor, #4 the Electric Distribution Mechanic.</p>

    </div>

    <div class="step my-[30vh] p-8 border-2 border-gray-600 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out" data-step="a">
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