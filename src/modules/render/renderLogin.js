import {main} from '../../index.js';
import {createElement} from '../createElement.js';

const auth = createElement('div',
	{
		className: 'auth',
	},
);

const container = createElement('div',
	{
		className: 'auth__container',
	},
	{
		parent: auth,
	},
);

export const form = createElement('form',
	{
		className: 'auth__form',
	},
	{
		parent: container,
		append: createElement('legend',
			{
				className: 'auth__form-title',
				textContent: `Вход в аккаунт`,
			},
		),
	},
);

const loginWrapper = createElement('div',
	{
		className: 'auth__form-input-wrapper',
	},
	{
		parent: form,
		append: createElement('label',
			{
				className: 'auth__form-label',
				textContent: 'Логин',
			},
		),
	},
);

export const loginInput = createElement('input',
	{
		className: 'auth__form-input',
		name: 'login',
		placeholder: 'Введите логин',
	},
	{
		parent: loginWrapper,
	},
);

export const loginError = createElement('span',
	{
		className: 'auth__form-error',
	},
	{
		parent: loginWrapper,
	},
);

const passwordWrapper = createElement('div',
	{
		className: 'auth__form-input-wrapper',
	},
	{
		parent: form,
		append: createElement('label',
			{
				className: 'auth__form-label',
				textContent: 'Пароль',
			},
		),
	},
);

export const passwordError = createElement('div',
	{
		className: 'auth__form-error',
	},
	{
		parent: passwordWrapper,
	},
);

export const passwordInput = createElement('input',
	{
		className: 'auth__form-input',
		type: 'password',
		name: 'password',
		placeholder: 'Введите пароль',
		autocomplete: 'off',
	},
	{
		parent: passwordWrapper,
	},
);

export const submitButton = createElement('button',
	{
		className: 'auth__form-button  button',
		textContent: 'Войти', type: 'submit',
	},
	{
		parent: form,
	},
);

export const renderLogin = () => {
	main.innerHTML = '';
	main.append(auth);
};

