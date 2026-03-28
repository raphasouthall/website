<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import ProcessStep from '$lib/components/ui/ProcessStep.svelte';
	import CaseStudyCard from '$lib/components/ui/CaseStudyCard.svelte';
	import { services } from '$lib/data/services';
	import { processSteps } from '$lib/data/process';
	import { caseStudies } from '$lib/data/caseStudies';
	import { differentiators } from '$lib/data/differentiators';
	import { revealOnScroll } from '$lib/utils/revealOnScroll';
	import Logo from '$lib/Logo.svelte';
	import {
		IconArrowDown,
		IconCheck,
		IconBrandGithub,
		IconExternalLink
	} from '@tabler/icons-svelte';

	let formState = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let formName = $state('');
	let formEmail = $state('');
	let formCompany = $state('');
	let formMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formState = 'submitting';
		// Formspree integration — replace YOUR_FORM_ID with actual ID
		try {
			const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: JSON.stringify({
					name: formName,
					email: formEmail,
					company: formCompany,
					message: formMessage
				})
			});
			if (res.ok) {
				formState = 'success';
				formName = formEmail = formCompany = formMessage = '';
			} else {
				formState = 'error';
			}
		} catch {
			formState = 'error';
		}
	}
</script>

<!-- ═══════════════════════════════════════════════════════════════
     HERO
     ═══════════════════════════════════════════════════════════════ -->
<section
	id="hero"
	class="relative min-h-dvh flex items-center bg-neutral text-neutral-content overflow-hidden"
>
	<!-- Pattern overlay -->
	<div
		class="absolute inset-0 opacity-[0.06]"
		style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 32px 32px;"
	></div>

	<div class="relative max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Text -->
			<div>
				<div class="hero-animate">
					<span
						class="font-mono text-sm font-medium tracking-widest text-primary inline-flex items-center gap-3 mb-6"
					>
						Enterprise AI Consulting
						<span class="block w-8 h-px bg-primary/60"></span>
					</span>
				</div>

				<h1
					class="hero-animate-delay-1 font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] mb-6"
				>
					Technology<br />
					<span class="text-primary">made human.</span>
				</h1>

				<p class="hero-animate-delay-2 text-lg md:text-xl text-neutral-content/70 leading-relaxed max-w-lg mb-10">
					Accessible intelligence made for those who move the world. We care for your technology
					as if it were our own — with clarity, warmth, and real partnership.
				</p>

				<div class="hero-animate-delay-3 flex flex-wrap gap-4">
					<a href="#contact" class="btn btn-primary btn-lg rounded-lg text-base font-semibold px-8">
						Get in Touch
					</a>
					<a
						href="#services"
						class="btn btn-ghost btn-lg rounded-lg text-base font-semibold text-neutral-content/80 hover:text-neutral-content border-neutral-content/20 hover:border-neutral-content/40"
					>
						How We Help
					</a>
				</div>

				<p class="hero-animate-delay-3 mt-5 text-sm text-neutral-content/40">
					No commitment. Just a straight, honest conversation about your needs.
				</p>
			</div>

			<!-- Visual: Abstract logo + stats -->
			<div class="hidden lg:flex flex-col items-center justify-center">
				<div class="w-48 h-48 opacity-10">
					<Logo />
				</div>
				<div class="grid grid-cols-3 gap-8 mt-12 text-center">
					<div>
						<div class="text-3xl font-extrabold text-accent">8wk</div>
						<div class="text-xs text-neutral-content/50 mt-1">avg. to MVP</div>
					</div>
					<div>
						<div class="text-3xl font-extrabold text-accent">100%</div>
						<div class="text-xs text-neutral-content/50 mt-1">senior delivery</div>
					</div>
					<div>
						<div class="text-3xl font-extrabold text-accent">Azure</div>
						<div class="text-xs text-neutral-content/50 mt-1">specialist</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
			<IconArrowDown size={20} class="text-neutral-content/30" />
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     SERVICES
     ═══════════════════════════════════════════════════════════════ -->
<section id="services" class="py-20 md:py-28 bg-base-100">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div use:revealOnScroll>
			<SectionHeader
				number="01"
				title="What We Deliver"
				subtitle="Six service areas, one through-line: making your AI investment legible, durable, and genuinely useful."
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as service, i}
				<div use:revealOnScroll={{ delay: i * 75 }}>
					<ServiceCard {...service} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     PROCESS
     ═══════════════════════════════════════════════════════════════ -->
