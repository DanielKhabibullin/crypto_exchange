import './index.html';
import './index.scss';
import {router} from './modules/router.js';
import {renderChange} from './modules/render/renderChange.js';

import {renderFooter} from './modules/render/renderFooter.js';
import {renderHeaderNavigation} from
	'./modules/render/renderHeaderNavigation.js';
import {loginPageController,
} from './modules/controllers/loginPageController.js';
import {loadFromSessionStorage} from './modules/storage.js';
import {renderCheck} from './modules/render/renderAccountPage.js';
import {accountsPageController,
} from './modules/controllers/accountsPageController.js';

export const urlApi = 'http://localhost:3000';
export const main = document.querySelector('.main');


const init = async () => {
	router.on({
		'*': () => {
			const token = loadFromSessionStorage('token');
			if (!token) {
				router.navigate('/auth');
			}
			renderFooter();
		},
		'auth': () => {
			loginPageController();
		},

		'accounts': () => {
			const accountsData = loadFromSessionStorage('accountsData');
			accountsPageController(accountsData);
		},
		'exchange': () => {
			renderHeaderNavigation('exchange');
			renderChange();
		},
		'currencies': () => {
			renderHeaderNavigation();
			renderCheck();
		},
	}).resolve();
};
init();

// 	'accounts': () => {
// 		const token = loadFromSessionStorage('token');
// 		if (!token) {
// 			router.navigate('/auth');
// 			renderLogin();
// 		} else {
// 			renderAccountsPage(token);
// 		}
// 	},
// 	'account/:id': (params) => {
// 		const token = loadFromSessionStorage('token');
// 		if (!token) {
// 			router.navigate('/auth');
// 			renderLogin();
// 		} else {
// 			renderAccountPage(token, params.id);
// 		}
// 	},
// 	'history/:id': (params) => {
// 		const token = loadFromSessionStorage('token');
// 		if (!token) {
// 			router.navigate('/auth');
// 			renderLogin();
// 		} else {
// 			renderAccountPage(token, params.id, true);
// 		}
// 	},
// 	'currency': () => {
// 		const token = loadFromSessionStorage('token');
// 		if (!token) {
// 			router.navigate('/auth');
// 			renderLogin();
// 		} else {
// 			renderCurrencyPage(token);
// 		}
// 	},
// }).resolve();

