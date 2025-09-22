<script lang="ts">
	interface Props {
		url: string;
		alt: string;
	}
	let { url, alt }: Props = $props();

	import IntersectionObserverA from '$lib/Image/IntersectionObserverA.svelte';
	import ImageA from '$lib/Image/ImageA.svelte';
</script>

<IntersectionObserverA>
	{#snippet children({ isVisible }: { isVisible: boolean })}
		{#if isVisible}
			<ImageA {alt} {url} />
		{/if}
	{/snippet}
</IntersectionObserverA>
