import {createNewAccount, getUserAccounts} from '../fetch.js';
import {renderAccountItem} from '../render/renderAccountItem.js';
import {createAccountBtn, currenciesList, currenciesSelect, renderCurrencies,
} from '../render/renderCurrencies.js';
import {renderHeaderNavigation} from '../render/renderHeaderNavigation.js';
import {loadFromSessionStorage} from '../storage.js';
import {sortBy} from '../tools/sort.js';

export const currenciesPageController = async (accountsData) => {
	renderHeaderNavigation('currencies');
	renderCurrencies();

	createAccountBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const token = loadFromSessionStorage('token');

		// TODO preloader;
		createNewAccount(token)
			.then((res) => {
				currenciesList.append(renderAccountItem(res.payload));
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {

				// TODO preloader off;
			});
	});
	await accountsData.forEach((account) => {
		currenciesList.append(renderAccountItem(account));
	});

	// TODO select sort
	currenciesSelect.addEventListener('change', () => {
		const selectedOption = currenciesSelect.querySelector('option:checked');
		const selectedOptionId = selectedOption.id;
		const token = loadFromSessionStorage('token');

		// TODO preloader;
		getUserAccounts(token)
			.then((res) => sortBy(res.payload, selectedOptionId))
			.then((res) => {
				currenciesList.innerHTML = '';
				res.forEach((account) => {
					currenciesList.append(renderAccountItem(account));
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
