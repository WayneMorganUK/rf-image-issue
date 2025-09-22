<script lang="ts">
	// https://css-tricks.com/lazy-loading-images-in-svelte/
	// https://github.com/donovanh/svelte-image-loading

	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet<[{ isVisible: boolean }]> } = $props();
	let isVisible = $state(false);
	let element: Element;

	const handleIntersectCallback = (entries: { isIntersecting: boolean }[]) => {
		isVisible = entries[0].isIntersecting;
	};

	onMount(() => {
		const root = null;
		const rootMargin = '0px';
		const options = { root, rootMargin };

		const observer = new IntersectionObserver(handleIntersectCallback, options);
		observer.observe(element);

		return () => observer.unobserve(element);
	});
</script>

<div bind:this={element}>
	{@render children({ isVisible })}
</div>
