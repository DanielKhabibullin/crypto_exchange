import {el, mount} from 'redom';
import {main} from '../../index.js';
import {getAllCurrencies} from '../fetch.js';
import {loadFromSessionStorage} from '../storage.js';
/* eslint-disable max-len */

const renderExchangeContainer = () =>
	el('.exchange__container',
		el('h2.exchange__title', 'Обмен валюты'),
	);

const renderExchangeRatesWrapper = () => {
	const exchangeRatesWrapper = el('.exchange__rates-wrapper',
		el('h3.exchange__rates-title', 'Изменение курса в режиме реального времени'),
		el('.exchange__tbody'),
	);
	const exchangeRatesTable = exchangeRatesWrapper.children[1];

	const renderExchangeRates = ({from, to, rate, change}) => {
		const up = `<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"/></svg>`;
		const down = `<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.5 6.5L0.602886 0.5H8.39711L4.5 6.5Z" fill="#FF6347"></path>
		</svg>`;
		const tr = el('.exchange__tr',
			el('span.exchange__td-first', `${from}/${to}`),
			el('span.exchange__td-second'),
			el('span.exchange__td-third', `${rate < 10 ? 0 + rate.toFixed(2) : rate.toFixed(2)}`,
				el('svg', {innerHTML: `${change === 1 ? up : down}`}),
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

export const renderExchangeFormWrapper = async () => {
	const token = loadFromSessionStorage('token');
	const currencies = await getAllCurrencies(token);

	const fromSelect = el('select.exchange__form-select', {name: 'from'});
	const toSelect = el('select.exchange__form-select', {name: 'to'});
	const amount = el('input.exchange__form-select', {name: 'amount'});
	const exchangeSubmit = el('button.exchange__form-submit.button', {type: 'submit'}, 'Обменять');

	for (const currency of currencies.payload) {
		const option = el('option', currency);
		fromSelect.appendChild(option.cloneNode(true));
		toSelect.appendChild(option);
	}

	const form = el('form.exchange__form',
		el('.exchange__form-input',
			el('.exchange__form-input-wrapper',
				el('label.exchange__form-label', 'Откуда'),
				fromSelect,
			),
			el('.exchange__form-input-wrapper',
				el('label.exchange__form-label', 'Куда'),
				toSelect,
			),
			el('.exchange__form-input-wrapper',
				el('span.exchange__form-error'),
				el('span.exchange__form-success'),
				el('label.exchange__form-label', 'Сумма'),
				amount,
			),
		),
		exchangeSubmit,
	);

	return {
		formWrapper: el('.exchange__form-wrapper',
			el('h3.exchange__form-title', 'Обмен валюты'),
			form,
		),
		fromSelect,
		toSelect,
		amount,
		exchangeSubmit,
	};
};

export const renderTable = async (currencies) => {
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

export const renderExchange = async (formResult, currencies) => {
	main.innerHTML = '';
	const exchangeContainer = renderExchangeContainer();
	const exchangeRatesWrapper = renderExchangeRatesWrapper();
	const {
		formWrapper,
	} = formResult;
	const exchangeRightWrapper = el('.exchange__right-wrapper');
	const exchangeWrapper = el('.exchange__wrapper');
	const table = await renderTable(currencies);
	exchangeRightWrapper.appendChild(formWrapper);
	exchangeRightWrapper.appendChild(table);
	exchangeWrapper.appendChild(exchangeRatesWrapper);
	exchangeWrapper.appendChild(exchangeRightWrapper);
	exchangeContainer.appendChild(exchangeWrapper);

	mount(main, exchangeContainer);
};

