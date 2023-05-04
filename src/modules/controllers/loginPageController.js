/* eslint-disable max-len */
import { main } from '../../index.js';
import {createElement} from '../createElement.js';
import {getUserToken} from '../fetch.js';
import {renderHeader} from '../render/renderHeader.js';
import {form, loginError, loginInput, passwordError, passwordInput,
	renderLogin, submitButton} from '../render/renderLogin.js';
import {router} from '../router.js';
import {saveToSessionStorage} from '../storage.js';
import { preloader } from '../tools/loader.js';
import {validateLogin, validatePassword} from '../tools/validate.js';


export const loginPageController = () => {
	window.localStorage.clear();
	window.sessionStorage.clear();
	renderHeader();
	renderLogin();
	submitButton.disabled = true;
	loginInput.value = '';
	passwordInput.value = '';

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

	form.addEventListener('submit', async e => {
		e.preventDefault();
		preloader(true);
		try {
			const tokenResponse = await getUserToken(loginInput.value, passwordInput.value);
			const token = tokenResponse.payload.token;
			saveToSessionStorage('token', token);

			router.navigate('/accounts');
		} catch (err) {
			console.error(err);
			const error = document.querySelector('.error');
			if (error) error.remove();
			setTimeout(() => {
				createElement('h2', {
					textContent: `${err.message}`,
					className: 'error',
				},
				{
					parent: form,
					cb(h2) {
						h2.style.textAlign = 'center';
					},
				},
				);
			}, 3000);
		} finally {
			preloader();
		}
	});
};
