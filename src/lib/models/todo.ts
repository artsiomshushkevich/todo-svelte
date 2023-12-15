const BASE_URL = 'https://shushman.tech/api/v1/todos';

export type Todo = {
	id: number;
	todo: string;
	isChecked: boolean;
};

const createDefaultHeaders = (token: string): RequestInit['headers'] => ({
	'Content-Type': 'application/json',
	Authorization: `Bearer ${token}`
});

export const getAll = (token: string) =>
	fetch(`${BASE_URL}/`, {
		method: 'GET',
		headers: createDefaultHeaders(token)
	}).then((response) => response.json() as unknown as Todo[]);

export const create = (todo: string, token: string) =>
	fetch(`${BASE_URL}/`, {
		method: 'POST',
		headers: createDefaultHeaders(token),
		body: JSON.stringify({ todo })
	}).then((response) => response.json() as unknown as Todo);

export const deleteById = (id: number, token: string) =>
	fetch(`${BASE_URL}/${encodeURIComponent(id)}`, {
		method: 'DELETE',
		headers: createDefaultHeaders(token)
	}).then((response) => response.json() as unknown as boolean);

export const update = (updatedTodo: Todo, token: string) =>
	fetch(`${BASE_URL}/${encodeURIComponent(updatedTodo.id)}`, {
		method: 'PUT',
		headers: createDefaultHeaders(token),
		body: JSON.stringify({ todo: updatedTodo.todo, isChecked: updatedTodo.isChecked })
	}).then((response) => response.json() as unknown as Todo);
