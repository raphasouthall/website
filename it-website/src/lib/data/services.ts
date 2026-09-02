import type { ServiceItem } from '$lib/types';

export const services: ServiceItem[] = [
	{
		icon: 'cloud',
		title: 'Azure Landing Zones and Terraform',
		description:
			'I design and build Azure foundations as code: subscriptions, hub-and-spoke networking, private endpoints, Key Vault, RBAC and policy. Every change goes through a pipeline, so you can see who changed what and roll it back.',
		tags: ['Azure', 'Terraform', 'Networking']
	},
	{
		icon: 'server',
		title: 'AKS and Kubernetes Operations',
		description:
			'I run private AKS clusters in production, which means version upgrades before end of life, Helm-based deployments, ingress and certificate handling, and the monitoring that tells you a rollout finished rather than only that it started.',
		tags: ['AKS', 'Helm', 'Upgrades']
	},
	{
		icon: 'shield',
		title: 'Security Hardening',
		description:
			'I close the gaps that audits find: automated certificate rotation, Defender for Cloud and Rapid7 findings turned into tracked work, least-privilege roles for automation, and secrets moved out of pipelines into Key Vault.',
		tags: ['Key Vault', 'Rapid7', 'Certificates']
	},
	{
		icon: 'coins',
		title: 'Cloud Cost Control',
		description:
			'I find where the Azure bill goes, act on Advisor and reservation recommendations, right-size what is oversized and remove what nobody owns. You get a monthly number you can put in front of your finance team.',
		tags: ['FinOps', 'Advisor', 'Reporting']
	},
	{
		icon: 'plug',
		title: 'Pipelines and Automation',
		description:
			'I replace manual runbooks with Azure DevOps or GitHub Actions pipelines: scheduled collectors, self-hosted agents with managed identities, PowerShell and Python tooling, and alerts that reach a person when a run fails.',
		tags: ['Azure DevOps', 'GitHub Actions', 'PowerShell']
	},
	{
		icon: 'brain',
		title: 'AI Tooling for Infrastructure Teams',
		description:
			'I wire AI agents into real operations work through MCP servers, Azure AI Foundry and self-hosted models, with the same guardrails as any other production system. I also build and run NeuroStack, an open-source memory server for coding agents.',
		tags: ['MCP', 'AI Foundry', 'Agents']
	}
];
