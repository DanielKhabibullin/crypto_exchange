import {main} from '../../index.js';
import {createElement} from '../createElement.js';
/* eslint-disable max-len */

const accounts = createElement('div',
	{
		className: 'currencies__container',
	},
	{
		append: createElement('h2',
			{
				className: 'currencies__title',
				textContent: 'Здравствуйте, Username!',
			},
		),
	},
);

export const createAccountBtn = createElement('button',
	{
		className: 'currencies__button button',
		textContent: 'Открыть новый счет',
	},
	{
		parent: accounts,
	},
);

const accountsWrapper = createElement('div',
	{
		className: 'currencies__wrapper',
	},
	{
		parent: accounts,
		append: createElement('h3',
			{
				className: 'currencies__wrapper-title',
				textContent: 'Мои счета',
			},
		),
	},
);

const accountsSort = createElement('div',
	{
		className: 'currencies__sort',
	},
	{
		parent: accountsWrapper,
		append: createElement('span',
			{
				className: 'currencies__sort-title',
				textContent: 'Сортировка',
			},
		),
	},
);

export const accountsSelect = createElement('select',
	{
		className: 'currencies__sort-select',
		innerHTML: `
			<option id="account">Номер счёта</option>
			<option id="balance">Баланс</option>
			<option id="date">Дата открытия</option>
			<option id="transaction">Дата последней транзакции</option>
		`,
	},
	{
		parent: accountsSort,
	},
);

export const accountsList = createElement('div',
	{
		className: 'currencies__list',
	},
	{
		parent: accountsWrapper,
	},
);


export const renderAccounts = () => {
	main.innerHTML = '';
	main.append(accounts);
};
