<script lang="ts">
	import { type Todo } from '$lib/types/todos';
	import TodoListItem from './TodoListItem.svelte';

	export let todos: Todo[];
	export let onRemove: (todo: Todo) => void;
	export let onUpdate: (updatedTodo: Todo) => void;

	let isLoading = false;

	const handleRemove = async (todo: Todo) => {
		isLoading = true;

		onRemove(todo);

		isLoading = false;
	};

	const handleUpdate = (updatedTodo: Todo) => {
		onUpdate(updatedTodo);
	};
</script>

<ul>
	{#each todos as todo, index (todo.id)}
		<TodoListItem class="todo" {index} {todo} onRemove={handleRemove} onUpdate={handleUpdate} />
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}

	:global(.todo) {
		margin-top: 8px;
	}
</style>
