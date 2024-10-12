<script>
	import ReferFriends from '../components/ReferFriends.svelte';
	import HeaderCard from '../components/HeaderCard.svelte';
	import BoxCard from '../components/BoxCard.svelte';
	import RecentCard from '../components/RecentCard.svelte';

	import GiftIcon from '$lib/images/dff76a6fc5f6da7f1c98bc081c2f2d31.png';
    import WinningIcon from '$lib/images/76eb1864b71a63842c01ee147d747d6c.png';
    import MedalIcon from '$lib/images/8aee34b200c73bf227b85c6876d61a1e.png';

	import SearchIcon from '$lib/images/search.svg';
	import RigthIcon from '$lib/images/chevron-right.svg';
	import LeftIcon from '$lib/images/chevron-left.svg';
	import UserAvatar from '$lib/images/c0dca83c9d99c77d98255da140184087.jpg';
  import Footer from '../components/Footer.svelte';

	let headerCards = [
		{ icon: GiftIcon, percentage: '15', title: 'From Pure Profit', description: `15% from platform's house edge will be paid your Referrals winning bet.` },
		{ icon: WinningIcon, percentage: '2,5', title: 'From all Winnings', description: `2,5% from all winnings will be paid to your Referrals winning bet.` },
		{ icon: MedalIcon, percentage: '1,5', title: 'From deposit', description: `1,5% from depositing on our platform will be paid back in your account.` },
	];
	let filterBoxesMeneItems = [
		{ label: 'All', value: 'all' },
		{ label: 'New', value: 'new' },
		{ label: 'Featured', value: 'featured' },
		{ label: 'Gaming', value: 'gaming' },
		{ label: 'Electronics', value: 'electronics' },
		{ label: 'Jewelery', value: 'jewelery' },
		{ label: 'Mix', value: 'mix' },
		{ label: 'Other', value: 'other' },
	];
	let boxes = [
		{ price: '59.99', new: true, title: 'Enigma Chest', subtitle: 'Mystery Marvels' },
		{ price: '120.00', new: true, title: 'Treasure Trove', subtitle: 'Eerie Enigmas' },
		{ price: '89.99', new:  false, title: 'Crypto Crate', subtitle: 'Eerie Enigmas' },
		{ price: '99.99', new: false, title: 'Concealed Curiosities', subtitle: 'Mistery Marvels' },
		{ price: '87.56', new: false, title: 'Mystic Vault', subtitle: 'Esoteric Earnings' },
		{ price: '42.99', new: false, title: 'Conundrum Cache', subtitle: 'Esoteric Earnings' },
	];
	let recentDrops = [
		{ title: 'Enigma Chest', subtitle: 'Mystery Marvels', user: { avatar: UserAvatar, id: 'kevin_gather8391' } },
		{ title: 'Treasure Trove', subtitle: 'Eerie Enigmas', user: { avatar: UserAvatar, id: 'kevin_gather8391' } },
		{ title: 'Enigma Chest', subtitle: 'Mystery Marvels', user: { avatar: UserAvatar, id: 'kevin_gather8391' } },
		{ title: 'Concealed Curiosities', subtitle: 'Mystery Marvels', user: { avatar: UserAvatar, id: 'kevin_gather8391' } }, 
		{ title: 'Mistic Vault', subtitle: 'Esoteric Earnings', user: { avatar: UserAvatar, id: 'kevin_gather8391' } }, 
	]
	let currentSelectedFilterBoxesMenu = 'all';
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Dashboard - Frontend Test" />
</svelte:head>

<section class="p-16">
	<div class="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-16">
		<ReferFriends />

		{#each headerCards as card}
			<HeaderCard icon={card.icon} percentage={card.percentage} title={card.title} description={card.description} />
		{/each}
	</div>

	<div class="boxes">
		<div class="text-white py-8">
			<h1 class="text-2xl font-semibold mb-5">All Boxes</h1>
	
			<div class="flex flex-col lg:flex-row lg:gap-2 gap-6 justify-between lg:items-center items-stretch">
				<ul class="flex gap-4">
					{#each filterBoxesMeneItems as item}
						<li class={`px-5 py-2 rounded-xl font-semibold ${item.value === currentSelectedFilterBoxesMenu ? 'bg-white bg-opacity-20' : 'opacity-70'}`}>{item.label}</li>
					{/each}
				</ul>
	
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2 p-3 bg-transparent border border-slate-700 rounded-lg">
						<img src={SearchIcon} alt="search-icon" />
						<input class="bg-transparent outline-none border-none" placeholder="Search" />
					</div>
	
					<div class="self-stretch">
						<button class="px-5 py-2 bg-opacity-20 rounded-xl bg-white font-semibold h-full">
							<img src={RigthIcon} alt="right" />
						</button>
						<button class="px-5 py-2 bg-opacity-20 rounded-xl bg-white font-semibold h-full">
							<img src={LeftIcon} alt="left" />
						</button>
					</div>
				</div>
			</div>
		</div>
	
	
		<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-8">
			{#each boxes as box}
				<BoxCard price={box.price} newItem={box.new} title={box.title} subtitle={box.subtitle} />
			{/each}
		</div>
	</div>

	<div class="recent-drops">
		<div class="text-white py-8">
			<h1 class="text-2xl font-semibold mb-5">Recent drops</h1>
			
			<div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
				{#each recentDrops as recenDrop}
					<RecentCard title={recenDrop.title} subtitle={recenDrop.subtitle} user={recenDrop.user} />
				{/each}
			</div>
		</div>
	</div>
</section>

<Footer />
