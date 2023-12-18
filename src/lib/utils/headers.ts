export const getCommonApiHeaders = (token?: string): RequestInit['headers'] => ({
	'Content-Type': 'application/json',
	...(token ? { Authorization: `Bearer ${token}` } : {})
});
