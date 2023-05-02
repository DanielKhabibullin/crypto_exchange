import {main} from '../../index.js';
import {el} from 'redom';
import {createTransferFunds, getUserAccount} from '../fetch.js';
import {createAccountTransactionForm,
	renderAccountPage} from '../render/renderAccountPage.js';
import {loadFromSessionStorage} from '../storage.js';

export const accountPageController = async (token, id, accountsData) => {
	const formResult = createAccountTransactionForm();
	const {
		form,
		accountNumber,
		transactionAmount,
		transactionSubmit,
		accountTransaction,
	} = formResult;
	transactionSubmit.setAttribute('disabled', 'true');

	const accountMessage =
		el('p.account__transaction-message', {style: 'display: none;'});
	const amountMessage =
		el('p.account__transaction-message', {style: 'display: none;'});
	const successMessage =
		el('p.account__transaction-success-message', {style: 'display: none;'});
	const formMessages = el('div.account__transaction-messages',
		[accountMessage, amountMessage, successMessage]);
	accountTransaction.appendChild(formMessages);

	// TODO preloader
	getUserAccount(token, id)
		.then((res) => {
			main.innerHTML = '';
			return renderAccountPage(res.payload, accountTransaction);
		})
		.catch((err) => {
			console.error(err.message);
		})
		.finally(() => {
		// TODO preloader
		});

	accountNumber.addEventListener('input', () => {
		const accountExists = accountsData.some(accountData =>
			accountData.account === accountNumber.value);
		if (accountNumber.value === id) {
			accountMessage.textContent =
				`You can't transfer money to your own account`;
			accountMessage.style.display = 'block';
			transactionSubmit.setAttribute('disabled', 'true');
			return;
		}
		if (!accountExists) {
			accountMessage.textContent = 'Invalid account number';
			accountMessage.style.display = 'block';
			transactionSubmit.setAttribute('disabled', 'true');
		} else {
			accountMessage.style.display = 'none';
		}
	});

	transactionAmount.addEventListener('input', () => {
		if (isNaN(transactionAmount.value) || transactionAmount.value <= 0) {
			amountMessage.textContent = 'Invalid transaction amount';
			amountMessage.style.display = 'block';
			transactionSubmit.setAttribute('disabled', 'true');
		} else if (transactionAmount.value > accountsData.find(accountData =>
			accountData.account === id).balance) {
			amountMessage.textContent = 'Insufficient funds';
			amountMessage.style.display = 'block';
			transactionSubmit.setAttribute('disabled', 'true');
		} else {
			amountMessage.style.display = 'none';
			transactionSubmit.removeAttribute('disabled');
		}
	});

	form.addEventListener('submit', e => {
		e.preventDefault();
		const answer = confirm('Вы уверены?');
		if (!answer) return;

		const token = loadFromSessionStorage('token');
		createTransferFunds(id, accountNumber.value, transactionAmount.value, token)
			.then((res) => {
				successMessage.textContent = 'Transaction successful';
				successMessage.style.display = 'block';
				main.innerHTML = '';
				renderAccountPage(res.payload, accountTransaction);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				// TODO off preloader
				accountNumber.value = '';
				transactionAmount.value = '';
				transactionSubmit.setAttribute('disabled', 'true');
				accountMessage.style.display = 'none';
				amountMessage.style.display = 'none';
				setTimeout(() => {
					successMessage.style.display = 'none';
				}, 3000);
			});
	});
};
