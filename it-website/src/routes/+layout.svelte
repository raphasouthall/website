<script lang="ts">
	import '../app.css';
	import { IconMenu3, IconMinus, IconCircleCaretRight } from '@tabler/icons-svelte';
	import ThemeDropdown from '../lib/ThemeDropdown.svelte';
	import Logo from '$lib/Logo.svelte';

	let sidebarOpen = false;
</script>

<div class="font-body text-base-content bg-base-300 relative h-dvh">
	<!-- Fixed Nav -->
	<div
		id="nav"
		class="bg-base-100/70 fixed left-3 right-3 top-3 z-50 flex h-20 items-center rounded-xl p-4 backdrop-blur-[2px] md:justify-start md:gap-2"
	>
		<div id="mobile" class="flex w-full items-center justify-between gap-2 md:hidden">
			<Logo />
			<ThemeDropdown />
			<button
				class="btn btn-sm btn-primary hover:drop-shadow-white/50 drop-shadow"
				on:click={() => (sidebarOpen = !sidebarOpen)}
			>
				{#if sidebarOpen}
					<IconMinus size="16" />
				{:else}
					<IconMenu3 size="16" />
				{/if}
			</button>
		</div>
		<div id="desktop" class="hidden w-full items-center justify-between md:flex 2xl:text-[18rem]">
			<Logo />
			<div class="flex w-1/2 justify-around gap-2">
				<ThemeDropdown />
				<button class="btn-responsive-ghost">ABOUT</button>
				<button class="btn-responsive-ghost">SOLUTIONS</button>
				<button class="btn-responsive-ghost">CASE STUDIES</button>
				<button class="btn-responsive-ghost">INSIGHTS</button>
			</div>
			<button id="CTA" class="btn-responsive-primary">MAKE AN ENQUIRY</button>
		</div>
	</div>

	<div id="app" class="relative flex h-full min-h-0 overflow-hidden">
		<!-- Invisible backdrop -->
		{#if sidebarOpen}
			<div
				class="absolute inset-0 z-10 md:hidden"
				on:click={() => (sidebarOpen = false)}
				on:keydown={(e) => e.key === 'Escape' && sidebarOpen == false}
				role="button"
				tabindex="0"
				aria-label="Close sidebar"
			></div>
		{/if}

		<!-- Sidebar -->
		<div
			id="sidebar"
			class="bg-base-100/70 fixed bottom-2 left-4 top-24 z-20 rounded-2xl p-2 backdrop-blur-[2px] transition-all duration-150 {sidebarOpen
				? 'w-1/2 opacity-100 md:w-1/5'
				: 'w-0 opacity-0'}"
		>
			<div id="sidebar-inner" class="flex h-full flex-col gap-2 overflow-y-auto p-2">
				<button class="btn btn-secondary btn-ghost flex items-center justify-between border-0">
					<p>ABOUT</p>
					<IconCircleCaretRight />
				</button>
				<button class="btn btn-secondary btn-ghost border-0">SOLUTIONS</button>
				<button class="btn btn-secondary btn-ghost border-0">CASE STUDIES</button>
				<button class="btn btn-secondary btn-ghost border-0">INSIGHTS</button>
			</div>
		</div>

		<div id="content" class="mx-1 my-1 min-h-0 flex-1 overflow-auto rounded-2xl">
			<slot />
		</div>
	</div>
</div>