<section id="process" class="py-20 md:py-28 bg-base-200">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			<div use:revealOnScroll>
				<SectionHeader
					number="02"
					title="How We Work"
					subtitle="A process designed around one question: what does good actually look like for you?"
				/>
				<p class="text-base-content/60 leading-relaxed max-w-lg">
					We don't believe in complicating things. SolidPlus was founded on a simple premise:
					technology should serve people, not the other way around. We listen first, build with
					care, and leave you with systems you truly own.
				</p>
			</div>

			<div>
				{#each processSteps as step, i}
					<div use:revealOnScroll={{ delay: i * 100 }}>
						<ProcessStep {...step} isLast={i === processSteps.length - 1} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     WHY SOLIDPLUS
     ═══════════════════════════════════════════════════════════════ -->
<section class="py-20 md:py-28 bg-secondary text-secondary-content">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div use:revealOnScroll>
			<SectionHeader
				number="03"
				title="Why SolidPlus"
				subtitle="A few things that set us apart."
				light
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each differentiators as diff, i}
				<div
					use:revealOnScroll={{ delay: i * 75 }}
					class="border border-secondary-content/10 rounded-xl p-6 md:p-8 hover:bg-secondary-content/5 transition-colors"
				>
					<div class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
						<IconCheck size={16} class="text-accent" />
					</div>
					<h3 class="font-heading text-lg font-bold mb-3">{diff.title}</h3>
					<p class="text-secondary-content/70 text-sm leading-relaxed">{diff.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     CASE STUDIES
     ═══════════════════════════════════════════════════════════════ -->
<section id="results" class="py-20 md:py-28 bg-base-100">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div use:revealOnScroll>
			<SectionHeader
				number="04"
				title="Results"
				subtitle="Work we're proud of. Clients who'd rather stay anonymous — but kindly let us share the outcomes."
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each caseStudies as study, i}
				<div use:revealOnScroll={{ delay: i * 100 }}>
					<CaseStudyCard {...study} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     ABOUT / FOUNDER
     ═══════════════════════════════════════════════════════════════ -->
<section id="about" class="py-20 md:py-28 bg-base-200">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
			<div use:revealOnScroll>
				<SectionHeader
					number="05"
					title="The Founder"
					subtitle="Built by someone who's been in the infrastructure."
				/>
			</div>

			<div use:revealOnScroll={{ delay: 150 }} class="space-y-5">
				<p class="text-base-content/70 leading-relaxed">
					<strong class="text-base-content">Rapha Southall</strong> is an infrastructure engineer and
					AI systems architect with deep expertise in Microsoft Azure and enterprise cloud architecture.
					Before founding SolidPlus, he spent years designing and operating the kind of production systems
					that AI workloads actually have to run on — giving him a perspective that starts with "will this
					hold up in production?" rather than "does this look good in a presentation?"
				</p>
				<p class="text-base-content/70 leading-relaxed">
					He is the creator of
					<a
						href="https://neurostack.sh"
						target="_blank"
						rel="noopener noreferrer"
						class="text-primary hover:underline inline-flex items-center gap-1"
					>
						NeuroStack <IconExternalLink size={14} />
					</a>, a neuroscience-grounded knowledge architecture that applies principles from cognitive
					science — consolidation, associative retrieval, predictive coding — to the problem of
					enterprise knowledge management.
				</p>
				<p class="text-base-content/70 leading-relaxed">
					Rapha is Brazilian-British, based in the UK, and works with organisations across Europe.
					He believes the most valuable thing a technical advisor can offer is honest clarity — and
					that the best measure of a successful engagement is whether the client needs you less at
					the end than at the beginning.
				</p>

				<div class="flex gap-4 pt-4">
					<a
						href="https://github.com/raphasouthall"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-ghost btn-sm rounded-lg gap-2 text-base-content/60 hover:text-base-content"
					>
						<IconBrandGithub size={18} /> GitHub
					</a>
					<a
						href="https://neurostack.sh"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-ghost btn-sm rounded-lg gap-2 text-base-content/60 hover:text-base-content"
					>
						<IconExternalLink size={18} /> NeuroStack
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     FAQ
     ═══════════════════════════════════════════════════════════════ -->
