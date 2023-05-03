import './index.html';
import './index.scss';
import {router} from './modules/router.js';
import {renderFooter} from './modules/render/renderFooter.js';
import {loginPageController,
} from './modules/controllers/loginPageController.js';
import {loadFromSessionStorage,
	saveToSessionStorage} from './modules/storage.js';
import {accountsPageController,
} from './modules/controllers/accountsPageController.js';
import {exchangePageController,
} from './modules/controllers/exchangePageController.js';
import {getUserAccounts} from './modules/fetch.js';
import {createElement} from './modules/createElement.js';
import {accountPageController,
} from './modules/controllers/accountPageController.js';

export const urlApi = 'http://localhost:3000';
export const main = document.querySelector('.main');


const init = async () => {
	try {
		router.on('*', () => {
			const token = loadFromSessionStorage('token');
			if (!token) {
				router.navigate('/auth');
			}
			renderFooter();
		});

		router.on('auth', () => {
			loginPageController();
		});
		router.on('accounts', async () => {
			const token = loadFromSessionStorage('token');
			const accountsResponse = await getUserAccounts(token);
			const accountsData = accountsResponse.payload;
			saveToSessionStorage('accountsData', accountsData);
			accountsPageController(accountsData);
		});
		router.on('account/:id', async (params) => {
			const token = loadFromSessionStorage('token');
			const accountsResponse = await getUserAccounts(token);
			const accountsData = accountsResponse.payload;
			saveToSessionStorage('accountsData', accountsData);
			await accountPageController(token, params.data.id, accountsData);
		});
		router.on('exchange', () => {
			exchangePageController();
		});
	} catch (err) {
		console.warn(err);
		const error = document.querySelector('.error');
		if (error) error.remove();
		createElement('h2', {
			textContent: 'Что-то пошло не так, попробуйте позже...',
			className: 'error',
		},
		{
			parent: main,
			cb(h2) {
				h2.style.textAlign = 'center';
			},
		},
		);
	} finally {
		router.resolve();
	}
};
init();
