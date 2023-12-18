<script lang="ts">
	import { getCommonApiHeaders } from '$lib/utils/headers';
	import { type Todo } from '$lib/types/todos';

	export let onSuccess: (newTodo: Todo) => void;

	let todo = '';
	let isLoading = false;
	$: isSubmissionEnabled = todo.length > 0 && !isLoading;

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		isLoading = true;

		const newTodo = await fetch('/api/todos', {
			method: 'POST',
			body: JSON.stringify({ todo }),
			headers: getCommonApiHeaders()
		}).then((res) => res.json());

		onSuccess(newTodo);

		todo = '';
		isLoading = false;
	};
</script>

<form on:submit={handleSubmit}>
	<div class="input-wrapper">
		<label class="input-text-label" for="todo">New todo:</label>
		<input
			disabled={isLoading}
			bind:value={todo}
			type="text"
			name="todo"
			id="todo"
			placeholder="Enter todo"
		/>
		&nbsp;
		<button disabled={!isSubmissionEnabled}>{isLoading ? 'Loading' : 'Add'}</button>
	</div>
</form>

<style>
	form {
		padding: 16px 16px;
		border: 1px solid black;
		border-radius: 3px;
	}

	.input-wrapper {
		margin-bottom: 16px;
	}

	.input-text-label {
		display: block;
		margin-bottom: 8px;
	}
</style>
