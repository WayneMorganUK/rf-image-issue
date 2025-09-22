<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="page-menu">
	<a href="/" class="menu-button">Intersect & Attachment</a>
	<a href="/a" class="menu-button">intersect</a>
</nav>
{@render children?.()}

<style>
	.page-menu {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}
</style>
