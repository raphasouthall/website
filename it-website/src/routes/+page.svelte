<script lang="ts">
	import { onMount } from 'svelte';
	let isAtTop = true;
	let contentElement: HTMLElement;
	import Embed3D from '$lib/3d-embed.svelte';
	import Sun from '$lib/Sun.svelte';

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

<div id="home-body" class="flex flex-col md:gap-2">
	<div class="h-24"></div>
	<div
		id="hero"
		class="flex h-[77dvh] flex-col items-center justify-center gap-2 text-center text-6xl md:h-[81dvh] md:flex-row"
	>
		<div
			class="flex flex-col items-center justify-center gap-6 px-2 text-center text-6xl font-light md:mb-20 md:h-full md:w-1/2 md:items-start md:pl-16 md:text-8xl"
		>
			<div class="flex flex-col">
				<p>Empathy</p>
				<div class="flex items-center gap-4">
					<Sun />
					<p class="text-warning font-medium">Meets</p>
				</div>
				<p>Expertise</p>
			</div>
			<p class="text-base-content/70 text-xl md:text-start md:text-3xl">
				The technology partner who speaks your language
			</p>
			<div class="flex items-center gap-6 md:justify-start">
				<button class="btn btn-accent md:btn-xl">Get Started</button>
				<div class="flex flex-col p-2 text-start">
					<p class="text-base md:text-2xl">100+</p>
					<p class="text-xs md:text-xl">Happy Customers</p>
				</div>
			</div>
		</div>

		<div
			class="bg-secondary mb-2 hidden h-full flex-1 select-none items-center justify-center rounded-xl p-4 text-center md:flex"
		>
			Placeholder for illustration
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
