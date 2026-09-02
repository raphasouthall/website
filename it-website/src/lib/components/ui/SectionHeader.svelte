<script lang="ts">
	interface Props {
		number: string;
		title: string;
		subtitle?: string;
		light?: boolean;
	}
	let { number, title, subtitle }: Props = $props();
</script>

<div class="mb-12 md:mb-16">
	<span class="eyebrow text-ink-muted inline-flex items-center gap-3 mb-4">
		{number}
		<span class="block w-8 h-px bg-base-300"></span>
	</span>
	<h2 class="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-[-1px] leading-[1.19] text-base-content">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-4 text-lg max-w-2xl leading-[1.69] text-ink-muted">
			{subtitle}
		</p>
	{/if}
</div>
