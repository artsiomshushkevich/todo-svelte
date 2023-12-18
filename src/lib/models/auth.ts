import { getCommonApiHeaders } from '$lib/utils/headers';

const BASE_URL = 'https://shushman.tech/api/v1/auth';

export type SignInAndSingUpResponse = {
	token: string;
};

export const logIn = (username: string, password: string) =>
	fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: getCommonApiHeaders(),
		body: JSON.stringify({ username, password })
	}).then((response) => response.json() as unknown as SignInAndSingUpResponse);

export const signUp = (username: string, password: string) =>
	fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: getCommonApiHeaders(),
		body: JSON.stringify({ username, password })
	}).then((response) => response.json() as unknown as SignInAndSingUpResponse);
