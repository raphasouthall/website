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
			class="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center
			       font-mono text-sm font-bold shrink-0"
		>
			{number}
		</div>
		{#if !isLast}
			<div class="w-px flex-1 bg-primary/20 my-2"></div>
		{/if}
	</div>

	<!-- Content -->
	<div class="pb-10 {isLast ? 'pb-0' : ''}">
		<h3 class="font-heading text-xl font-bold mb-2">{title}</h3>
		<p class="text-base-content/60 leading-relaxed max-w-lg">{description}</p>
	</div>
</div>
