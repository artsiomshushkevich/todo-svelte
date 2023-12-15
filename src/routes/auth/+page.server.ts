import { redirect } from '@sveltejs/kit';
import { logIn, signUp } from '$lib/models/auth';
import type { CookieSerializeOptions } from 'cookie';

const TOKEN_COOKIE_CONFIG: CookieSerializeOptions & { path: string } = {
	path: '/',
	httpOnly: true,
	secure: true
};

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		const { token } = await logIn(username, password);

		cookies.set('token', token, TOKEN_COOKIE_CONFIG);

		redirect(303, '/todos');
	},
	signup: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		const { token } = await signUp(username, password);

		cookies.set('token', token, TOKEN_COOKIE_CONFIG);

		redirect(303, '/todos');
	}
};
