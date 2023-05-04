import {createNewAccount, getUserAccounts} from '../fetch.js';
import {renderAccountItem} from '../render/renderAccountItem.js';
import {createAccountBtn, accountsList, accountsSelect, renderAccounts,
} from '../render/renderAccounts.js';
import {renderHeader} from '../render/renderHeader.js';
import {loadFromSessionStorage} from '../storage.js';
import { preloader } from '../tools/loader.js';
import {sortBy} from '../tools/sort.js';

export const accountsPageController = (accountsData) => {
	renderHeader('accounts');
	renderAccounts();

	createAccountBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const token = loadFromSessionStorage('token');

		preloader(true);
		createNewAccount(token)
			.then((res) => {
				accountsList.append(renderAccountItem(res.payload));
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				preloader();
			});
	});
	accountsList.innerHTML = '';
	accountsData.forEach((account) => {
		accountsList.append(renderAccountItem(account));
	});


	accountsSelect.addEventListener('change', () => {
		const selectedOption = accountsSelect.querySelector('option:checked').id;
		const token = loadFromSessionStorage('token');
		preloader(true);
		getUserAccounts(token)
			.then((res) => sortBy(res.payload, selectedOption))
			.then((res) => {
				accountsList.innerHTML = '';
				res.forEach((account) => {
					accountsList.append(renderAccountItem(account));
				});
			})
			.catch((err) => {
				console.log('err.message: ', err.message);
			})
			.finally(() => {
				preloader();
			});
	});
};
