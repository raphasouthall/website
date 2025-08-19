<script lang="ts">
	import { onMount } from 'svelte';
	let isAtTop = true;
	let contentElement: HTMLElement;

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

<div id="home-body" class="">
	<div id="hero" class="flex h-[93svh] items-center justify-center text-center">
		<p class="text-7xl">One stop for all your IT needs</p>
		<p></p>
	</div>
	<div
		class="bg-primary text-primary-content flex h-screen flex-col items-center justify-center rounded-2xl p-2 text-center"
	>
		<p
			class="font-heading text-primary-content/60 h-10 animate-pulse text-2xl transition-opacity duration-300 {isAtTop
				? 'opacity-100'
				: 'opacity-0'}"
		>
			scroll for more
		</p>
		<p class="flex flex-1 items-center justify-center text-8xl">Content for page 2</p>
	</div>
</div>
