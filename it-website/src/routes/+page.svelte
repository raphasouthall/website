<script lang="ts">
	import { onMount } from 'svelte';
	let isAtTop = true;
	let contentElement: HTMLElement;
	import Embed3D from '$lib/3d-embed.svelte';

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
	<div class="h-22"></div>
	<div
		id="hero"
		class="flex h-[82dvh] flex-col items-center justify-center gap-2 p-2 text-center text-6xl md:h-[83dvh] md:flex-row"
	>
		<div
			class="flex flex-col items-center justify-center gap-2 p-2 text-center text-3xl md:w-1/2 md:text-6xl"
		>
			<p>Your Technology Partner</p>
			<p class="text-xl md:text-4xl">Not Just Another IT Company</p>
		</div>
		<div class="rounded-box md: flex h-full flex-1 items-center justify-center text-center">
			<Embed3D />
		</div>
	</div>
	<div
		class="bg-primary text-primary-content flex h-screen flex-col items-center justify-center rounded-2xl p-2 text-center"
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
