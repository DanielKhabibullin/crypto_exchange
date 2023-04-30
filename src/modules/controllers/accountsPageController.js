import {createNewAccount, getUserAccounts} from '../fetch.js';
import {renderAccountItem} from '../render/renderAccountItem.js';
import {createAccountBtn, accountsList, accountsSelect, renderAccounts,
} from '../render/renderAccounts.js';
import {renderHeaderNavigation} from '../render/renderHeaderNavigation.js';
import {loadFromSessionStorage} from '../storage.js';
import {sortBy} from '../tools/sort.js';

export const accountsPageController = async (accountsData) => {
	renderHeaderNavigation('accounts');
	renderAccounts();

	createAccountBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const token = loadFromSessionStorage('token');

		// TODO preloader;
		createNewAccount(token)
			.then((res) => {
				accountsList.append(renderAccountItem(res.payload));
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {

				// TODO preloader off;
			});
	});
	await accountsData.forEach((account) => {
		accountsList.append(renderAccountItem(account));
	});

	// TODO select sort
	accountsSelect.addEventListener('change', () => {
		const selectedOption = accountsSelect.querySelector('option:checked').id;
		const token = loadFromSessionStorage('token');
		// TODO change date for 1 account
		// TODO preloader;
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
			// TODO off preloader;
			});
	});
};