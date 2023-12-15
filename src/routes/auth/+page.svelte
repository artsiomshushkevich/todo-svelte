<script lang="ts">
	let username = '';
	let password = '';
	let isSignUpForm = false;
	let isLoading = false;

	$: isSubmissionEnabled = !!(username.length > 0 && password.length >= 8) || isLoading;
</script>

<svelte:head>
	<title>Auth</title>
	<meta name="description" content="Log in or sign up to organize your todos" />
</svelte:head>

<form method="POST" action={isSignUpForm ? '?/signup' : '?/login'}>
	<div class="input-wrapper">
		<label class="input-text-label" for="usernname">Email:</label>
		<input
			type="email"
			name="username"
			id="username"
			bind:value={username}
			placeholder="Enter email"
		/>
	</div>

	<div class="input-wrapper">
		<label class="input-text-label" for="password">Password:</label>
		<input
			bind:value={password}
			type="password"
			name="password"
			id="password"
			placeholder="Enter password (more than 8 characters length)"
			autocomplete="off"
		/>
	</div>

	<div class="input-wrapper">
		<input type="checkbox" id="isSignUpForm" bind:value={isSignUpForm} />&nbsp;
		<label for="isSignUpForm">Should create new account?</label>
	</div>

	<button disabled={!isSubmissionEnabled}>{isLoading ? 'Loading' : 'Submit'}</button>
</form>

<style>
	.input-wrapper {
		margin-bottom: 16px;
	}

	.input-text-label {
		display: block;
		margin-bottom: 8px;
	}
</style>
