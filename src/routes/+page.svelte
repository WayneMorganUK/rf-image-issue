<script lang="ts">
	import { getPokemon } from '$lib/RemoteFunctions/pokemon.remote';
	import MainSection from '$lib/MainSection.svelte';
</script>

<svelte:boundary>
	{#snippet pending()}
		<p>Loading...</p>
	{/snippet}
	<MainSection poke_data={await getPokemon({ offset: 10, limit: 10 })} />
	{#snippet failed(error, reset: () => void)}
		<!-- <Button twClass="" ariaLabel="Reset" onclick={reset}>oops! try again</Button> -->
		<button class="reset" aria-label="Reset" onclick={reset}>oops! try again</button>

		<p>
			Pokemon Page Failure. Check your network or try again later.
			{JSON.stringify(error as Error) ?? ''}
		</p>
	{/snippet}
</svelte:boundary>
