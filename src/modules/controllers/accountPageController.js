import {main} from '../../index.js';
import {createTransferFunds, getUserAccount} from '../fetch.js';
import {createAccountTransactionForm,
	renderAccountPage} from '../render/renderAccountPage.js';
import {loadFromSessionStorage} from '../storage.js';

export const accountPageController = async (token, id) => {
	const formResult = await createAccountTransactionForm();
	const {
		form,
		accountNumber,
		transactionAmount,
		transactionSubmit,
	} = formResult;
	// transactionSubmit.setAttribute('disabled', 'true');

	// TODO preloader
	getUserAccount(token, id)
		.then((res) => {
			main.innerHTML = '';
			return renderAccountPage(res.payload, form);
		})
		.catch((err) => {
			console.error(err.message);
		})
		.finally(() => {
		// TODO preloader
		});

	accountNumber.addEventListener('input', () => {
		console.log(accountNumber.value);
	});

	transactionAmount.addEventListener('input', () => {
		console.log(transactionAmount.value);
	});

	form.addEventListener('submit', e => {
		e.preventDefault();
		const answer = confirm('Вы уверены?');
		if (!answer) return;

		const token = loadFromSessionStorage('token');
		createTransferFunds(id, accountNumber.value, transactionAmount.value, token)
			.then((res) => {
				main.innerHTML = '';
				renderAccountPage(res.payload, form);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				// TODO off preloader
				accountNumber.value = '';
				transactionAmount.value = '';
			});
	});
};
