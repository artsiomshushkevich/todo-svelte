<script lang="ts">
	import { getContext, setContext } from 'svelte';

	import { goto } from '$app/navigation';
	import { getCommonApiHeaders } from '$lib/utils/headers';

	export let onLogOut: () => void;
	export let isAuthenticated: boolean;

	const logOut = async () => {
		await fetch('/api/logout', { method: 'POST', headers: getCommonApiHeaders() });
		goto('/auth');
		onLogOut();
	};
</script>

<header>
	<div class="corner">
		<h1>Todos app</h1>
	</div>

	{#if isAuthenticated}
		<div class="corner">
			<button on:click={logOut}>Log out</button>
		</div>
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid black;
		padding: 16px 16px 0;
	}

	h1 {
		margin: 0;
	}
</style>
