import {main} from '../../index.js';
import {createTransferFunds, getUserAccount} from '../fetch.js';
import {renderAccountHistoryPage,
} from '../render/renderAccountHistoryPage.js';
import {renderAccountPage} from '../render/renderAccountPage.js';
import { loadFromSessionStorage } from '../storage.js';

export const accountPageController = (token, id, history = false) => {
	if (!history) {
		// TODO preloader
		getUserAccount(token, id)
			.then((res) => {
				main.innerHTML = '';
				console.log(res.payload);
				return renderAccountPage(res.payload);
			})
			.catch((err) => {
				console.error(err.message);
			})
			.finally(() => {
			// TODO preloader
			});
	} else {
		// TODO preloader
		getUserAccount(token, id)
			.then((res) => {
				main.innerHTML = '';
				return renderAccountHistoryPage(res.payload);
			})
			.catch((err) => {
				console.log('err.message: ', err.message);
			})
			.finally(() => {
			// TODO preloader
			});
	}
	// form.addEventListener = ('submit', e => {
	// 	e.preventDefault();
	// 	const formData = new FormData(form);
	// 	const toAccountId = formData.get('to');
	// 	const amount = parseInt(formData.get('amount'));
	// 	const token = loadFromSessionStorage('token');
	// 	createTransferFunds(accountData.account, toAccountId, amount, token)
	// 		.then(() => {
	// 			getUserAccount(token, accountData.account)
	// 				.then((data) => {
	// 					renderAccountPage(data);
	// 				})
	// 				.catch((error) => {
	// 					console.error(error);
	// 				});
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// });
};
