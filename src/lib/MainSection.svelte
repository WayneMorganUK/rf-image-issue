<script lang="ts">
	import PokeList from '$lib/ListPoke.svelte';

	let { poke_data } = $props();
</script>

<div>
	<PokeList {poke_data} />
</div>
