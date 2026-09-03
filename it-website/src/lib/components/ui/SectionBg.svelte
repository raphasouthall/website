<script lang="ts">
	interface Props {
		rotate?: number;
		scale?: number;
		opacity?: number;
		flip?: boolean;
	}
	let { rotate = 0, scale = 1.4, opacity = 0.8, flip = false }: Props = $props();
</script>

<!-- Hero image reused per section with its own rotation and zoom, faded top and bottom to the canvas -->
<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
	<div
		class="absolute inset-[-10%] bg-cover bg-center"
		style="background-image: url('/hero-bg.jpg'); opacity: {opacity}; transform: rotate({rotate}deg) scale({scale}) scaleX({flip ? -1 : 1});"
	></div>
	<div class="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
</div>
