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
		label: 'Reporting',
		challenge: 'Monthly infrastructure KPIs were assembled by hand from several tools.',
		solution:
			'I wrote scheduled collectors that store each snapshot and publish a dashboard through a deploy pipeline.',
		outcome: 'The dashboard updates on the first of each month with no one running a script.',
		metric: 'Monthly',
		metricLabel: 'hands-off reporting'
	}
];
