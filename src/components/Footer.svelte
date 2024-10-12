<script>
    import Twitter from '$lib/images/twitter.svg';
    import Discord from '$lib/images/discord.svg';
    import Tiktok from '$lib/images/tiktok.svg';
    import Youtube from '$lib/images/youtube.svg';
    import Instragram from '$lib/images/instragram.svg';
    import Reddit from '$lib/images/reddit.svg';
    import visa from '$lib/images/visa.svg';
    import Bitcoin from '$lib/images/bitcoin.svg';
</script>

<div class="bg-footer-gradient grid lg:grid-cols-2 grid-cols-1 text-white lg:p-16 p-8">
    <div>
        <div class="mb-32">
            <h1 class="text-3xl	font-bold mb-5">LOGO</h1>
            <h2 class="text-2xl opacity-70">
                Here goes a short description about the company
            </h2>
        </div>

        <div class="flex gap-8">
            <img src={Twitter} alt="twitter" class="w-8 h-8" />
            <img src={Discord} alt="discord" class="w-8 h-8" />
            <img src={Tiktok} alt="tiktok" class="w-8 h-8" />
            <img src={Youtube} alt="youtube" class="w-8 h-8" />
            <img src={Instragram} alt="instram" class="w-8 h-8" />
            <img src={Reddit} alt="reddit" class="w-8 h-8" />
        </div>

        <div class="opacity-70 mt-5">© Copyrights 2023</div>
    </div>
 
    <div class="col-start-3 text-end">
        <div class="grid grid-cols-3">
            <h2 class="text-xl opacity-70 mb-4">Links</h2>
            <h2 class="text-xl opacity-70 mb-4">Other</h2>
            <h2 class="text-xl opacity-70 mb-4">Legal</h2>
            <h2 class="text-xl opacity-70 mb-4">Home</h2>
            <h2 class="text-xl opacity-70 mb-4">Help</h2>
            <h2 class="text-xl opacity-70 mb-4">Terms</h2>
            <h2 class="text-xl opacity-70 mb-4">Battels</h2>
            <h2 class="text-xl opacity-70 mb-4">Support</h2>
            <h2 class="text-xl opacity-70 mb-4">Conditions</h2>
            <h2 class="text-xl opacity-70 mb-4">Rewards</h2>
            <h2 class="text-xl opacity-70 mb-4">Contact</h2>
            <h2 class="text-xl opacity-70 mb-4">Cookies</h2>
        </div>


        <div class="flex gap-8 mt-16 justify-end">
            <h1 class="text-xl opacity-70 mb-4">Payment options</h1>

            <div class="flex gap-8">
                <img src={visa} alt="visa" class="w-8 h-8" />
                <img src={Bitcoin} alt="bitcoin" class="w-8 h-8" />
                <img src={visa} alt="visa" class="w-8 h-8" />
                <img src={Bitcoin} alt="bitcoin" class="w-8 h-8" />
                <img src={visa} alt="visa" class="w-8 h-8" />
                <img src={visa} alt="visa" class="w-8 h-8" />
            </div>
        </div>
    </div>
</div>
