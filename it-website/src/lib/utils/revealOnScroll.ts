import type { Action } from 'svelte/action';

interface RevealOptions {
	threshold?: number;
	delay?: number;
	once?: boolean;
	direction?: 'up' | 'left' | 'right' | 'none';
}

export const revealOnScroll: Action<HTMLElement, RevealOptions | undefined> = (
	node,
	options = {}
) => {
	const { threshold = 0.15, delay = 0, once = true, direction = 'up' } = options ?? {};

	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.dataset.revealDirection = direction;
	node.classList.add('reveal-hidden');

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.remove('reveal-hidden');
				node.classList.add('reveal-visible');
				if (once) observer.disconnect();
			}
		},
		{ threshold }
	);

	observer.observe(node);
	return { destroy: () => observer.disconnect() };
};
