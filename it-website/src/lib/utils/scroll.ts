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
	ScrollTrigger.config({ ignoreMobileResize: true });
	ScrollTrigger.normalizeScroll(true);
	gsap.config({ force3D: true });

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

	// Each background band drifts at its own speed while the section passes; content fades in
	for (const section of sections) {
		const bands = section.querySelectorAll<SVGGElement>('[data-band]');
		const content = section.querySelector<HTMLElement>('[data-content]');

		for (const band of bands) {
			const speed = Number(band.dataset.speed ?? 0.5);
			triggers.push(
				gsap.fromTo(
					band,
					{ x: -90 * speed, y: 40 * speed },
					{
						x: 90 * speed,
						y: -40 * speed,
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
		ScrollTrigger.normalizeScroll(false);
	};
}
