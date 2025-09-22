<script lang="ts">
	import ImageLoaderA from '$lib/Image/ImageLoaderA.svelte';

	let { datum } = $props();
</script>

<div class="card">
	<div class="image">
		<a href={`/poke/${datum.url}`}>
			<ImageLoaderA url={datum.url} alt={datum.name} />
		</a>
	</div>

	<a href={`/poke}/${datum.url}`}>
		<h6 class="name">
			{datum.name}
		</h6>
	</a>
</div>

<style>
	.card {
		background-color: aqua;
		height: 120px;
		width: 100px;
	}
	.image {
		height: 100px;
		width: 100px;
		object-fit: fill;
	}
	.name {
		position: relative;
		width: 100px;
		color: blueviolet;
		text-align: center;
		line-height: 30px;
		margin-top: -10px;
		background-color: rgba(255, 255, 255, 0.7);
	}
</style>
