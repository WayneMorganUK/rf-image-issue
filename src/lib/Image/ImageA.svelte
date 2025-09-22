<script lang="ts">
	interface Props {
		url: string;
		alt: string;
	}
	let { url, alt }: Props = $props();
	let loaded = $state(false);

	function getIndex(url: string): string {
		const parts = url.split('/');
		return parts[parts.length - 2];
	}
</script>

<img
	id="card-image"
	loading="lazy"
	src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIndex(url)}.png`}
	{alt}
	class:loaded
	onload={() => (loaded = true)}
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
