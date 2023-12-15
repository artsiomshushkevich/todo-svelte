const BASE_URL = 'https://shushman.tech/api/v1/auth';

export type SignInAndSingUpResponse = {
	token: string;
};

export const logIn = (username: string, password: string) =>
	fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	}).then((response) => response.json() as unknown as SignInAndSingUpResponse);

export const signUp = (username: string, password: string) =>
	fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	}).then((response) => response.json() as unknown as SignInAndSingUpResponse);
