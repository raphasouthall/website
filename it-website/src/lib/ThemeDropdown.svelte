<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// Available DaisyUI themes
	const themes = [
		'light',
		'dark'
		// 'cupcake',
		// 'bumblebee',
		// 'emerald',
		// 'corporate',
		// 'synthwave',
		// 'retro',
		// 'cyberpunk',
		// 'valentine',
		// 'halloween',
		// 'garden',
		// 'forest',
		// 'aqua',
		// 'lofi',
		// 'pastel',
		// 'fantasy',
		// 'wireframe',
		// 'black',
		// 'luxury',
		// 'dracula',
		// 'cmyk',
		// 'autumn',
		// 'business',
		// 'acid',
		// 'lemonade',
		// 'night',
		// 'coffee',
		// 'winter',
		// 'dim',
		// 'nord',
		// 'sunset'
	];

	let currentTheme = 'light';

	onMount(() => {
		// Initialize theme-change
		themeChange(false);

		// Get current theme from localStorage or default to 'light'
		currentTheme = localStorage.getItem('theme') || 'light';

		// Set initial theme
		document.documentElement.setAttribute('data-theme', currentTheme);
	});

	function handleThemeChange(event) {
		currentTheme = event.target.value;
		// Set the data-theme attribute for theme-change to pick up
		document.documentElement.setAttribute('data-theme', currentTheme);
		localStorage.setItem('theme', currentTheme);
	}

	// Capitalize first letter for display
	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div class="form-control w-full">
	<div class="flex items-center gap-3">
		<select
			id="theme-select"
			class="select flex-1 rounded-2xl focus-within:outline-none focus-within:ring-0"
			bind:value={currentTheme}
			on:change={handleThemeChange}
		>
			{#each themes as theme}
				<option value={theme}>
					{capitalize(theme)}
				</option>
			{/each}
		</select>

		<!-- Theme color preview -->
		<div class="hidden flex-shrink-0 md:block">
			<div
				data-theme={currentTheme}
				class="bg-base-100 border-base-300 flex gap-1 rounded-lg border p-2"
				title="Theme colors preview"
			>
				<div class="bg-primary h-3 w-3 rounded"></div>
				<div class="bg-secondary h-3 w-3 rounded"></div>
				<div class="bg-accent h-3 w-3 rounded"></div>
				<div class="bg-neutral h-3 w-3 rounded"></div>
			</div>
		</div>
	</div>
</div>
