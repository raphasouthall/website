<script lang="ts">
	import {
		IconMap,
		IconServer,
		IconPlug,
		IconBrain,
		IconSearch,
		IconUsers
	} from '@tabler/icons-svelte';

	interface Props {
		icon: string;
		title: string;
		description: string;
		tags: string[];
	}
	let { icon, title, description, tags }: Props = $props();

	const iconMap: Record<string, typeof IconMap> = {
		map: IconMap,
		server: IconServer,
		plug: IconPlug,
		brain: IconBrain,
		search: IconSearch,
		users: IconUsers
	};

	const IconComponent = $derived(iconMap[icon] || IconMap);
</script>

<div
	class="card bg-white dark:bg-base-200 border border-base-300 h-full
	       hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5
	       transition-all duration-200"
>
	<div class="card-body gap-4 p-6 md:p-8">
		<div
			class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
		>
			<IconComponent size={20} />
		</div>
		<h3 class="card-title text-base font-bold">{title}</h3>
		<p class="text-base-content/60 text-sm leading-relaxed">{description}</p>
		<div class="flex flex-wrap gap-2 mt-auto pt-2">
			{#each tags as tag}
				<span class="badge badge-sm font-mono text-[0.65rem] tracking-wider uppercase bg-primary/8 text-primary border-0">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
