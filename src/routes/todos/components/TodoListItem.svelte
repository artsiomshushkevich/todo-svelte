<script lang="ts">
	import { type Todo } from '$lib/types/todos';
	import { getCommonApiHeaders } from '$lib/utils/headers';

	export let index: number;
	export let todo: Todo;
	export let onRemove: (todo: Todo) => void;
	export let onUpdate: (updatedTodo: Todo) => void;

	let isLoading = false;
	let isChecked = todo.isChecked;

	const handleRemove = async (todo: Todo) => {
		isLoading = true;

		await fetch(`/api/todos/${todo.id}`, {
			method: 'DELETE',
			headers: getCommonApiHeaders()
		});

		onRemove(todo);

		isLoading = false;
	};

	const handleChange = async (event: Event) => {
		const { checked } = event.target as HTMLInputElement;

		isLoading = true;
		isChecked = checked;

		const updatedTodo: Todo = {
			...todo,
			isChecked: checked
		};

		await fetch('/api/todos', {
			method: 'PUT',
			body: JSON.stringify(updatedTodo),
			headers: getCommonApiHeaders()
		});

		onUpdate(updatedTodo);

		isLoading = false;
	};
</script>

<li class={$$props.class} class:li-is-loading={isLoading}>
	<input
		type="checkbox"
		id={`todo-${todo.id}`}
		disabled={isLoading}
		bind:checked={isChecked}
		on:change={handleChange}
	/>&nbsp; <label for={`todo-${todo.id}`}>{`${index + 1}.`}&nbsp; {todo.todo}</label>&nbsp;
	<button on:click={() => handleRemove(todo)} disabled={isLoading}>Remove</button>
</li>

<style>
	li {
		border: 1px solid black;
		border-radius: 3px;
		padding: 16px;
	}

	.li-is-loading {
		background-color: darkgrey;
	}
</style>
