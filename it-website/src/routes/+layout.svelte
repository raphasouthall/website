<script lang="ts">
	import '../app.css';
	// import Logo from '../lib/LOGO.svg';
	import { IconMenu3, IconMinus, IconCircleCaretRight } from '@tabler/icons-svelte';
	import ThemeDropdown from '../lib//ThemeDropdown.svelte';
	let sidebarOpen = false;
</script>

<div class="font-body text-base-content bg-base-300 relative h-dvh">
	<!-- Fixed Nav -->
	<div
		id="nav"
		class="bg-base-100/70 fixed left-3 right-3 top-3 z-50 flex h-20 items-center rounded-xl p-4 backdrop-blur-[2px] md:justify-start md:gap-2"
	>
		<div id="mobile" class="flex w-full items-center justify-between md:hidden">
			<a href="/" id="logo" class="flex select-none items-center">
				<!-- <img src={Logo} alt="icon" class="fill-base-content mb-1 size-8 md:size-12" />
                  -->
				<svg
					class="fill-base-content mb-1 size-10"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="100 100 500 500"
				>
					<g transform="matrix(0.905014, 0, 0, 0.905014, 33.245716, 33.10619)">
						<rect
							style="transform-box: fill-box; transform-origin: 50% 50%;"
							x="175.465"
							y="21.933"
							width="87.732"
							height="394.796"
							rx="50"
							ry="50"
							transform="matrix(0.866025, 0.5, -0.5, 0.866025, 130.668881, 130.82261)"
							class="fill-accent"
						></rect>
						<rect
							style="stroke-width: 1; transform-box: fill-box; transform-origin: 50% 50%;"
							x="285.13"
							y="21.933"
							width="87.732"
							height="394.796"
							rx="50"
							ry="50"
							transform="matrix(0.866025, 0.5, -0.5, 0.866025, 147.512525, 130.822351)"
							class="fill-neutral"
						></rect>
						<rect
							style="stroke-width: 1; transform-box: fill-box; transform-origin: 50% 50%;"
							x="65.799"
							y="21.933"
							width="87.732"
							height="394.796"
							rx="50"
							ry="50"
							transform="matrix(0.866025, 0.5, -0.5, 0.866025, 113.825498, 130.822351)"
							class="fill-secondary"
						></rect>
					</g>
					<g
						transform="matrix(0.905014, 0, 0, 0.905014, 1.211141, 37.746395)"
						style="transform-origin: 167.155px 210.301px;"
					>
						<path
							d="M 167.161 272.801 C 160.257 272.801 154.661 267.205 154.661 260.301 L 154.661 240.471 L 140.639 254.493 C 135.757 259.375 127.843 259.375 122.961 254.493 C 118.079 249.612 118.079 241.698 122.961 236.816 L 136.977 222.799 L 117.156 222.799 C 110.251 222.799 104.655 217.203 104.655 210.299 C 104.655 203.396 110.251 197.799 117.155 197.8 L 136.978 197.8 L 122.961 183.783 C 118.079 178.901 118.079 170.987 122.961 166.105 C 127.843 161.223 135.757 161.223 140.639 166.105 L 154.661 180.128 L 154.661 160.301 C 154.661 153.397 160.257 147.801 167.161 147.801 C 174.065 147.801 179.661 153.397 179.661 160.301 L 179.661 180.116 L 193.672 166.105 C 198.554 161.223 206.468 161.223 211.349 166.105 C 216.231 170.987 216.231 178.901 211.349 183.783 L 197.332 197.8 L 217.155 197.8 C 224.059 197.799 229.656 203.396 229.655 210.299 C 229.656 217.203 224.059 222.799 217.155 222.799 L 197.333 222.799 L 211.349 236.816 C 216.231 241.698 216.231 249.612 211.349 254.493 C 206.468 259.375 198.554 259.375 193.672 254.493 L 179.661 240.483 L 179.661 260.301 C 179.661 267.205 174.065 272.801 167.161 272.801 Z"
							style="stroke-width: 1;"
							class="fill-primary"
						></path>
					</g>
				</svg>
				<div id="logo-text" class="nunito-bold text-xl">SOLID</div>
			</a>
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
		<div id="desktop" class="hidden w-full items-center justify-between md:flex">
			<a href="/" id="logo" class="flex select-none items-center">
				<!-- <img src={Logo} alt="icon" class="mb-1 size-8 md:size-12" /> -->
				<svg
					class="fill-base-content mb-1 size-10"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="100 100 500 500"
				>
					<g transform="matrix(0.905014, 0, 0, 0.905014, 33.245716, 33.10619)">
						<rect
							style="transform-box: fill-box; transform-origin: 50% 50%;"
							x="175.465"
							y="21.933"
							width="87.732"
							height="394.796"
							rx="50"
							ry="50"
							transform="matrix(0.866025, 0.5, -0.5, 0.866025, 130.668881, 130.82261)"
							class="fill-accent"
						></rect>
						<rect
							style="stroke-width: 1; transform-box: fill-box; transform-origin: 50% 50%;"
							x="285.13"
							y="21.933"
							width="87.732"
							height="394.796"
							rx="50"
							ry="50"
							transform="matrix(0.866025, 0.5, -0.5, 0.866025, 147.512525, 130.822351)"
							class="fill-neutral"
						></rect>
						<rect
							style="stroke-width: 1; transform-box: fill-box; transform-origin: 50% 50%;"
							x="65.799"
							y="21.933"
							width="87.732"
							height="394.796"
							rx="50"
							ry="50"
							transform="matrix(0.866025, 0.5, -0.5, 0.866025, 113.825498, 130.822351)"
							class="fill-secondary"
						></rect>
					</g>
					<g
						transform="matrix(0.905014, 0, 0, 0.905014, 1.211141, 37.746395)"
						style="transform-origin: 167.155px 210.301px;"
					>
						<path
							d="M 167.161 272.801 C 160.257 272.801 154.661 267.205 154.661 260.301 L 154.661 240.471 L 140.639 254.493 C 135.757 259.375 127.843 259.375 122.961 254.493 C 118.079 249.612 118.079 241.698 122.961 236.816 L 136.977 222.799 L 117.156 222.799 C 110.251 222.799 104.655 217.203 104.655 210.299 C 104.655 203.396 110.251 197.799 117.155 197.8 L 136.978 197.8 L 122.961 183.783 C 118.079 178.901 118.079 170.987 122.961 166.105 C 127.843 161.223 135.757 161.223 140.639 166.105 L 154.661 180.128 L 154.661 160.301 C 154.661 153.397 160.257 147.801 167.161 147.801 C 174.065 147.801 179.661 153.397 179.661 160.301 L 179.661 180.116 L 193.672 166.105 C 198.554 161.223 206.468 161.223 211.349 166.105 C 216.231 170.987 216.231 178.901 211.349 183.783 L 197.332 197.8 L 217.155 197.8 C 224.059 197.799 229.656 203.396 229.655 210.299 C 229.656 217.203 224.059 222.799 217.155 222.799 L 197.333 222.799 L 211.349 236.816 C 216.231 241.698 216.231 249.612 211.349 254.493 C 206.468 259.375 198.554 259.375 193.672 254.493 L 179.661 240.483 L 179.661 260.301 C 179.661 267.205 174.065 272.801 167.161 272.801 Z"
							style="stroke-width: 1;"
							class="fill-primary"
						></path>
					</g>
				</svg>
				<div id="logo-text" class="nunito-bold text-primary text-xl">SOLID</div>
			</a>
			<div class="flex w-1/2 justify-around gap-2">
				<ThemeDropdown />
				<button class="btn btn-secondary btn-ghost border-0">ABOUT</button>
				<button class="btn btn-secondary btn-ghost border-0">SOLUTIONS</button>
				<button class="btn btn-secondary btn-ghost border-0">CASE STUDIES</button>
				<button class="btn btn-secondary btn-ghost border-0">INSIGHTS</button>
			</div>
			<button id="CTA" class="btn btn-primary">MAKE AN ENQUIRY</button>
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
				<ThemeDropdown />
			</div>
		</div>

		<div id="content" class="mx-1 my-1 min-h-0 flex-1 overflow-auto rounded-2xl">
			<slot />
		</div>
	</div>
</div>
