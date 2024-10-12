<script>
    import BoxImage from "$lib/images/edec5273d15b36e8b305fb5574b98a95.png";

    export let price;
    export let newItem;
    export let title;
    export let subtitle;
</script>

<div class="relative items-center p-6 bg-custom-gradient overflow-hidden border shadow rounded-xl border border-slate-700">
    <div class="flex justify-between items-start mb-8">
        <h1 class="text-2xl p-2.5 bg-black text-white font-bold rounded-md">
            ${price}
        </h1>

        {#if newItem}
            <div class="text-sm px-2 py-1 text-black bg-orange-400 rounded">
                New
            </div>
        {/if}
    </div>
    
    <img src={BoxImage} alt="box-icon" class="ml-28" />

    <div class="box-information flex flex-col gap-1 p-2 absolute bg-gray-900 bg-opacity-40 w-50 bottom-2 rounded-md	text-white">
        <h1 class="font-bold text-lg">{title}</h1>
        <h2 class="opacity-80 text-md">{subtitle}</h2>
    </div>
</div>

<style>
    .box-information {
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
