<script lang="ts">
	interface Props {
		number: string;
		title: string;
		description: string;
		isLast?: boolean;
	}
	let { number, title, description, isLast = false }: Props = $props();
</script>

<div class="relative flex gap-6">
	<!-- Timeline -->
	<div class="flex flex-col items-center">
		<div
			class="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center
			       text-sm font-semibold shrink-0"
		>
			{number}
		</div>
		{#if !isLast}
			<div class="w-px flex-1 bg-base-300/60 my-2"></div>
		{/if}
	</div>

	<!-- Content -->
	<div class="pb-10 {isLast ? 'pb-0' : ''}">
		<h3 class="text-[22px] font-semibold tracking-[-0.4px] leading-[1.18] mb-2">{title}</h3>
		<p class="text-ink-muted leading-[1.71] text-sm max-w-lg">{description}</p>
	</div>
</div>
