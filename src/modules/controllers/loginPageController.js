/* eslint-disable max-len */
import {getUserAccounts, getUserToken} from '../fetch.js';
import {renderHeader} from '../render/renderHeader.js';
import {form, loginError, loginInput, passwordError, passwordInput,
	renderLogin, submitButton} from '../render/renderLogin.js';
import {saveToSessionStorage} from '../storage.js';
import {validateLogin, validatePassword} from '../tools/validate.js';
import {accountsPageController} from './accountsPageController.js';

export const loginPageController = () => {
	window.localStorage.clear();
	window.sessionStorage.clear();
	renderHeader();
	renderLogin();
	submitButton.disabled = true;

	loginInput.addEventListener('input', e => {
		const loginValue = e.target.value.trim();

		if (loginValue.length > 5) {
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

		if (passwordValue.length > 5) {
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
		getUserToken(loginInput.value, passwordInput.value)
			.then((res) => {
				saveToSessionStorage('token', res.payload.token);
				return getUserAccounts(res.payload.token);
			})
			.then((res) => {
				window.location.hash = '#/accounts';
				saveToSessionStorage('accountsData', res.payload);
				accountsPageController(res.payload);
			})
			.catch((err) => {
				console.log(err.message);
				// TODO error;
			})
			.finally(() => {
				// TODO preloader off;
			});
	});
};
