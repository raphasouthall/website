import type { CaseStudy } from '$lib/types';

export const caseStudies: CaseStudy[] = [
	{
		label: 'Kubernetes',
		challenge: 'Two production clusters were about to leave vendor support.',
		solution:
			'I upgraded non-production first, then production in an agreed window, with snapshots taken before each step.',
		outcome: 'Both clusters upgraded with no rollback. The team kept the runbook.',
		metric: '2',
		metricLabel: 'clusters, no rollback'
	},
	{
		label: 'Certificates',
		challenge: 'Public TLS certificates were renewed and installed by hand.',
		solution:
			'I built a daily pipeline that pulls renewed certificates into Key Vault and pushes them to each consumer only when they change.',
		outcome: 'Renewal needs no manual steps. The first production swap caused no interruption.',
		metric: 'Daily',
		metricLabel: 'automated rotation'
	},
	{
		label: 'AI agents',
		challenge: 'The infrastructure team wanted AI agents that could answer questions from live Azure state without handing a language model root access.',
		solution:
			'I built a pilot on Azure AI Foundry where each agent calls a small API I control, runs as its own managed identity with a custom read-only role, and picks probes from a fixed list rather than writing commands.',
		outcome: 'Three agents answer firewall, server and documentation questions and one opens draft pull requests for a human to review. API keys are disabled on the whole resource.',
		metric: '0',
		metricLabel: 'keys, identity only'
	}
];
