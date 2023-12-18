import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const token = cookies.get('token') as string;

	if (token) {
		redirect(303, '/todos');
	} else {
		redirect(303, '/auth');
	}
};
