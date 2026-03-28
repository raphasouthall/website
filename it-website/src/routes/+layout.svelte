<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource/jetbrains-mono/400.css';
	import { onMount } from 'svelte';
	import { navItems } from '$lib/data/navItems';
	import Logo from '$lib/Logo.svelte';
	import {
		IconMenu2,
		IconX,
		IconBrandLinkedin,
		IconBrandGithub,
		IconMail
	} from '@tabler/icons-svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	let sidebarOpen = $state(false);
	let activeSection = $state('hero');
	let scrolled = $state(false);

	onMount(() => {
		// Active section tracking
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible.length > 0) {
					activeSection = visible[0].target.id;
				}
			},
			{ rootMargin: '-80px 0px -40% 0px', threshold: [0, 0.1, 0.25] }
		);

		const sections = ['hero', ...navItems.map((n) => n.id)];
		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		// Scroll detection for nav background
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function closeSidebar() {
		sidebarOpen = false;
	}
</script>

<svelte:head>
	<title>Enterprise AI Consulting UK | SolidPlus Ltd</title>
	<meta
		name="description"
		content="SolidPlus delivers enterprise AI strategy, implementation, and governance for UK businesses. Measurable outcomes, no hype. Book a discovery call."
	/>
	<link rel="canonical" href="https://solidplus.tech/" />
</svelte:head>

<div class="font-body text-base-content bg-base-100 min-h-dvh">
	<!-- ── Nav ──────────────────────────────────────────── -->
	<nav
		aria-label="Primary navigation"
		class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
		       {scrolled
			? 'bg-base-100/90 backdrop-blur-md shadow-sm'
			: 'bg-transparent'}"
	>
		<div class="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-18">
			<!-- Logo -->
			<div class="w-12 md:w-14">
				<Logo />
			</div>

			<!-- Desktop Links -->
			<div class="hidden md:flex items-center gap-1">
				{#each navItems as item}
					<a
						href="#{item.id}"
						class="px-3 py-2 text-sm font-medium tracking-wide rounded-lg transition-colors duration-150
						       {activeSection === item.id
							? 'text-primary bg-primary/8'
							: 'text-base-content/70 hover:text-base-content hover:bg-base-200'}"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Desktop CTA -->
			<a
				href="#contact"
				class="hidden md:inline-flex btn btn-primary btn-sm rounded-lg text-sm font-semibold px-5"
			>
				Book a Call
			</a>

			<!-- Mobile toggle -->
			<button
				class="md:hidden btn btn-ghost btn-sm btn-square"
				onclick={() => (sidebarOpen = !sidebarOpen)}
				aria-expanded={sidebarOpen}
				aria-label="Toggle menu"
			>
				{#if sidebarOpen}
					<IconX size={20} />
				{:else}
					<IconMenu2 size={20} />
				{/if}
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if sidebarOpen}
			<!-- Backdrop -->
			<button
				class="fixed inset-0 bg-black/20 md:hidden z-40"
				onclick={closeSidebar}
				aria-label="Close menu"
				tabindex="-1"
			></button>

			<!-- Drawer -->
			<div
				class="fixed top-16 right-4 left-4 z-50 md:hidden bg-base-100 rounded-xl shadow-xl border border-base-300 p-4"
			>
				<div class="flex flex-col gap-1">
					{#each navItems as item}
						<a
							href="#{item.id}"
							class="px-4 py-3 text-base font-medium rounded-lg transition-colors
							       {activeSection === item.id
								? 'text-primary bg-primary/8'
								: 'text-base-content/70 hover:bg-base-200'}"
							onclick={closeSidebar}
						>
							{item.label}
						</a>
					{/each}
					<a
						href="#contact"
						class="btn btn-primary rounded-lg mt-2 text-base"
						onclick={closeSidebar}
					>
						Book a Call
					</a>
				</div>
			</div>
		{/if}
	</nav>

	<!-- ── Main Content ────────────────────────────────── -->
	<main id="main">
		{@render children()}
	</main>

	<!-- ── Footer ──────────────────────────────────────── -->
	<footer class="bg-neutral text-neutral-content">
		<div class="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
				<!-- Brand -->
				<div>
					<div class="w-14 mb-4 invert opacity-90">
						<Logo />
					</div>
					<p class="text-sm text-neutral-content/60 leading-relaxed max-w-xs">
						Enterprise AI consultancy.<br />Clear thinking, solid foundations.
					</p>
				</div>

				<!-- Links -->
				<div>
					<h4 class="font-heading font-bold text-sm tracking-wider uppercase mb-4">Navigate</h4>
					<div class="flex flex-col gap-2">
						{#each navItems as item}
							<a
								href="#{item.id}"
								class="text-sm text-neutral-content/60 hover:text-neutral-content transition-colors"
							>
								{item.label}
							</a>
						{/each}
					</div>
				</div>

				<!-- Contact -->
				<div>
					<h4 class="font-heading font-bold text-sm tracking-wider uppercase mb-4">Connect</h4>
					<div class="flex flex-col gap-2">
						<a
							href="mailto:admin@solidplus.tech"
							class="text-sm text-neutral-content/60 hover:text-neutral-content transition-colors inline-flex items-center gap-2"
						>
							<IconMail size={16} /> admin@solidplus.tech
						</a>
						<a
							href="https://www.linkedin.com/in/raphael-southall-021214197/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-neutral-content/60 hover:text-neutral-content transition-colors inline-flex items-center gap-2"
						>
							<IconBrandLinkedin size={16} /> LinkedIn
						</a>
						<a
							href="https://github.com/raphasouthall"
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-neutral-content/60 hover:text-neutral-content transition-colors inline-flex items-center gap-2"
						>
							<IconBrandGithub size={16} /> GitHub
						</a>
					</div>
				</div>
			</div>

			<div class="border-t border-neutral-content/10 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4">
				<p class="text-xs text-neutral-content/40">
					&copy; {new Date().getFullYear()} SolidPlus Ltd. Registered in England and Wales.
				</p>
				<p class="text-xs text-neutral-content/40 italic">Technology made human.</p>
			</div>
		</div>
	</footer>
</div>
