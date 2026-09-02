<script lang="ts">
	interface Props {
		label: string;
		challenge: string;
		solution: string;
		outcome: string;
		metric: string;
		metricLabel: string;
	}
	let { label, challenge, solution, outcome, metric, metricLabel }: Props = $props();
</script>

<div class="card bg-base-200 hairline h-full">
	<div class="card-body p-6 gap-5">
		<div class="flex items-start justify-between gap-4">
			<span class="rounded-full bg-secondary text-ink-muted text-[13px] leading-[1.38] tracking-[0.2px] px-2.5 py-1 whitespace-nowrap">{label}</span>
			<div class="text-right min-w-0">
				<div class="text-2xl md:text-3xl font-bold tracking-[-0.6px] text-base-content">{metric}</div>
				<div class="text-xs text-ink-subtle max-w-[10rem] ml-auto">{metricLabel}</div>
			</div>
		</div>

		<div>
			<h4 class="eyebrow text-ink-subtle mb-1">The situation</h4>
			<p class="text-sm leading-[1.71] text-ink-muted">{challenge}</p>
		</div>

		<div>
			<h4 class="eyebrow text-ink-subtle mb-1">What I did</h4>
			<p class="text-sm leading-[1.71] text-ink-muted">{solution}</p>
		</div>

		<div>
			<h4 class="eyebrow text-ink-subtle mb-1">The result</h4>
			<p class="text-sm leading-[1.71] text-base-content">{outcome}</p>
		</div>
	</div>
</div>
