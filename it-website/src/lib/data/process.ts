import type { ProcessStep } from '$lib/types';

export const processSteps: ProcessStep[] = [
	{
		number: '01',
		title: 'Discovery call',
		description: 'A free 30-minute call. You describe the problem and I say whether I can help.'
	},
	{
		number: '02',
		title: 'Written scope',
		description:
			'Within 3 working days you get a one-page scope with deliverables, price and start date.'
	},
	{
		number: '03',
		title: 'Build in the open',
		description: 'I work in your tenant and your repos, with a short written update each week.'
	},
	{
		number: '04',
		title: 'Handover',
		description: 'You get a runbook, a recorded walkthrough and a list of what I would do next.'
	}
];
