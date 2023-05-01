import './index.html';
import './index.scss';
import {router} from './modules/router.js';
import {renderFooter} from './modules/render/renderFooter.js';
import {loginPageController,
} from './modules/controllers/loginPageController.js';
import {loadFromSessionStorage} from './modules/storage.js';
import {accountsPageController,
} from './modules/controllers/accountsPageController.js';
import {exchangePageController,
} from './modules/controllers/exchangePageController.js';

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
			exchangePageController();
		},
	}).resolve();
};
init();
