<script lang="ts">
	import { onMount } from 'svelte';
	let isAtTop = true;
	let contentElement: HTMLElement;
	import Embed3D from '$lib/3d-embed.svelte';
	import Sun from '$lib/Sun.svelte';
	import Logo from '$lib/Logo.svelte';
	import Illustration from '$lib/Illustration.svelte';
	import Illustration2 from '$lib/Illustration2.svelte';
	import Illustration3 from '$lib/Illustration3.svelte';

	onMount(() => {
		// Get the scrollable content element from the layout
		const contentDiv = document.getElementById('content');
		if (contentDiv) {
			contentElement = contentDiv;
			const handleScroll = () => {
				isAtTop = contentElement.scrollTop === 0;
			};
			contentElement.addEventListener('scroll', handleScroll);
			// Cleanup function
			return () => {
				contentElement.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<div id="home-body" class="flex flex-col select-none">
	<!-- Nav spacing remains the same -->
	<div id="nav-spacing" class="h-[8dvh] lg:h-[6dvh]"></div>

	<!-- UPDATED HERO SECTION -->
	<div
		id="hero"
		class="flex h-[84dvh] lg:h-[88dvh] w-full flex-col items-center justify-center gap-2 py-2 text-center lg:flex-row min-h-0 overflow-hidden"
	>
		<div
			class="grid grid-cols-5 grid-rows-10 gap-2 w-full h-[84dvh] lg:h-[88dvh] min-h-0 overflow-hidden p-4"
		>
			<!-- Headline cell -->
			<div
				class="col-span-3 row-span-2 col-start-1 rounded-2xl overflow-hidden pl-4 pt-2 @container"
			>
				<div
					id="headline"
					class="text-start text-[15cqmin] md:text-[12cqmin] lg:text-[8cqmin] leading-14 flex flex-col justify-center h-full"
				>
					<p class="font-light">Technology</p>
					<div class="flex items-center gap-1">
						<p class="text-accent font-medium">made human</p>
						<div class="pt-6"><Sun /></div>
					</div>
				</div>
			</div>

			<!-- Subheadline cell -->
			<div
				class="col-span-3 row-span-1 row-start-3 col-start-1 rounded-4xl overflow-hidden pl-4 @container"
			>
				<p class="text-[6.5cqmin] text-start leading-7 tracking-wider">
					Solutions that are clear, caring and accessible to everyone
				</p>
			</div>

			<div
				class="col-span-2 row-span-6 row-start-4 col-start-1 rounded-4xl overflow-hidden relative"
			>
				<div class="absolute bottom-0 left-0 right-0 h-[100%] w-full bg-primary rounded-4xl"></div>
				<Illustration2 />
			</div>

			<!-- Button cell -->
			<div
				class="col-span-2 row-span-1 row-start-10 col-start-1 rounded-4xl overflow-hidden @container"
			>
				<button class="btn btn-accent rounded-full size-full text-[8cqmin]">Get in touch</button>
			</div>

			<div
				class="col-span-2 row-span-6 col-start-4 row-start-1 rounded-4xl overflow-hidden relative"
			>
				<div class="absolute bottom-0 left-0 right-0 h-[100%] w-full bg-primary rounded-4xl"></div>
				<Illustration />
			</div>

			<div class="col-span-3 row-span-4 row-start-7 rounded-4xl overflow-hidden relative">
				<div class="absolute bottom-0 left-0 right-0 h-[95%] w-full bg-accent rounded-4xl"></div>
				<Illustration3 />
			</div>

			<!-- Small button cell -->
			<div
				class="col-span-1 row-span-3 row-start-4 rounded-4xl bg-base-300 overflow-hidden @container p-4"
			>
				<Logo />
			</div>
		</div>
	</div>

	<!-- UPDATED SCROLL INDICATOR SECTION -->
	<div
		class="bg-primary text-primary-content flex h-[8dvh] lg:h-[6dvh] items-center justify-center rounded-t-2xl text-center"
	>
		<p
			class="font-heading pb-2 text-primary-content text-[3cqh] transition-opacity duration-300 {isAtTop
				? 'animate-pulse opacity-100'
				: 'opacity-0'}"
		>
			scroll for more
		</p>
	</div>

	<!-- Main content section -->
	<div
		class="bg-primary text-primary-content flex h-[100dvh] flex-col items-center justify-center rounded-b-2xl p-2 text-center"
	>
		<p class="flex flex-1 items-center justify-center text-8xl">Content for page 2</p>
	</div>
</div>
