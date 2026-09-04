import type { ServiceItem } from '$lib/types';

export const services: ServiceItem[] = [
	{
		icon: 'cloud',
		title: 'Azure Foundations',
		description:
			'Subscriptions, networking, identity and policy built in Terraform and deployed through a pipeline you can audit.',
		tags: ['Azure', 'Terraform', 'Networking']
	},
	{
		icon: 'server',
		title: 'AKS Operations',
		description:
			'Private clusters kept in support, deployed with Helm, and monitored so you know when a rollout has finished.',
		tags: ['AKS', 'Helm', 'Upgrades']
	},
	{
		icon: 'shield',
		title: 'Azure Security',
		description:
			'Defender findings triaged and closed, secrets moved into Key Vault, managed identities in place of keys, private endpoints where public access is not needed.',
		tags: ['Defender', 'Key Vault', 'Private Link']
	},
	{
		icon: 'coins',
		title: 'Cost Control',
		description:
			'A monthly review of where the Azure bill goes, with right-sizing and reservations applied where they pay back.',
		tags: ['FinOps', 'Advisor', 'Reporting']
	},
	{
		icon: 'plug',
		title: 'Pipelines and Automation',
		description:
			'Manual runbooks replaced by Azure DevOps or GitHub Actions pipelines that alert a person when a run fails.',
		tags: ['Azure DevOps', 'GitHub Actions', 'PowerShell']
	},
	{
		icon: 'brain',
		title: 'AI Agents on Azure',
		description:
			'Azure AI Foundry agents that read live infrastructure through tools you control, with least-privilege identities, read-only guarantees enforced server-side and a budget cap from day one.',
		tags: ['AI Foundry', 'Agents', 'Guardrails']
	}
];
