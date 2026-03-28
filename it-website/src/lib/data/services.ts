import type { ServiceItem } from '$lib/types';

export const services: ServiceItem[] = [
	{
		icon: 'map',
		title: 'AI Strategy & Roadmapping',
		description:
			"We help you see the full picture before making decisions. Together, we'll build a clear, prioritised roadmap that your whole team can understand — with honest assessments of what's worth pursuing and what isn't.",
		tags: ['Strategy', 'Roadmap', 'Clarity']
	},
	{
		icon: 'server',
		title: 'AI Infrastructure & Architecture',
		description:
			"A reliable AI system needs a solid foundation. We design and build the cloud infrastructure that makes AI workloads production-ready — secure, observable, and cost-effective. Built on Azure, built to last.",
		tags: ['Azure', 'Infrastructure', 'Production']
	},
	{
		icon: 'plug',
		title: 'Enterprise AI Integration',
		description:
			"Your existing systems matter. We connect AI capabilities into the tools your teams already use — language models, retrieval systems, automation — without the fragile integrations that create more problems than they solve.",
		tags: ['Integration', 'LLMs', 'Automation']
	},
	{
		icon: 'brain',
		title: 'Knowledge & Memory Systems',
		description:
			"Most organisations know far more than their tools can find. We design knowledge architectures — RAG pipelines, semantic search, structured memory — that make your institutional knowledge accessible and useful.",
		tags: ['RAG', 'Search', 'Knowledge']
	},
	{
		icon: 'search',
		title: 'Technical Due Diligence',
		description:
			"Evaluating a vendor, acquiring a company, or inheriting a system you didn't build? We provide clear, honest technical assessments — in language your board can act on.",
		tags: ['Audit', 'Assessment', 'Clarity']
	},
	{
		icon: 'users',
		title: 'Team Enablement & Training',
		description:
			"The best AI system is one your people can run without calling us. We design practical, hands-on programmes built around your actual stack — so capability stays in-house.",
		tags: ['Training', 'Workshops', 'Handover']
	}
];
