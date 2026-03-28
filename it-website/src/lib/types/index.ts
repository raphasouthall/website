export interface NavItem {
	id: string;
	label: string;
}

export interface ServiceItem {
	icon: string;
	title: string;
	description: string;
	tags: string[];
}

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

export interface CaseStudy {
	label: string;
	challenge: string;
	solution: string;
	outcome: string;
	metric: string;
	metricLabel: string;
}

export interface Differentiator {
	title: string;
	description: string;
}
