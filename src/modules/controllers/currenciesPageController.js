import {createNewAccount} from '../fetch.js';
import {renderAccountItem} from '../render/renderAccountItem.js';
import {createAccountBtn, currenciesList, currenciesSelect, renderCurrencies,
} from '../render/renderCurrencies.js';
import {renderHeaderNavigation} from '../render/renderHeaderNavigation.js';
import {loadFromSessionStorage} from '../storage.js';

export const currenciesPageController = (accountsData) => {
	console.warn(accountsData);
	renderHeaderNavigation('currencies');
	renderCurrencies();

	createAccountBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const token = loadFromSessionStorage('token');

		// TODO preloader;
		createNewAccount(token)
			.then((res) => {
				currenciesList.append(renderAccountItem(res.payload));
				console.log(res.payload);
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {

				// TODO preloader off;
			});
	});
	accountsData.forEach((account) => {
		console.log(account);
		currenciesList.append(renderAccountItem(account));
	});

	// TODO select sort
	currenciesSelect.addEventListener('change', () => {
		const option = currenciesSelect.querySelector('option');
		const token = loadFromSessionStorage('token');
	});
};
