<script lang="ts">
	import { type Todo } from '$lib/types/todos';
	import TodoForm from './components/TodoForm.svelte';
	import TodoList from './components/TodoList.svelte';

	export let data;

	const handleSuccess = (todo: Todo) => {
		data.todos = [...data.todos, todo];
	};

	const handleRemove = (todo: Todo) => {
		const index = data.todos.findIndex((item) => item.id === todo.id);
		const newTodos = [...data.todos];
		newTodos.splice(index, 1);
		data.todos = newTodos;
	};

	const handleUpdate = (todo: Todo) => {
		const index = data.todos.findIndex((item) => item.id === todo.id);
		const newTodos = [...data.todos];
		newTodos[index] = {
			...todo
		};
		data.todos = newTodos;
	};
</script>

<svelte:head>
	<title>My todos</title>
	<meta name="description" content="My data.todos" />
</svelte:head>

<div class="text-column">
	<h2>My todos</h2>
	<TodoForm onSuccess={handleSuccess} />
	<TodoList todos={data.todos} onRemove={handleRemove} onUpdate={handleUpdate} />
</div>
