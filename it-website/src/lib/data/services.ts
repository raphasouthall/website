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
		title: 'Security Hardening',
		description:
			'Certificate rotation automated, audit findings turned into tracked work, secrets moved into Key Vault.',
		tags: ['Key Vault', 'Defender', 'Certificates']
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
		title: 'AI Tooling for Ops Teams',
		description:
			'AI agents wired into operations work through MCP servers and self-hosted models, with production guardrails.',
		tags: ['MCP', 'AI Foundry', 'Agents']
	}
];
