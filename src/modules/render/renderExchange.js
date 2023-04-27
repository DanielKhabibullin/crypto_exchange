import {el, mount} from 'redom';
import {main} from '../../index.js';
import { getUserCurrencies } from '../fetch.js';
import { loadFromSessionStorage } from '../storage.js';
/* eslint-disable max-len */

const renderExchangeContainer = ({accountNumber, balance}) =>
	el('.exchange__container',
		el('h2.exchange__title', 'Обмен валюты'),
		el('div.exchange__account-info',
			el('span.exchange__text', 'Счет'),
			el('span.exchange__text-white', accountNumber),
		),
		el('div.exchange__balance-info',
			el('span.exchange__text', 'Баланс '),
			el('span.exchange__text-white.exchange__balance', balance),
		),
	);

const renderExchangeRatesWrapper = () => {
	const exchangeRatesWrapper = el('.exchange__rates-wrapper',
		el('h3.exchange__rates-title', 'Изменение курса в режиме реального времени'),
		el('.exchange__tbody'),
	);
	const exchangeRatesTable = exchangeRatesWrapper.children[1];

	const renderExchangeRates = ({from, to, rate, change}) => {
		const tr = el('.exchange__tr',
			el('span.exchange__td-first', `${from}/${to}`),
			el('span.exchange__td-second'),
			el('span.exchange__td-third', rate.toFixed(2),
				el('svg', {innerHTML: `<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="${change === 1 ? '#0EFF0A' : '#FF6347'}"/></svg>`}),
			),
		);

		exchangeRatesTable.prepend(tr);

		if (exchangeRatesTable.childNodes.length > 10) {
			exchangeRatesTable.childNodes[10].remove();
		}
	};
	const socket = new WebSocket('ws://localhost:3000/currency-feed');

	socket.addEventListener('message', message => {
		renderExchangeRates(JSON.parse(message.data));
	});

	socket.addEventListener('error', err => {
		console.log(err);
	});
	return exchangeRatesWrapper;
};

const renderExchangeFormWrapper = () =>
	el('.exchange__form-wrapper',
		el('h3.exchange__right-title', 'Обмен валюты'),
		el('form.exchange__form',
			el('.exchange__form-input',
				el('.exchange__form-input-wrapper',
					el('label.exchange__form-label', 'Откуда'),
					el('select.exchange__form-select', {name: 'from'},
						el('option', 'AUD'),
						el('option', 'BTC'),
						el('option', 'BYR'),
						el('option', 'CAD'),
					),
				),
				el('.exchange__form-input-wrapper',
					el('label.exchange__form-label', 'Куда'),
					el('select.exchange__form-select', {name: 'to'},
						el('option', 'AUD'),
						el('option', 'BTC'),
						el('option', 'BYR'),
						el('option', 'CAD'),
					),
				),
				el('.exchange__form-input-wrapper',
					el('span.exchange__form-error'),
					el('label.exchange__form-label', 'Сумма'),
					el('input.exchange__form-select', {name: 'amount'}),
				),
			),
			el('button.exchange__form-submit.button', {type: 'submit'}, 'Обменять'),
		),
	);

// const renderTable = () => el('div',
// 	el('table',
// 		el('thead',
// 			el('tr',
// 				el('th.exchange__right-th', {colspan: '2'}, 'Мои валюты'),
// 			),
// 		),
// 		el('tbody',
// 			el('tr',
// 				el('td.exchange__right-td-code', 'AUD'),
// 				el('td.exchange__right-td-amount', '18.16'),
// 			),
// 		),
// 	),
// );

const renderTable = async () => {
	const token = loadFromSessionStorage('token');
	const response = await getUserCurrencies(token);
	const currencies = response.payload;

	const table = el('div',
		el('table',
			el('thead',
				el('tr',
					el('th.exchange__right-th', {colspan: '2'}, 'Мои валюты'),
				),
			),
			el('tbody'),
		),
	);

	const tbody = table.querySelector('tbody');

	for (const currency of Object.values(currencies)) {
		const tr = el('tr',
			el('td.exchange__right-td-code', currency.code),
			el('td.exchange__right-td-amount', currency.amount.toFixed(2)),
		);

		tbody.appendChild(tr);
	}

	return table;
};

export const renderExchange = async () => {
	main.innerHTML = '';
	const accountInfo = {accountNumber: '24051911200915061003240821', balance: '6 795 296.36'};
	const exchangeContainer = renderExchangeContainer(accountInfo);
	const exchangeRatesWrapper = renderExchangeRatesWrapper();
	const exchangeFormWrapper = renderExchangeFormWrapper();
	const exchangeRightWrapper = el('.exchange__right-wrapper');
	const exchangeWrapper = el('.exchange__wrapper');
	const table = await renderTable();
	exchangeRightWrapper.appendChild(exchangeFormWrapper);
	exchangeRightWrapper.appendChild(table);
	exchangeWrapper.appendChild(exchangeRatesWrapper);
	exchangeWrapper.appendChild(exchangeRightWrapper);
	exchangeContainer.appendChild(exchangeWrapper);

	mount(main, exchangeContainer);
};
