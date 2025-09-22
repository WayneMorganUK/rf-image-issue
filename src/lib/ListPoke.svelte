<script lang="ts">
	import Card from '$lib/Card.svelte';

	let { poke_data } = $props();
</script>

<div class="Poke-list">
	{#each poke_data.pokemons as datum, i}
		<Card {datum} />
	{/each}
</div>

<style>
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
