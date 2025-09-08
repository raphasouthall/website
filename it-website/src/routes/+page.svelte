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

<div id="home-body" class="flex flex-col">
	<div class="h-[10dvh]"></div>
	<div
		id="hero"
		class="flex min-h-[82dvh] h-[82dvh] md:h-[83dvh] w-full flex-col items-center justify-center gap-2 py-2 text-center md:flex-row"
	>
		<div
			id="hero-left"
			class="flex flex-col w-full gap-2 items-center justify-center text-center overflow-hidden p-2 font-light
			md:h-full md:w-1/2 md:px-10 md:pt-8 md:gap-0"
		>
			<div
				id="headline"
				class="flex w-full flex-col items-center justify-center gap-3 overflow-hidden p-2
				text-center text-hero-h1 font-light
				md:h-2/3
				"
			>
				<p class="">Technology</p>
				<div class="flex items-center justify-center w-full gap-4">
					<Sun />
					<p class="text-warning font-medium">Reliability</p>
				</div>
				<p>Growth</p>
			</div>
			<div class="flex flex-1 flex-col w-full items-center px-6 md:px-0 md:py-8 gap-6 text-hero-h2">
				<p class="text-base-content/70 text-hero-h3 md:text-justify">
					Custom IT solutions tailored to your needs, with genuine partnership and clear
					communication while we manage the technical complexity.
				</p>
				<div class="flex items-center justify-center gap-6 md:justify-start">
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
			class="hidden h-full flex-1 select-none items-center justify-center gap-4 overflow-hidden rounded-xl p-4 text-center md:flex"
		>
			<div class="bg-secondary flex size-full justify-center overflow-hidden rounded-xl pt-2">
				<Illustration />
			</div>
			<div class="flex h-full w-full flex-col gap-4 rounded-xl">
				<div class="bg-primary h-1/2 w-full rounded-xl"></div>
				<div class="bg-accent h-1/2 w-full rounded-xl"></div>
			</div>

			<!-- <Embed3D /> -->
		</div>
	</div>
	<div
		class="bg-primary text-primary-content flex h-[100dvh] flex-col items-center justify-center rounded-2xl p-2 text-center"
	>
		<p
			class="font-heading text-primary-content h-10 text-2xl transition-opacity duration-300 {isAtTop
				? 'animate-pulse opacity-100'
				: 'opacity-0'}"
		>
			scroll for more
		</p>
		<p class="flex flex-1 items-center justify-center text-8xl">Content for page 2</p>
	</div>
</div>
