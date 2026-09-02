import type { CaseStudy } from '$lib/types';

export const caseStudies: CaseStudy[] = [
	{
		label: 'Shipping',
		challenge:
			'A European shipping and logistics group ran business-critical applications on two private AKS clusters whose Kubernetes minor version was leaving support. Each upgrade had to land in a planned change window, and the team needed a reliable signal that a node pool had finished rolling.',
		solution:
			'I upgraded non-production first, wrote a watcher that tracks real node kubelet versions and cluster provisioning state instead of the API field that flips as soon as the upgrade is accepted, took disk snapshots before each window and ran production two weeks later on a Saturday the business chose.',
		outcome:
			'Both clusters moved to the next Kubernetes minor version with no rollback needed. The team kept a runbook and the watcher for the next upgrade cycle.',
		metric: '2',
		metricLabel: 'clusters upgraded, no rollback'
	},
	{
		label: 'Enterprise',
		challenge:
			'Public TLS certificates for web front doors, load balancers and vendor appliances were issued by an AWS certificate authority and installed on each consumer by hand. Every renewal took engineer time and carried expiry risk.',
		solution:
			'I built a daily Azure DevOps pipeline that reconciles certificates from AWS ACM into an Azure Key Vault, then delivers them to Windows VMs through Run Command, to Azure Front Door through direct Key Vault binding, and to AKS as Kubernetes secrets. The pipeline probes each consumer first and pushes only when a certificate differs, so a steady-state run moves no private key material.',
		outcome:
			'Renewal for the covered consumers now needs no manual steps. The first production origin certificate rotated through the pipeline with an nginx hot reload and no interruption to traffic.',
		metric: 'Daily',
		metricLabel: 'rotation across VMs, Front Door and AKS'
	},
	{
		label: 'Reporting',
		challenge:
			'An infrastructure team assembled monthly KPIs by hand from Azure Cost Management, Rapid7, network monitoring and Azure DevOps. The figures took engineer time each month and had no stored source to check against.',
		solution:
			'I wrote Python collectors that run on a monthly schedule under a managed identity, store snapshots in Blob Storage, commit the exports to git and deploy a React dashboard through a CD pipeline with a smoke test. A failed collector fails the run and the snapshot records which one failed.',
		outcome:
			'The dashboard publishes on the first of each month without anyone running a script. Each figure traces back to a stored snapshot and the run that produced it.',
		metric: 'Monthly',
		metricLabel: 'dashboard, no manual steps'
	}
];
