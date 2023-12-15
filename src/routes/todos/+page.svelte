<script lang="ts">
	export let data;

	$: lengthTodos = data.todos.length;
</script>

<svelte:head>
	<title>My Todos</title>
	<meta name="description" content="My Todos" />
</svelte:head>

<div class="text-column">
	<h1>My todos {lengthTodos}</h1>
</div>
