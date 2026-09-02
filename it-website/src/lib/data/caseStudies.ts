import type { CaseStudy } from '$lib/types';

export const caseStudies: CaseStudy[] = [
	{
		label: 'Shipping and Logistics',
		challenge:
			'A shipping group ran its customer-facing applications on private AKS clusters whose Kubernetes minor version was reaching end of support. The upgrade had to land in a fixed change window with no customer downtime, and the team had no reliable way to tell when a node pool had finished rolling.',
		solution:
			'I upgraded non-production first, wrote a watcher that tracks real node kubelet versions and cluster provisioning state instead of the API field that flips as soon as the upgrade is accepted, then ran the production upgrade inside the agreed window with a documented rollback path.',
		outcome:
			'Both clusters moved from Kubernetes 1.33 to 1.34 before the support cut-off. Production stayed up through the window and the team kept a runbook they can reuse for the next version.',
		metric: '0',
		metricLabel: 'minutes of downtime'
	},
	{
		label: 'Enterprise Infrastructure',
		challenge:
			'Public TLS certificates for a company\'s web front doors, load balancers and vendor appliances were renewed by hand from an AWS certificate authority and installed on each consumer one at a time. Expiries were tracked in a spreadsheet and one missed date meant an outage.',
		solution:
			'I built a daily Azure DevOps pipeline that reconciles certificates from AWS ACM into an Azure Key Vault, then delivers them to Windows VMs through Run Command, to Azure Front Door through direct Key Vault binding, and to AKS as Kubernetes secrets. A two-phase probe-then-push design means a steady-state run moves no private key material at all.',
		outcome:
			'Certificate renewal now takes no manual steps for the covered consumers. The first production origin certificate rotated through the pipeline with an nginx hot reload and no interruption to traffic.',
		metric: '1',
		metricLabel: 'daily pipeline, zero manual renewals'
	},
	{
		label: 'Infrastructure Reporting',
		challenge:
			'An infrastructure team reported monthly KPIs to management by hand, pulling figures from Azure Cost Management, Rapid7, network monitoring and Azure DevOps into slides. The numbers took days to assemble and nobody could reproduce last quarter\'s figures.',
		solution:
			'I wrote Python collectors for nine KPIs that run on a monthly schedule under a managed identity, store snapshots in Blob Storage, commit the exports to git and deploy a React dashboard through a CD pipeline with a smoke test. Failures raise an alert instead of silently skipping a month.',
		outcome:
			'Management now reads the dashboard on the first working day of each month. Every figure traces back to a stored snapshot and the collector run that produced it, so the team can defend the number when asked.',
		metric: '9',
		metricLabel: 'KPIs collected automatically'
	}
];
