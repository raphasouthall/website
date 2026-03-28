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

<div class="card bg-white dark:bg-base-200 border border-base-300 h-full">
	<div class="card-body p-6 md:p-8 gap-5">
		<div class="flex items-start justify-between gap-4">
			<span class="badge badge-primary badge-sm font-mono uppercase tracking-wider">{label}</span>
			<div class="text-right shrink-0">
				<div class="text-2xl md:text-3xl font-extrabold text-secondary">{metric}</div>
				<div class="text-xs text-base-content/50">{metricLabel}</div>
			</div>
		</div>

		<div>
			<h4 class="font-bold text-sm text-base-content/50 uppercase tracking-wider mb-1">The situation</h4>
			<p class="text-sm leading-relaxed text-base-content/70">{challenge}</p>
		</div>

		<div>
			<h4 class="font-bold text-sm text-base-content/50 uppercase tracking-wider mb-1">What we did</h4>
			<p class="text-sm leading-relaxed text-base-content/70">{solution}</p>
		</div>

		<div>
			<h4 class="font-bold text-sm text-base-content/50 uppercase tracking-wider mb-1">The result</h4>
			<p class="text-sm leading-relaxed text-base-content/80 font-medium">{outcome}</p>
		</div>
	</div>
</div>
