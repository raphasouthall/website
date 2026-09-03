<script lang="ts">
	import {
		IconMap,
		IconServer,
		IconPlug,
		IconBrain,
		IconSearch,
		IconUsers,
		IconCloud,
		IconShield,
		IconCoins
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
		users: IconUsers,
		cloud: IconCloud,
		shield: IconShield,
		coins: IconCoins
	};

	const IconComponent = $derived(iconMap[icon] || IconMap);
</script>

<div class="card glass-card hairline h-full hover:bg-secondary transition-colors duration-200">
	<div class="card-body gap-3 p-5">
		<div class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent">
			<IconComponent size={20} />
		</div>
		<h3 class="text-[22px] font-semibold tracking-[-0.4px] leading-[1.18]">{title}</h3>
		<p class="text-ink-muted text-sm leading-[1.71]">{description}</p>
		<div class="flex flex-wrap gap-2 mt-auto pt-2">
			{#each tags as tag}
				<span class="rounded-full bg-secondary text-ink-muted text-[13px] leading-[1.38] tracking-[0.2px] px-2.5 py-1">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
