import { redirect } from '@sveltejs/kit';
import { type CookieSerializeOptions } from 'cookie';
import { BASE_AUTH_URL } from '$lib/constants/urls';
import { type SignInAndSingUpResponse } from '$lib/types/auth';
import { getCommonApiHeaders } from '$lib/utils/headers';

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

		const { token } = await fetch(`${BASE_AUTH_URL}/login`, {
			method: 'POST',
			headers: getCommonApiHeaders(),
			body: JSON.stringify({ username, password })
		}).then((response) => response.json() as unknown as SignInAndSingUpResponse);

		cookies.set('token', token, TOKEN_COOKIE_CONFIG);

		redirect(303, '/todos');
	},
	signup: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		const { token } = await fetch(`${BASE_AUTH_URL}/signup`, {
			method: 'POST',
			headers: getCommonApiHeaders(),
			body: JSON.stringify({ username, password })
		}).then((response) => response.json() as unknown as SignInAndSingUpResponse);

		cookies.set('token', token, TOKEN_COOKIE_CONFIG);

		redirect(303, '/todos');
	}
};
