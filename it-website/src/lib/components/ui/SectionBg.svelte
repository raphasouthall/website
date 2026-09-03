<script lang="ts">
	interface Props {
		flipX?: boolean;
		flipY?: boolean;
		shiftX?: number;
		scale?: number;
		opacity?: number;
	}
	let { flipX = false, flipY = false, shiftX = 0, scale = 1.05, opacity = 0.8 }: Props = $props();
</script>

<!-- Hero image reused per section: mirrored on X and/or Y and shifted sideways, no rotation so edges never show -->
<div class="absolute inset-[-15%] overflow-hidden pointer-events-none" aria-hidden="true" data-bg>
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/hero-bg.jpg'); opacity: {opacity}; transform: translateX({shiftX}%) scaleX({flipX ? -scale : scale}) scaleY({flipY ? -scale : scale});"
	></div>
	<div class="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
</div>
