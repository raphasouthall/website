<script lang="ts">
	interface Props {
		flipX?: boolean;
		flipY?: boolean;
		shiftX?: number;
		scale?: number;
		opacity?: number;
	}
	let { flipX = false, flipY = false, shiftX = 0, scale = 1, opacity = 0.8 }: Props = $props();
</script>

<!-- Image layer moves (parallax); the fade stays pinned to the section edges -->
<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
	<div
		class="absolute -inset-y-[14%] inset-x-0 bg-cover bg-center"
		data-bg
		style="background-image: url('/hero-bg.svg'); opacity: {opacity}; transform: translateX({shiftX}%) scaleX({flipX ? -scale : scale}) scaleY({flipY ? -scale : scale});"
	></div>
	<div class="absolute inset-0 bg-gradient-to-b from-black from-0% via-transparent via-50% to-black to-100%"></div>
	<div class="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black to-transparent"></div>
	<div class="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black to-transparent"></div>
</div>
