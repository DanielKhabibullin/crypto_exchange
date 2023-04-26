import {main} from '../../index.js';
import {createElement} from '../createElement.js';
/* eslint-disable max-len */

export const renderCurrencies2 = () => {
	main.innerHTML = `
	<div class="currencies__container">
		<h2 class="currencies__title">Здравствуйте, Александр!</h2>
		<button class="currencies__button button">Открыть новый счет</button>
		<div class="currencies__wrapper">
			<h3 class="currencies__wrapper-title">Мои счета</h3>
			<div class="currencies__sort">
				<span class="currencies__sort-title">Сортировка:</span>
				<select class="currencies__sort-select">
					<option id="account">Номер счёта</option>
					<option id="balance">Баланс</option>
					<option id="date">Дата открытия</option>
					<option id="last">Дата последней транзакции</option>
					</select>
			</div>
			<ul class="currencies__list">
				<li class="currencies__list-card">
					<a element="[object Object]" href="/account">
						<p class="currencies__list-card-id">74213041477477406320783754</p>
						<p class="currencies__list-card-balance">1 673.47</p>
						<div class="currencies__list-card-info">
							<div>
								<p>открыт</p>
								<p>10.03.2016</p>
							</div>
							<div>
								<p>последняя операция</p>
								<time datetime="2022-07-16T10:36:01.474Z">16.07.2022, 13:36</time>
							</div>
						</div>
					</a>
				</li>
				<li class="currencies__list-card">
					<a element="[object Object]" href="/account">
						<p class="currencies__list-card-id">20242487166007786614516318</p>
						<p class="currencies__list-card-balance">0</p>
						<div class="currencies__list-card-info">
							<div>
								<p>открыт</p>
								<p>10.03.2016</p>
							</div>
							<div>
								<p>последняя операция</p><span>Транзакций не было</span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
	`;
};

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
