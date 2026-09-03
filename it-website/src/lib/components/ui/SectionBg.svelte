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
		{ points: '481,-400 771,-400 49,750 -241,750', fill: 'g1', edge: [771, -400, 49, 750], speed: -0.6 },
		{ points: '771,-400 1336,-400 614,750 49,750', fill: 'g2', edge: [1336, -400, 614, 750], speed: 0.4 },
		{ points: '1336,-400 1491,-400 769,750 614,750', fill: 'g3', edge: [1491, -400, 769, 750], speed: -1.1 },
		{ points: '1491,-400 1811,-400 1089,750 769,750', fill: 'g4', edge: [1811, -400, 1089, 750], speed: 0.8 },
		{ points: '1811,-400 2011,-400 1289,750 1089,750', fill: 'g5', edge: [2011, -400, 1289, 750], speed: -0.3 }
	];
	const uid = Math.random().toString(36).slice(2, 8);
	// Phones: show the middle 700 units with extra vertical room so all bands stay in frame
	let portrait = $state(false);
	$effect(() => {
		const mq = window.matchMedia('(max-aspect-ratio: 3/4)');
		const set = () => (portrait = mq.matches);
		set();
		mq.addEventListener('change', set);
		return () => mq.removeEventListener('change', set);
	});
</script>

<!-- Inline vector background: five frosted bands GSAP can move independently -->
<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
	<svg
		class="absolute inset-0 w-full h-full" shape-rendering="geometricPrecision"
		viewBox={portrait ? '350 -350 700 1050' : '0 0 1400 350'}
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
