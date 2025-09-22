<script lang="ts">
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500';

	interface Props {
		url: string;
		alt: string;
	}
	let { url, alt }: Props = $props();

	import { onMount } from 'svelte';

	let loaded = $state(false);

	let thisImage: HTMLImageElement;

	function getIndex(url: string): string {
		const parts = url.split('/');
		return parts[parts.length - 2];
	}

	onMount(() => {
		console.log('thisImage', thisImage);
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img
	id="card-image"
	loading="lazy"
	src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIndex(url)}.png`}
	{alt}
	class:loaded
	bind:this={thisImage}
/>

<style>
	img {
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
