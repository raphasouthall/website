<script lang="ts">
	import { onMount } from 'svelte';
	let isAtTop = true;
	let contentElement: HTMLElement;
	import Embed3D from '$lib/3d-embed.svelte';
	import Sun from '$lib/Sun.svelte';
	import Illustration from '$lib/Illustration.svelte';

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
			id="hero-left"
			class="flex flex-col w-full gap-6 items-center justify-center text-center font-light
        lg:h-full lg:w-1/2 lg:px-[2cqw] lg:pt-8 lg:gap-4 min-h-0 overflow-auto"
		>
			<div
				id="headline"
				class="flex w-full flex-col items-center justify-center lg:items-start lg:justify-start gap-3
          text-center text-hero-h1 flex-shrink-0"
			>
				<p class="">Technology.</p>
				<div class="flex items-center justify-center lg:justify-start w-full">
					<p class="text-accent font-medium">Reliability</p>
					<div class="pt-8"><Sun /></div>
				</div>
				<p>Growth.</p>
			</div>

			<div
				class="flex flex-1 flex-col w-full items-center lg:items-start justify-around px-6 lg:px-0 gap-6 text-hero-h2 min-h-0"
			>
				<p class="text-base-content/70 text-hero-h3 lg:text-justify flex-shrink">
					IT solutions tailored to your needs, with genuine partnership and clear communication
					while we manage the technical complexity.
				</p>
				<div class="flex items-center justify-center gap-6 lg:justify-start flex-shrink-0">
					<button class="btn-cta">Get Started</button>
					<div class="flex w-full flex-col p-2 text-start">
						<p class="">100+</p>
						<p class="text-hero-h4">Happy Customers</p>
					</div>
				</div>
			</div>
		</div>

		<div
			id="hero-right"
			class="hidden h-full flex-1 select-none items-center justify-center gap-4 overflow-hidden rounded-xl p-4 text-center lg:flex min-h-0"
		>
			<div class="bg-secondary flex size-full justify-center overflow-hidden rounded-xl pt-2">
				<Illustration />
			</div>
			<div class="flex h-full w-full flex-col gap-4 rounded-xl">
				<div class="bg-primary h-1/2 w-full rounded-xl overflow-hidden">
					<!-- <Embed3D /> -->
				</div>
				<div class="bg-accent h-1/2 w-full rounded-xl"></div>
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
