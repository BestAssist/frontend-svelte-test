<script>
    import BoxImage from '$lib/images/edec5273d15b36e8b305fb5574b98a95.png';

    export let title;
    export let subtitle;
    export let user;
</script>

<div class="relative grid grid-cols-3 gap-2 items-center bg-custom-gradient overflow-hidden border shadow rounded-xl border border-slate-700">
    <div class="col-span-1 p-2 bg-recent-drop-gradient overflow-hidden	 rounded-xl">
        <img src={BoxImage} alt="box-icon" class="ml-6" />
    </div>

    <div class="col-span-2 p-2 text-white">
        <h1 class="text-xl font-bold">{title}</h1>
        <h2 class="opacity-80">{subtitle}</h2>

        <div class="flex items-center gap-2 mt-3">
            <img src={user.avatar} alt="avatar" class="w-8 h-8 rounded-full" />
            <span>@ {user.id}</span>
        </div>
    </div>
</div>
