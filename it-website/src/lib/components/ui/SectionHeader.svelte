<script lang="ts">
	interface Props {
		number: string;
		title: string;
		subtitle?: string;
		light?: boolean;
	}
	let { number, title, subtitle, light = false }: Props = $props();
</script>

<div class="mb-12 md:mb-16">
	<span
		class="font-mono text-sm font-medium tracking-widest inline-flex items-center gap-3 mb-4
		       {light ? 'text-primary' : 'text-primary'}"
	>
		{number}
		<span class="block w-8 h-px {light ? 'bg-primary/60' : 'bg-primary/60'}"></span>
	</span>
	<h2
		class="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight
		       {light ? 'text-white' : 'text-base-content'}"
	>
		{title}
	</h2>
	{#if subtitle}
		<p
			class="mt-4 text-lg max-w-2xl leading-relaxed
			       {light ? 'text-white/70' : 'text-base-content/60'}"
		>
			{subtitle}
		</p>
	{/if}
</div>
