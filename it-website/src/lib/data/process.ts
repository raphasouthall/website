import type { ProcessStep } from '$lib/types';

export const processSteps: ProcessStep[] = [
	{
		number: '01',
		title: 'Discovery call',
		description:
			'A free 30-minute call where you describe the problem and I ask questions. I will tell you on the call whether this is work I should take on.'
	},
	{
		number: '02',
		title: 'Written scope',
		description:
			'Within 3 working days you get a one-page scope with deliverables, what I need access to, a price and a start date. You accept it or we change it before any work begins.'
	},
	{
		number: '03',
		title: 'Build in the open',
		description:
			'I work in your repositories and your Azure tenant, with a short written update at the end of each week. You can see every commit and every pipeline run as it happens.'
	},
	{
		number: '04',
		title: 'Handover',
		description:
			'I finish with a runbook, a recorded walkthrough and a list of anything I would do next. If you want ongoing support we agree a retainer separately.'
	}
];
