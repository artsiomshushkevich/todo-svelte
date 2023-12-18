import { json } from '@sveltejs/kit';
import { getCommonApiHeaders } from '$lib/utils/headers';
import { BASE_TODOS_URL } from '$lib/constants/urls';
import { type Todo } from '$lib/types/todos';

export const GET = async ({ cookies, fetch }) => {
	const token = cookies.get('token') as string;
	const todos = await fetch(`${BASE_TODOS_URL}/`, {
		method: 'GET',
		headers: getCommonApiHeaders(token)
	}).then((response) => response.json() as unknown as Todo[]);

	return json(todos, {
		status: 200
	});
};

export const POST = async ({ cookies, request, fetch }) => {
	const token = cookies.get('token') as string;

	const todo = await fetch(`${BASE_TODOS_URL}/`, {
		method: 'POST',
		headers: getCommonApiHeaders(token),
		body: await request.json()
	}).then((response) => response.json() as unknown as Todo);

	return json(todo, { status: 201 });
};

export const PUT = async ({ cookies, request, fetch }) => {
	const body = (await request.json()) as Todo;
	const token = cookies.get('token') as string;

	const todo = await fetch(`${BASE_TODOS_URL}/${body.id}`, {
		method: 'PUT',
		headers: getCommonApiHeaders(token),
		body: JSON.stringify({ todo: body.todo, isChecked: body.isChecked })
	}).then((response) => response.json() as unknown as Todo);

	return json(todo, { status: 200 });
};
