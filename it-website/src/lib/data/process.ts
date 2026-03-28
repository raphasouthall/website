import type { ProcessStep } from '$lib/types';

export const processSteps: ProcessStep[] = [
	{
		number: '01',
		title: 'Understand',
		description:
			"We start by listening more than we talk. We map your current state honestly: your infrastructure, workflows, your team's real capabilities, and the gaps between where you are and where you're trying to get."
	},
	{
		number: '02',
		title: 'Define',
		description:
			"Before a line of code is written, we agree on what success looks like — in concrete, measurable terms. You'll get a clear picture of the work ahead, the decisions involved, and the trade-offs."
	},
	{
		number: '03',
		title: 'Build',
		description:
			'Hands-on delivery, with your team involved throughout. We build in the open: documented decisions, clean infrastructure-as-code, and regular checkpoints that keep you informed and in control.'
	},
	{
		number: '04',
		title: 'Hand Over',
		description:
			"Every engagement ends with a deliberate handover. We document what we built, run walkthroughs with your team, and leave systems your people can operate, extend, and confidently explain."
	}
];
