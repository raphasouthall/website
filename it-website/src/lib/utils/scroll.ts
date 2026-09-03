import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Full-screen section scrolling.
 * Each <section data-snap> is one viewport tall; the window snaps to the nearest
 * section when the user stops scrolling, and each section's background moves at
 * a slower rate than its content for depth.
 */
export function initScroll(): () => void {
	gsap.registerPlugin(ScrollTrigger);

	const sections = gsap.utils.toArray<HTMLElement>('section[data-snap]');
	if (sections.length === 0) return () => {};

	const triggers: ScrollTrigger[] = [];

	// Snap to the top of the nearest section after the user stops scrolling
	const snapPoints = () => {
		const max = ScrollTrigger.maxScroll(window);
		return sections.map((s) => Math.min(s.offsetTop, max) / max);
	};
	triggers.push(
		ScrollTrigger.create({
			snap: {
				snapTo: (value) => gsap.utils.snap(snapPoints(), value),
				duration: { min: 0.2, max: 0.6 },
				delay: 0.05,
				ease: 'power2.inOut'
			},
			start: 0,
			end: () => ScrollTrigger.maxScroll(window)
		})
	);

	// Parallax the background layer and fade content in as each section enters
	for (const section of sections) {
		const bg = section.querySelector<HTMLElement>('[data-bg]');
		const content = section.querySelector<HTMLElement>('[data-content]');

		if (bg) {
			triggers.push(
				gsap.fromTo(
					bg,
					{ yPercent: -12 },
					{
						yPercent: 12,
						ease: 'none',
						scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
					}
				).scrollTrigger as ScrollTrigger
			);
		}

		if (content) {
			triggers.push(
				gsap.fromTo(
					content,
					{ autoAlpha: 0, y: 40 },
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.8,
						ease: 'power2.out',
						scrollTrigger: { trigger: section, start: 'top 60%', toggleActions: 'play none none reverse' }
					}
				).scrollTrigger as ScrollTrigger
			);
		}
	}

	return () => {
		for (const t of triggers) t.kill();
	};
}
