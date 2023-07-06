<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
	let navs = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Contact', link: '/contact' }
	];
	let isCheck = false;
</script>

<div class="navbar bg-base-100 md:border-b border-accent md:relative">
	<div class="navbar-start ">
		<div class="dropdown ">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border"
			>
				{#each navs as nav}
					<li><a href={nav.link}>{nav.name}</a></li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl font-bold border-2 border-primary" href="/"
			>Team Up</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navs as nav}
				<li><a href={nav.link} class="text-[17px] mx-2">{nav.name}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<button data-set-theme={isCheck ? 'light' : 'dark'}>
			<label class="cursor-pointer label">
				<input type="checkbox" class="toggle toggle-primary bg-primary" bind:checked={isCheck} />
			</label>
		</button>
	</div>
</div>
