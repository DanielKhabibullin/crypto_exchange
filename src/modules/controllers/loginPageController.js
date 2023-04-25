/* eslint-disable max-len */
import {getUserToken} from '../fetch.js';
import {renderHeader} from '../render/renderHeader.js';
import {form, loginError, loginInput, passwordError, passwordInput,
	renderLogin, submitButton} from '../render/renderLogin.js';

export const loginPageController = () => {
	window.localStorage.clear();
	window.sessionStorage.clear();
	renderHeader();
	renderLogin();
	const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
	const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
	submitButton.disabled = true;

	const validateLogin = () => {
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

	const validatePassword = () => {
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

	loginInput.addEventListener('input', e => {
		const loginValue = e.target.value.trim();

		if (loginValue.length > 6) {
			validateLogin();
			return;
		} else {
			loginError.textContent = '';
			submitButton.disabled = true;
		}
	});
	loginInput.addEventListener('blur', () => {
		validateLogin();
	});


	passwordInput.addEventListener('input', e => {
		const passwordValue = e.target.value.trim();

		if (passwordValue.length > 6) {
			if (validateLogin() && validatePassword()) {
				submitButton.disabled = false;
			}
			return;
		} else {
			passwordError.textContent = '';
			submitButton.disabled = true;
		}
	});
	passwordInput.addEventListener('blur', () => {
		validatePassword();
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		// TODO preloader;
		getUserToken(loginInput.value, passwordInput.value);
	});
};


