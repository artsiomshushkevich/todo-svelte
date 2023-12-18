export const load = async ({ cookies }) => {
	const token = cookies.get('token') as string;

	return {
		isAuthenticated: !!token
	};
};
