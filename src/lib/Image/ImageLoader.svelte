<script lang="ts">
	import Image from './Image.svelte';
	import { useIntersectionObserver } from './UseIntersectionObserver';
	let { url, alt } = $props();
	let isVisible = $state(true);
	let toggleVisible = {
		set isIntersecting(v: boolean) {
			isVisible = v;
		}
	};
	const root = null;
	const rootMargin = '0px';
	const options = { root, rootMargin };
</script>

<div {@attach useIntersectionObserver(toggleVisible, options)}>
	{#if isVisible}
		<Image {alt} {url} />
	{/if}
</div>
