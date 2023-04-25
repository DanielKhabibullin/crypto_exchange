/* eslint-disable require-jsdoc */
export const saveToSessionStorage = (key, data) => {
	try {
		window.sessionStorage.setItem(key, JSON.stringify(data));
	} catch (err) {
		alert('Failed to save data to local storage.');
	}
};

export const loadFromSessionStorage = (key) => {
	try {
		return JSON.parse(window.sessionStorage.getItem(key));
	} catch (err) {
		alert('Failed to load data from local storage.');
	}
};

export const saveToLocalStorage = (key, data) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(data));
	} catch (err) {
		alert('Failed to save data to local storage.');
	}
};

export const loadFromLocalStorage = (key) => {
	try {
		return JSON.parse(window.localStorage.getItem(key));
	} catch (err) {
		alert('Failed to load data from local storage.');
	}
};
