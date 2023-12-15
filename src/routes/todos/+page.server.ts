import { getAll } from '$lib/models/todo';

export const load = async ({ cookies }) => {
	const token = cookies.get('token') as string;

	const todos = await getAll(token);

	return {
		todos
	};
};
