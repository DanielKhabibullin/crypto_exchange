/* eslint-disable max-len */
import {el, mount} from 'redom';
import {createElement} from '../createElement.js';

const main = document.querySelector('.main');

export const renderLogin1 = () => {
	main.innerHTML = `
	<div class="auth">
		<div class="auth__container">
			<form class="auth__form">
				<legend class="auth__form-title">Вход в аккаунт</legend>
				<div class="auth__form-input-wrapper">
					<span class="auth__form-error"></span>
					<label class="auth__form-label">Логин</label>
					<input class="auth__form-input" name="login">
				</div>
				<div class="auth__form-input-wrapper">
					<span class="auth__form-error"></span>
					<label class="auth__form-label">Пароль</label>
					<input type="password" class="auth__form-input" name="password">
				</div>
				<button class="auth__form-button button" type="submit">Войти</button>
			</form>
		</div>
	</div>
	`;
};

export const renderLogin2 = () => {
	const loginError = el('span.auth__form-error');
	const loginInput = el('input.auth__form-input', {name: 'login'});
	const passwordError = el('span.auth__form-error');
	const passwordInput = el('input.auth__form-input',
		{type: 'password', name: 'password'});
	const submitButton = el('button.auth__form-button.button',
		{type: 'submit'}, 'Войти');

	const form = el('form.auth__form',
		el('legend.auth__form-title', 'Вход в аккаунт'),
		el('.auth__form-input-wrapper',
			loginError,
			el('label.auth__form-label', 'Логин'),
			loginInput,
		),
		el('.auth__form-input-wrapper',
			passwordError,
			el('label.auth__form-label', 'Пароль'),
			passwordInput,
		),
		submitButton,
	);

	const container = el('.auth__container', form);
	const auth = el('.auth', container);

	mount(document.querySelector('.main'), auth);
	const loginErrorEl = auth.querySelector('.auth__form-input-wrapper:nth-child(1) .auth__form-error');
	const loginInputEl = auth.querySelector('.auth__form-input[name="login"]');
	const passwordErrorEl = auth.querySelector('.auth__form-input-wrapper:nth-child(2) .auth__form-error');
	const passwordInputEl = auth.querySelector('.auth__form-input[name="password"]');
	const submitButtonEl = auth.querySelector('.auth__form-button');

	return {loginErrorEl, loginInputEl, passwordErrorEl, passwordInputEl, submitButtonEl};
};

// const auth = createElement('div', {className: 'auth'});

// const container = createElement('div', {className: 'auth__container'}, {parent: auth});

// export const form = createElement('form',
// 	{className: 'auth__form'},
// 	{parent: container},
// );
// createElement('legend', {className: 'auth__form-title', textContent: `Вход в аккаунт`}, {parent: form});
// const loginWrapper = createElement('div', {className: 'auth__form-input-wrapper'}, {parent: form});
// createElement('span', {className: 'auth__form-error'}, {parent: loginWrapper});
// createElement('label', {className: 'auth__form-label', textContent: 'Логин'}, {parent: loginWrapper});
// export const loginInput = createElement('input', {className: 'auth__form-input', name: 'login', placeholder: 'Введите логин'}, {parent: loginWrapper});

// const passwordWrapper = createElement('div', {className: 'auth__form-input-wrapper'}, {parent: form});

// createElement('span', {className: 'auth__form-error'}, {parent: passwordWrapper});
// createElement('label', {className: 'auth__form-label', textContent: 'Пароль'}, {parent: passwordWrapper});

// export const passwordInput = createElement('input', {className: 'auth__form-input', type: 'password', name: 'password', placeholder: 'Введите пароль'}, {parent: passwordWrapper});

// export const submitButton = createElement('button', {className: 'auth__form-button  button', textContent: 'Войти', type: 'submit'}, {parent: form});

// export const renderLogin = () => {
	// main.innerHTML = ''; // TODO
// 	main.append(auth);
// };

