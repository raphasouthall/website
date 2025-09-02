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

<div id="home-body" class="flex flex-col md:gap-2">
	<div class="h-24"></div>
	<div
		id="hero"
		class="flex h-[77dvh] w-full flex-col items-center justify-center gap-2 text-center text-6xl md:h-[80dvh] md:flex-row"
	>
		<div
			id="hero-left"
			class="flex w-full flex-col items-center justify-center gap-6 overflow-hidden p-2 text-center text-6xl font-light md:h-full md:w-1/2 md:items-start md:justify-between md:px-20 md:text-8xl"
		>
			<div class="flex h-2/3 flex-col items-center justify-center md:items-start md:text-start">
				<p class="">Support</p>
				<div class="flex items-center gap-4">
					<Sun />
					<p class="text-warning font-medium">Meets</p>
				</div>
				<p>Empathy</p>
			</div>
			<div class="flex flex-1 flex-col gap-2">
				<p class="text-base-content/70 text-xl md:text-start md:text-3xl">
					IT support that actually makes sense
				</p>
				<div class="flex items-center justify-center gap-6 md:justify-start">
					<button class="btn btn-accent md:btn-xl">Get Started</button>
					<div class="flex flex-col p-2 text-start">
						<p class="text-base md:text-2xl">100+</p>
						<p class="text-xs md:text-xl">Happy Customers</p>
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
