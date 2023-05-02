import {el, mount} from 'redom';
import {main} from '../../index.js';
import {createCanvas} from '../tools/createCanvas.js';
/* eslint-disable max-len */

export const createAccountTransactionForm = () => {
	const accountNumber = el('input.account__transaction-input', {name: 'to'});
	const transactionAmount = el('input.account__transaction-input', {name: 'amount'});
	const transactionSubmit = el('button.account__button.button', 'Перевести', {type: 'submit'});
	const form = el('form.account__transaction-form', [
		el('div.account__transaction-input-wrapper', [
			el('label.account__transaction-label', 'Счет'),
			accountNumber,
		]),
		el('div.account__transaction-input-wrapper', [
			el('label.account__transaction-label', 'Сумма'),
			transactionAmount,
		]),
		transactionSubmit,
	]);

	return {form, accountNumber, transactionAmount, transactionSubmit};
};

export const renderAccountPage = (accountData, form) => {
	const backButton = el('a.account__button.button', {href: '/#/accounts'}, [
		el('svg', {
			innerHTML: `
				<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z" fill="white"></path>
				</svg>
			`,
		}),
	],
	'Вернуться',
	);

	const dynamicTitle = el('h3.account__dynamic-title', 'Динамика');
	const dynamicYear = el('span.account__dynamic-year', accountData.date?.slice(0, 4));
	const years = [];

	accountData.transactions.forEach(transaction => {
		const year = new Date(transaction.date).getFullYear();
		if (!years.includes(year.toString())) {
			years.push(year.toString());
		}
	});
	years.reverse();
	years.unshift('Год');

	const yearOptions = years;
	const yearSelect = el('select.account__dynamic-select', yearOptions.map((year) => el('option', {text: year, hidden: year === 'Год'})));
	const accountDynamicHeader = el('div.account__dynamic-header', [dynamicTitle, dynamicYear, yearSelect]);

	const historyTitle = el('h3.account__history-title', 'История переводов');
	// const historyTransactions = accountData.transactions.slice(0, 9);

	const table = el('table.account__table-table', [
		el('thead.account__table-thead', el('tr', [
			el('th.account__table-th', 'Счет'),
			el('th.account__table-th', 'Сумма'),
			el('th.account__table-th', 'Дата'),
		])),
		el('tbody.account__table-tbody', accountData.transactions.map((transaction) => {
			const isFromCurrentAccount = transaction.from === accountData.account;
			const amountClass = isFromCurrentAccount ? 'account__table-td-negative' : '';
			const amount = isFromCurrentAccount ? -transaction.amount : transaction.amount;
			const accountNumber = isFromCurrentAccount ? transaction.to : transaction.from;
			return el('tr', [
				el('td.account__table-td.undefined', accountNumber),
				el(`td.account__table-td.account__table-td-middle ${amountClass}`, amount),
				el('td.account__table-td.account__table-td-date', new Date(transaction.date).toLocaleDateString()),
			]);
		})),
	]);
	const tableContainer = el('div.account__table-container', table);
	const accountHistory = el('div.account__history', [historyTitle, tableContainer]);

	const transactionTitle = el('h3.account__title.account__transaction-title', 'Перевод');
	const accountTransaction = el('div.account__transaction', [transactionTitle, form]);
	const accountTitle = el('h2.account__title', `Счет №${accountData.account}`);
	const accountHeader = el('div.account__container-header', [accountTitle, backButton]);

	if (accountData.transactions.length > 0) {
		const canvas = createCanvas(accountData);
		const accountDynamic = el('div.account__dynamic', [accountDynamicHeader, canvas]);
		const accountContainer = el('div.account__container', [accountHeader, accountDynamic, accountHistory, accountTransaction]);
		mount(main, accountContainer);
	} else {
		const accountDynamic = el('div.account__dynamic', [accountDynamicHeader]);
		const accountContainer = el('div.account__container', [accountHeader, accountDynamic, accountHistory, accountTransaction]);
		mount(main, accountContainer);
	}
};