<section class="py-20 md:py-28 bg-base-100">
	<div class="max-w-3xl mx-auto px-4 md:px-8">
		<div use:revealOnScroll>
			<SectionHeader
				number="06"
				title="Common Questions"
			/>
		</div>

		<div class="space-y-4">
			<div use:revealOnScroll class="collapse collapse-arrow bg-white dark:bg-base-200 border border-base-300 rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-bold">What does enterprise AI consulting involve?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						Enterprise AI consulting covers the full lifecycle: assessing your organisation's readiness,
						defining an AI strategy aligned to business goals, selecting and implementing the right
						technologies, and establishing governance frameworks. We work from strategy through to
						production deployment.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 50 }} class="collapse collapse-arrow bg-white dark:bg-base-200 border border-base-300 rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-bold">How long does a typical engagement take?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						A focused strategy engagement runs 4-8 weeks. Implementation sprints deliver working systems
						in 8-12 weeks. We design every engagement with speed-to-value in mind — no 18-month
						transformation programmes.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 100 }} class="collapse collapse-arrow bg-white dark:bg-base-200 border border-base-300 rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-bold">Do you work with regulated industries?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						Yes. We have experience with financial services, professional services, and logistics clients
						where regulatory compliance, data governance, and security are core considerations in every
						engagement.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 150 }} class="collapse collapse-arrow bg-white dark:bg-base-200 border border-base-300 rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-bold">What's the difference between AI strategy and implementation?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						AI strategy defines what to build and why — identifying use cases, assessing ROI, and creating
						a roadmap. Implementation is the technical execution: building, integrating, and deploying AI
						systems. SolidPlus provides both, end-to-end.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 200 }} class="collapse collapse-arrow bg-white dark:bg-base-200 border border-base-300 rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-bold">How do you measure ROI?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						We define success metrics at the outset: cost reduction targets, time-to-value milestones,
						and risk reduction KPIs. Every recommendation is tied to a measurable business outcome, not
						technical capability alone.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     CONTACT
     ═══════════════════════════════════════════════════════════════ -->
<section id="contact" class="py-20 md:py-28 bg-neutral text-neutral-content">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			<div use:revealOnScroll>
				<SectionHeader
					number="07"
					title="Get in Touch"
					subtitle="Got a project in mind? Let's talk about whether we're the right fit."
					light
				/>
				<p class="text-neutral-content/60 leading-relaxed max-w-lg mb-8">
					We don't outsource relationships. When you work with us, you get a true partner — someone
					who listens, understands your world, and cares about getting it right. The first
					conversation is always free, always honest, and always worth having.
				</p>
				<div class="space-y-3 text-sm text-neutral-content/50">
					<p>No jargon. No pressure. Just a warm, honest conversation about where you are and where you want to go.</p>
					<p>
						Prefer email?
						<a href="mailto:hello@solidplus.tech" class="text-accent hover:underline">
							hello@solidplus.tech
						</a>
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 150 }}>
				{#if formState === 'success'}
					<div class="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
						<div class="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
							<IconCheck size={24} class="text-success" />
						</div>
						<h3 class="font-heading text-xl font-bold text-neutral-content mb-2">Message sent</h3>
						<p class="text-neutral-content/60 text-sm">
							We'll be in touch within one working day.
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-5">
						<div>
							<label for="name" class="text-sm font-medium text-neutral-content/70 mb-1 block">
								Full Name *
							</label>
							<input
								id="name"
								type="text"
								required
								autocomplete="name"
								bind:value={formName}
								class="input input-bordered w-full bg-neutral-content/5 border-neutral-content/15 text-neutral-content placeholder:text-neutral-content/30 focus:border-primary"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label for="email" class="text-sm font-medium text-neutral-content/70 mb-1 block">
								Work Email *
							</label>
							<input
								id="email"
								type="email"
								required
								autocomplete="email"
								bind:value={formEmail}
								class="input input-bordered w-full bg-neutral-content/5 border-neutral-content/15 text-neutral-content placeholder:text-neutral-content/30 focus:border-primary"
								placeholder="you@company.com"
							/>
						</div>

						<div>
							<label for="company" class="text-sm font-medium text-neutral-content/70 mb-1 block">
								Company *
							</label>
							<input
								id="company"
								type="text"
								required
								autocomplete="organization"
								bind:value={formCompany}
								class="input input-bordered w-full bg-neutral-content/5 border-neutral-content/15 text-neutral-content placeholder:text-neutral-content/30 focus:border-primary"
								placeholder="Your organisation"
							/>
						</div>

						<div>
							<label for="message" class="text-sm font-medium text-neutral-content/70 mb-1 block">
								What are you working on?
							</label>
							<textarea
								id="message"
								rows="4"
								bind:value={formMessage}
								class="textarea textarea-bordered w-full bg-neutral-content/5 border-neutral-content/15 text-neutral-content placeholder:text-neutral-content/30 focus:border-primary"
								placeholder="Tell us about your challenge..."
							></textarea>
						</div>

						<button
							type="submit"
							class="btn btn-primary btn-lg w-full rounded-lg text-base font-semibold"
							disabled={formState === 'submitting'}
						>
							{#if formState === 'submitting'}
								<span class="loading loading-spinner loading-sm"></span>
								Sending...
							{:else}
								Start the Conversation
							{/if}
						</button>

						{#if formState === 'error'}
							<div class="text-error text-sm text-center">
								Something went wrong. Please email us directly at hello@solidplus.tech
							</div>
						{/if}

						<p class="text-xs text-neutral-content/30 text-center">
							Your information is never shared with third parties. We respond within one business day.
						</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
