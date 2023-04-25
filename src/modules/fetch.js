export const urlApi = 'http://localhost:3000';

export const getUserToken = async (userLogin, userPassword) => {
	const response = await fetch(`${urlApi}/login`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			login: userLogin,
			password: userPassword,
		}),
	});
	return response.json();
};

export const getUserAccounts = async (token) => {
	const response = await fetch(`${urlApi}/accounts`, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export const createNewAccount = async (token) => {
	const response = await fetch(`${urlApi}/create-account`, {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export const getUserAccount = async (token, id) => {
	const response = await fetch(`${urlApi}/account/${id}`, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export const createTransferFunds = async (from, to, amount, token) => {
	const response = await fetch(`${urlApi}/transfer-funds`, {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({from, to, amount}),
	});
	return response.json();
};

export const getAllCurrencies = async (token) => {
	const response = await fetch(`${urlApi}/all-currencies`, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
	});

	return response.json();
};

export const getUserCurrencies = async (token) => {
	const response = await fetch(`${urlApi}/currencies`, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export const getCurrencyFeed = async (token) => {
	const response = await fetch(`${urlApi}/currency-feed`, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export const createCurrencyBuy = async (from, to, amount, token) => {
	const response = await fetch(`${urlApi}/currency-buy`, {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({from, to, amount}),
	});
	return response.json();
};
