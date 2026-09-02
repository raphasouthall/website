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
		try {
			const res = await fetch('https://formsubmit.co/ajax/admin@solidplus.tech', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name: formName,
					email: formEmail,
					company: formCompany,
					message: formMessage,
					_subject: `New enquiry from ${formName} at ${formCompany}`,
					_template: 'table'
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
	class="relative bg-base-100 text-base-content overflow-hidden flex items-center min-h-[calc(100dvh-4rem)] mt-16 md:mt-18"
>
	<!-- Background image + fade to canvas -->
	<div
		class="absolute inset-0 bg-cover bg-center opacity-70"
		style="background-image: url('/hero-bg.jpg');"
	></div>
	<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>

	<div class="relative max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Text -->
			<div>
				<div class="hero-animate">
					<span
						class="eyebrow text-ink-muted inline-flex items-center gap-3 mb-6"
					>
						Freelance Azure Platform Engineer
						<span class="block w-8 h-px bg-base-300"></span>
					</span>
				</div>

				<h1
					class="hero-animate-delay-1 text-[clamp(2.25rem,4.5vw,3.75rem)] 2xl:text-[4.5rem] font-bold tracking-[-0.03em] leading-[1.17] mb-6"
				>
					Azure infrastructure<br />
					<span class="text-ink-muted">that stays up.</span>
				</h1>

				<p class="hero-animate-delay-2 text-lg text-ink-muted leading-[1.69] max-w-lg mb-10">
					I am Raphael Southall. I build and run Azure landing zones, AKS clusters and the
					automation around them for companies whose customers notice when a change goes wrong.
				</p>

				<div class="hero-animate-delay-3 flex flex-wrap gap-4">
					<a href="#contact" class="btn btn-primary btn-lg rounded-lg text-base font-semibold px-8">
						Get in Touch
					</a>
					<a
						href="#services"
						class="btn btn-secondary btn-lg rounded-lg text-sm font-semibold border-0"
					>
						What I Do
					</a>
				</div>

				<p class="hero-animate-delay-3 mt-5 text-[13px] text-ink-muted">
					Free 30-minute call. If the work needs someone else, I will say so on the call.
				</p>
			</div>

			<!-- Visual: fact card -->
			<div class="hidden lg:block hero-animate-delay-2">
				<div class="bg-base-200 hairline rounded-xl p-6 max-w-md ml-auto">
					<div class="grid grid-cols-3 gap-6 mb-6">
						<div>
							<div class="text-3xl font-bold tracking-[-0.6px]">6+</div>
							<div class="text-xs text-ink-muted mt-1">years in Azure</div>
						</div>
						<div>
							<div class="text-3xl font-bold tracking-[-0.6px]">AKS</div>
							<div class="text-xs text-ink-muted mt-1">in production</div>
						</div>
						<div>
							<div class="text-3xl font-bold tracking-[-0.6px]">UK</div>
							<div class="text-xs text-ink-muted mt-1">based, remote</div>
						</div>
					</div>
					<ul class="border-t border-base-300/40 pt-5 space-y-3 text-sm">
						<li class="flex justify-between gap-4"><span class="text-ink-muted">Stack</span><span>Azure, AKS, Terraform, ADO</span></li>
						<li class="flex justify-between gap-4"><span class="text-ink-muted">Engagements</span><span>Fixed price or day rate</span></li>
						<li class="flex justify-between gap-4"><span class="text-ink-muted">Availability</span><span>1 to 2 clients at a time</span></li>
						<li class="flex justify-between gap-4"><span class="text-ink-muted">Reply time</span><span>2 working days</span></li>
					</ul>
					<div class="border-t border-base-300/40 mt-5 pt-5">
						<div class="eyebrow text-ink-subtle mb-3">Certifications</div>
						<div class="flex items-center gap-4">
							<a href="https://learn.microsoft.com/api/credentials/share/en-us/RaphaelSouthall-4250/A8AD6AA64927B2F7?sharingId=AC7138B7C9203A1D" target="_blank" rel="noopener noreferrer" title="Azure Solutions Architect Expert (AZ-305), valid to June 2027. Click to verify.">
								<img src="/badges/az-305.svg" alt="Microsoft Certified: Azure Solutions Architect Expert" class="w-14 h-14" />
							</a>
							<a href="https://learn.microsoft.com/api/credentials/share/en-us/RaphaelSouthall-4250/6AB76ADFCF71A548?sharingId=AC7138B7C9203A1D" target="_blank" rel="noopener noreferrer" title="Azure Administrator Associate (AZ-104), renewed 2026. Click to verify.">
								<img src="/badges/az-104.svg" alt="Microsoft Certified: Azure Administrator Associate" class="w-14 h-14" />
							</a>
							<a href="https://www.credly.com/badges/5647d8d5-cc44-4b20-b786-c1cee518e65d/public_url" target="_blank" rel="noopener noreferrer" title="AWS Certified Cloud Practitioner. Click to verify.">
								<img src="/badges/aws-ccp.png" alt="AWS Certified Cloud Practitioner" class="w-14 h-14" />
							</a>
							<div class="text-xs text-ink-muted leading-snug ml-1">
								<div>AZ-305 Expert</div>
								<div>AZ-104 Associate</div>
								<div>AWS Cloud Practitioner</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
				title="What I Do"
				subtitle="Six things I get hired for. Each one ends with code in your repository and a runbook your team can follow."
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
					title="How I Work"
					subtitle="Four steps, a written scope before any work starts, and a handover at the end."
				/>
				<p class="text-base-content/60 leading-relaxed max-w-lg">
					You deal with one person from the first call to the last commit. I take on one or two
					clients at a time, working evenings and weekends by arrangement, and I reply within two
					working days.
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
<section class="py-20 md:py-28 bg-base-200">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<div use:revealOnScroll>
			<SectionHeader
				number="03"
				title="Why Hire Me"
				subtitle="What you get from a single engineer that a consultancy bench cannot give you."
				light
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each differentiators as diff, i}
				<div
					use:revealOnScroll={{ delay: i * 75 }}
					class="hairline rounded-xl p-6 bg-base-100 transition-colors"
				>
					<div class="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-4">
						<IconCheck size={16} class="text-accent" />
					</div>
					<h3 class="text-[22px] font-semibold tracking-[-0.4px] leading-[1.18] mb-3">{diff.title}</h3>
					<p class="text-ink-muted text-sm leading-[1.71]">{diff.description}</p>
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
				subtitle="Three pieces of recent work from my current role, anonymised. None of it was delivered through SolidPlus."
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
					title="About Me"
					subtitle="An infrastructure engineer who runs production Azure for a living."
				/>
			</div>

			<div use:revealOnScroll={{ delay: 150 }} class="space-y-5">
				<p class="text-base-content/70 leading-relaxed">
					<strong class="text-base-content">I am Raphael Southall</strong>, an Azure infrastructure
					engineer. My day job is running the cloud estate for a European shipping and logistics
					group, which covers private AKS clusters, certificate automation, Rapid7 vulnerability
					management and a monthly infrastructure KPI dashboard. SolidPlus Ltd is the company I
					invoice freelance work through.
				</p>
				<p class="text-base-content/70 leading-relaxed">
					I also build
					<a
						href="https://neurostack.sh"
						target="_blank"
						rel="noopener noreferrer"
						class="text-accent hover:underline inline-flex items-center gap-1"
					>
						NeuroStack <IconExternalLink size={14} />
					</a>, an open-source memory server that gives AI coding agents durable, searchable context
					across sessions. I run it on my own homelab and use it every day.
				</p>
				<p class="text-base-content/70 leading-relaxed">
					I am Brazilian-British, based in the UK, and work remotely with teams across Europe. I
					take on a small number of clients at a time and I would rather turn work down than do it
					badly.
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
			<div use:revealOnScroll class="collapse collapse-arrow bg-base-200 hairline rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-semibold">What kind of work do you take on?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						I take on Azure platform work, which covers landing zones, networking, AKS, Terraform,
						pipelines, certificate and secret automation, cost reviews and security hardening.
						Application development and desktop support sit outside what I offer.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 50 }} class="collapse collapse-arrow bg-base-200 hairline rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-semibold">How long does an engagement take?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						A cost or security review takes 1 to 2 weeks. A landing zone or AKS build takes 4 to 8
						weeks. Ongoing operations run on a monthly retainer with an agreed number of days.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 100 }} class="collapse collapse-arrow bg-base-200 hairline rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-semibold">How do you charge?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						Fixed price for defined deliverables, day rate for open-ended operations work. Both are
						written into the scope before I start. Invoices come from SolidPlus Ltd, a UK company,
						so procurement gets a normal supplier.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 150 }} class="collapse collapse-arrow bg-base-200 hairline rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-semibold">Can you work inside our tenant and our tooling?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						Yes. I work in your Azure tenant with a guest account and your repositories in Azure
						DevOps or GitHub, so nothing lives in my environment. I follow your change process and
						bring my own tooling only where you have none.
					</p>
				</div>
			</div>

			<div use:revealOnScroll={{ delay: 200 }} class="collapse collapse-arrow bg-base-200 hairline rounded-xl">
				<input type="radio" name="faq" />
				<div class="collapse-title font-semibold">What happens when you leave?</div>
				<div class="collapse-content text-base-content/70 text-sm leading-relaxed">
					<p>
						You keep everything: code, pipelines, a runbook and a recorded walkthrough. If you want
						me on call afterwards we agree a retainer, but the goal is that you do not need one.
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
					subtitle="Tell me what is broken or what you need built. I reply within two working days."
					light
				/>
				<p class="text-ink-muted leading-[1.69] max-w-lg mb-8">
					The first call is free and lasts about 30 minutes. You describe the problem, I ask
					questions, and by the end you will know whether I am the right person and roughly what
					it would cost.
				</p>
				<div class="space-y-3 text-sm text-ink-subtle">
					<p>I work freelance alongside a full-time role, so delivery happens evenings and weekends by arrangement and I take one or two clients at a time.</p>
					<p>
						Prefer email?
						<a href="mailto:admin@solidplus.tech" class="text-accent hover:underline">
							admin@solidplus.tech
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
						<h3 class="text-xl font-semibold text-base-content mb-2">Message sent</h3>
						<p class="text-ink-muted text-sm">
							I will reply within two working days.
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-5">
						<div>
							<label for="name" class="text-sm font-medium text-ink-muted mb-1 block">
								Full Name *
							</label>
							<input
								id="name"
								type="text"
								required
								autocomplete="name"
								bind:value={formName}
								class="input w-full bg-base-200 hairline text-base-content placeholder:text-ink-subtle focus:outline-1 focus:outline-accent"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label for="email" class="text-sm font-medium text-ink-muted mb-1 block">
								Work Email *
							</label>
							<input
								id="email"
								type="email"
								required
								autocomplete="email"
								bind:value={formEmail}
								class="input w-full bg-base-200 hairline text-base-content placeholder:text-ink-subtle focus:outline-1 focus:outline-accent"
								placeholder="you@company.com"
							/>
						</div>

						<div>
							<label for="company" class="text-sm font-medium text-ink-muted mb-1 block">
								Company *
							</label>
							<input
								id="company"
								type="text"
								required
								autocomplete="organization"
								bind:value={formCompany}
								class="input w-full bg-base-200 hairline text-base-content placeholder:text-ink-subtle focus:outline-1 focus:outline-accent"
								placeholder="Your organisation"
							/>
						</div>

						<div>
							<label for="message" class="text-sm font-medium text-ink-muted mb-1 block">
								What are you working on?
							</label>
							<textarea
								id="message"
								rows="4"
								bind:value={formMessage}
								class="textarea w-full bg-base-200 hairline text-base-content placeholder:text-ink-subtle focus:outline-1 focus:outline-accent"
								placeholder="What is broken, or what needs building?"
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
								Book a Call
							{/if}
						</button>

						{#if formState === 'error'}
							<div class="text-error text-sm text-center">
								Something went wrong. Please email me directly at admin@solidplus.tech
							</div>
						{/if}

						<p class="text-xs text-ink-subtle text-center">
							Your details go to admin@solidplus.tech via FormSubmit and nowhere else. I reply within two working days.
						</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
