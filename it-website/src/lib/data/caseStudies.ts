import type { CaseStudy } from '$lib/types';

export const caseStudies: CaseStudy[] = [
	{
		label: 'Financial Services',
		challenge:
			'A mid-size financial services firm had run three separate AI pilots over two years. Each produced a demo. None produced a system their team could run.',
		solution:
			'Audited all three prior engagements, identified the infrastructure and handover gaps, and rebuilt the most viable use case on a clean Azure foundation — with documentation, runbooks, and a team enablement programme.',
		outcome:
			'First production AI workflow live within twelve weeks. Team fully self-sufficient within six months.',
		metric: '12',
		metricLabel: 'weeks to production'
	},
	{
		label: 'Professional Services',
		challenge:
			'A professional services organisation with 200+ staff had fifteen years of documentation spread across SharePoint, email, and individual drives. New starters took months to become effective.',
		solution:
			'Designed and deployed a semantic knowledge retrieval system built on their existing Microsoft 365 stack — indexing, chunking, embedding, and a natural-language interface.',
		outcome:
			'60% reduction in "where do I find X" support requests within eight weeks. Used daily by 80% of the team within three months.',
		metric: '60%',
		metricLabel: 'fewer support requests'
	},
	{
		label: 'Technology',
		challenge:
			'A scaling technology company needed an AI roadmap for their board and potential investors. Previous attempts had produced documents that didn\'t survive technical scrutiny.',
		solution:
			'Worked with CTO and leadership over six weeks to produce a grounded, technically honest AI strategy — with clear prioritisation and an architecture vision the engineering team signed off on.',
		outcome:
			'Strategy presented to board with confidence. External reviewers described it as "the most credible AI roadmap we\'ve seen from a company this size."',
		metric: 'Series B',
		metricLabel: 'completed'
	}
];
