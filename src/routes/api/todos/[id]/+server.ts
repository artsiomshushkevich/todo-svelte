import { json } from '@sveltejs/kit';
import { getCommonApiHeaders } from '$lib/utils/headers';
import { BASE_TODOS_URL } from '$lib/constants/urls';

export const DELETE = async ({ cookies, params, fetch }) => {
	const token = cookies.get('token') as string;

	await fetch(`${BASE_TODOS_URL}/${params.id}`, {
		method: 'DELETE',
		headers: getCommonApiHeaders(token)
	});

	return json(true, { status: 200 });
};
