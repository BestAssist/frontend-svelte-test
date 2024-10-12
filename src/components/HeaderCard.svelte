<script>
    export let icon;
    export let percentage;
    export let title;
    export let description;
</script>

<div class="flex flex-col col-span-1 gap-8 p-6 bg-custom-gradient border shadow rounded-xl border border-slate-700 text-center cols-span-500">
    <div class="mt-[-50px] w-36 mx-auto">
        <img src={icon} alt="card-banner" class="w-full" />
    </div>
    
    <div class="text-white">
        <h1 class="text-3xl font-bold">{percentage}%</h1>
        <h2 class="text-xl font-semibold mb-2">{title}</h2>
        
        <p class="font-normal text-Slate-600 opacity-80	">{description}</p>
    </div>
</div>
