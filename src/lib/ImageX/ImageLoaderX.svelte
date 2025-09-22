<script lang="ts">
	interface Props {
		url: string;
		alt: string;
	}
	let { url, alt }: Props = $props();

	import IntersectionObserver from '$lib/ImageX/IntersectionObserverX.svelte';
	import Image from '$lib/Image/Image.svelte';
</script>

<IntersectionObserver>
	{#snippet children({ isVisible }: { isVisible: boolean })}
		{#if isVisible}
			<Image {alt} {url} />
		{/if}
	{/snippet}
</IntersectionObserver>
