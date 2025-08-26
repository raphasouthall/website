<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let showText = true;
	export let textVariant: 'primary' | 'base' = 'base';

	const sizeClasses = {
		sm: 'size-8',
		md: 'size-10',
		lg: 'size-12'
	};

	const textSizeClasses = {
		sm: 'text-lg',
		md: 'text-xl',
		lg: 'text-2xl'
	};

	const textColorClasses = {
		primary: 'text-primary',
		base: ''
	};
</script>

<a href="/" class="flex select-none items-center">
	<svg
		class="fill-base-content mb-1 {sizeClasses[size]}"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="100 100 500 500"
	>
		<g transform="matrix(0.905014, 0, 0, 0.905014, 33.245716, 33.10619)">
			<rect
				style="transform-box: fill-box; transform-origin: 50% 50%;"
				x="175.465"
				y="21.933"
				width="87.732"
				height="394.796"
				rx="50"
				ry="50"
				transform="matrix(0.866025, 0.5, -0.5, 0.866025, 130.668881, 130.82261)"
				class="fill-primary"
			></rect>
			<rect
				style="stroke-width: 1; transform-box: fill-box; transform-origin: 50% 50%;"
				x="285.13"
				y="21.933"
				width="87.732"
				height="394.796"
				rx="50"
				ry="50"
				transform="matrix(0.866025, 0.5, -0.5, 0.866025, 147.512525, 130.822351)"
				class="fill-secondary"
			></rect>
			<rect
				style="stroke-width: 1; transform-box: fill-box; transform-origin: 50% 50%;"
				x="65.799"
				y="21.933"
				width="87.732"
				height="394.796"
				rx="50"
				ry="50"
				transform="matrix(0.866025, 0.5, -0.5, 0.866025, 113.825498, 130.822351)"
				class="fill-accent"
			></rect>
		</g>
		<g
			transform="matrix(0.905014, 0, 0, 0.905014, 1.211141, 37.746395)"
			style="transform-origin: 167.155px 210.301px;"
		>
			<path
				d="M 167.161 272.801 C 160.257 272.801 154.661 267.205 154.661 260.301 L 154.661 240.471 L 140.639 254.493 C 135.757 259.375 127.843 259.375 122.961 254.493 C 118.079 249.612 118.079 241.698 122.961 236.816 L 136.977 222.799 L 117.156 222.799 C 110.251 222.799 104.655 217.203 104.655 210.299 C 104.655 203.396 110.251 197.799 117.155 197.8 L 136.978 197.8 L 122.961 183.783 C 118.079 178.901 118.079 170.987 122.961 166.105 C 127.843 161.223 135.757 161.223 140.639 166.105 L 154.661 180.128 L 154.661 160.301 C 154.661 153.397 160.257 147.801 167.161 147.801 C 174.065 147.801 179.661 153.397 179.661 160.301 L 179.661 180.116 L 193.672 166.105 C 198.554 161.223 206.468 161.223 211.349 166.105 C 216.231 170.987 216.231 178.901 211.349 183.783 L 197.332 197.8 L 217.155 197.8 C 224.059 197.799 229.656 203.396 229.655 210.299 C 229.656 217.203 224.059 222.799 217.155 222.799 L 197.333 222.799 L 211.349 236.816 C 216.231 241.698 216.231 249.612 211.349 254.493 C 206.468 259.375 198.554 259.375 193.672 254.493 L 179.661 240.483 L 179.661 260.301 C 179.661 267.205 174.065 272.801 167.161 272.801 Z"
				style="stroke-width: 1;"
				class="fill-accent"
			></path>
		</g>
	</svg>
	{#if showText}
		<div class="nunito-bold {textSizeClasses[size]} {textColorClasses[textVariant]}">
			<slot>SOLID</slot>
		</div>
	{/if}
</a>
