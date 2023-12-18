import { type Todo } from '$lib/types/todos';
import { getCommonApiHeaders } from '$lib/utils/headers';

export const load = async ({ fetch }) => {
	let response = await fetch('/api/todos/', {
		method: 'GET',
		headers: getCommonApiHeaders()
	});

	if (response.status === 308) {
		const redirectUrl = response.headers.get('Location') as string;

		response = await fetch(redirectUrl as string, {
			method: 'GET',
			headers: getCommonApiHeaders()
		});
	}

	return {
		todos: (await response.json()) as unknown as Todo[]
	};
};
