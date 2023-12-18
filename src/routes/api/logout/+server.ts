import { json } from '@sveltejs/kit';

export const POST = async ({ cookies }) => {
	cookies.delete('token', { path: '/' });

	return json(true, { status: 200 });
};
