<script lang="ts">
	interface Props {
		flipX?: boolean;
		flipY?: boolean;
		shiftX?: number;
		scale?: number;
		opacity?: number;
	}
	let { flipX = false, flipY = false, shiftX = 0, scale = 1, opacity = 0.8 }: Props = $props();

	// Each band moves at its own rate; see scroll.ts. Positive = moves with scroll, negative = against.
	const bands = [
		{ points: '230,-60 520,-60 300,410 10,410', fill: 'g1', edge: [520, -60, 300, 410], speed: -0.6 },
		{ points: '520,-60 1085,-60 800,410 300,410', fill: 'g2', edge: [1085, -60, 800, 410], speed: 0.4 },
		{ points: '1085,-60 1240,-60 930,410 800,410', fill: 'g3', edge: [1240, -60, 930, 410], speed: -1.1 },
		{ points: '1240,-60 1400,-60 1400,200 1080,410 930,410', fill: 'g4', edge: [1400, 200, 1080, 410], speed: 0.8 },
		{ points: '1400,200 1400,410 1080,410', fill: 'g5', edge: null, speed: -0.3 }
	];
	const uid = Math.random().toString(36).slice(2, 8);
</script>

<!-- Inline vector background: five frosted bands GSAP can move independently -->
<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
	<svg
		class="absolute inset-0 w-full h-full"
		viewBox="0 0 1400 350"
		preserveAspectRatio="xMidYMid slice" overflow="visible"
		style="opacity: {opacity}; transform: translateX({shiftX}%) scaleX({flipX ? -scale : scale}) scaleY({flipY ? -scale : scale});"
	>
		<defs>
			<linearGradient id="{uid}-g1" x1="0.9" y1="0" x2="0.2" y2="1">
				<stop offset="0" stop-color="#0a84e6" /><stop offset="0.3" stop-color="#0a45b0" /><stop offset="0.7" stop-color="#03102e" /><stop offset="1" stop-color="#000" />
			</linearGradient>
			<linearGradient id="{uid}-g2" x1="0.85" y1="0" x2="0.25" y2="1">
				<stop offset="0" stop-color="#0d5fd8" /><stop offset="0.35" stop-color="#0a2f96" /><stop offset="0.75" stop-color="#02071e" /><stop offset="1" stop-color="#000" />
			</linearGradient>
			<linearGradient id="{uid}-g3" x1="0.9" y1="0" x2="0.2" y2="1">
				<stop offset="0" stop-color="#0a3aa8" /><stop offset="0.5" stop-color="#051750" /><stop offset="1" stop-color="#000" />
			</linearGradient>
			<linearGradient id="{uid}-g4" x1="1" y1="0" x2="0.2" y2="1">
				<stop offset="0" stop-color="#1450d8" /><stop offset="0.45" stop-color="#0a2a90" /><stop offset="1" stop-color="#000" />
			</linearGradient>
			<linearGradient id="{uid}-g5" x1="1" y1="0.4" x2="0.3" y2="1">
				<stop offset="0" stop-color="#0d3ea8" /><stop offset="0.6" stop-color="#040c2c" /><stop offset="1" stop-color="#000" />
			</linearGradient>
			<linearGradient id="{uid}-edge" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="#fff" stop-opacity="0.36" /><stop offset="0.5" stop-color="#fff" stop-opacity="0" />
			</linearGradient>
		</defs>


		{#each bands as b}
			<g data-band data-speed={b.speed} style="will-change: transform">
				<polygon points={b.points} fill="url(#{uid}-{b.fill})" opacity="0.85" />
				{#if b.edge}
					<line x1={b.edge[0]} y1={b.edge[1]} x2={b.edge[2]} y2={b.edge[3]} stroke="url(#{uid}-edge)" stroke-width="1.5" />
				{/if}
			</g>
		{/each}
	</svg>
	<div class="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black via-black/70 to-transparent"></div>
	<div class="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-black/70 to-transparent"></div>
</div>
