<script lang="ts">
	import CardA from '$lib/CardA.svelte';
	let { poke_data } = $props();
</script>

<div class="title">With intersectionObserver</div>
<div class="Poke-list">
	{#each poke_data.pokemons as datum, i}
		<CardA {datum} />
	{/each}
</div>

<style>
	.title {
		width: 100vw;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	.Poke-list {
		background-color: rgb(78, 206, 15);
		margin-top: 8px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		max-width: 520px;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 1.75rem;
		gap: 0.25rem;
		margin-top: 0.5rem;
		border-radius: 1rem;
	}
</style>
