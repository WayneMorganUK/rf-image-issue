<script lang="ts">
	import { getPokemon } from '$lib/RemoteFunctions/pokemon.remote';
	import ListPokeA from '$lib/ListPokeA.svelte';
</script>

<svelte:boundary>
	{#snippet pending()}
		<p>Loading...</p>
	{/snippet}
	<ListPokeA poke_data={await getPokemon({ offset: 10, limit: 10 })} />
	{#snippet failed(error, reset: () => void)}
		<button class="reset" aria-label="Reset" onclick={reset}>oops! try again</button>

		<p>
			Pokemon Page Failure. Check your network or try again later.
			{JSON.stringify(error as Error) ?? ''}
		</p>
	{/snippet}
</svelte:boundary>
