import {loginError, loginInput, passwordError,
	passwordInput} from '../render/renderLogin.js';


export const validateLogin = () => {
	const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
	const loginValue = loginInput.value.trim();

	if (!loginValue) {
		loginError.textContent = 'Please type login.';
		return false;
	}

	if (!loginRegex.test(loginValue)) {
		loginError.textContent = 'Login must start with a letter and contain only latin letters and numbers (at least 6 characters).';
		return false;
	}

	loginError.textContent = '';
	return true;
};

export const validatePassword = () => {
	const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
	const passwordValue = passwordInput.value.trim();

	if (!passwordValue) {
		passwordError.textContent = 'Please type password.';
		return false;
	}

	if (!passwordRegex.test(passwordValue)) {
		passwordError.textContent = 'Password must contain only latin letters and numbers (at least 6 characters).';
		return false;
	}

	passwordError.textContent = '';
	return true;
};
