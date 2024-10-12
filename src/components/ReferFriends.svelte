<script>
    import Image from '$lib/images/a82223c4f741c016b09545fb47256292.png';
    import LinkIcon from '$lib/images/link.svg';
</script>

<div class="grid grid-cols-4 lg:col-span-3 md:col-span-2 col-span-1 gap-16 items-center p-6 bg-custom-gradient border shadow rounded-xl border border-slate-700">
    <div class="col-span-3 flex flex-col justify-between gap-12 text-white">
        <div>
            <h3 class="text-2xl	font-bold mb-4">Refer Friends</h3>
    
            <p class="mb-8 opacity-80">
                Let the whole world know about people here and earn more! Receive passive income for each player who follows your link. Create your own campaign for unique referral link.
            </p>
    
            <div class="flex items-center gap-2">
                <h1 class="bg-white text-black h-8 w-8 text-xl text-center font-bold rounded-lg">2</h1>
                <h1 class="font-normal">Friends referred</h1>
            </div>
        </div>

        <div class="flex items-center gap-2 p-3 bg-transparent border border-slate-700 rounded-lg">
            <img src={LinkIcon} alt="LinkIcon" />
            <input class="bg-transparent outline-none border-none" placeholder="platform.com/link/415rebfiaeubf" />
        </div>
    </div>

    <img src={Image} alt="sss" class="w-36 col-span-1" />
</div>
