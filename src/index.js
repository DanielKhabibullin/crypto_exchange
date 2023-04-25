import './index.html';
import './index.scss';
import {router} from './modules/router.js';
import {renderChange} from './modules/render/renderChange.js';
import {renderCheck} from './modules/render/renderCheck.js';
import {renderFooter} from './modules/render/renderFooter.js';
import {renderHeader} from './modules/render/renderHeader.js';
import {renderHeaderNavigation} from
	'./modules/render/renderHeaderNavigation.js';
import {renderLogin, renderLogin2} from './modules/render/renderLogin.js';
import {renderMain, renderMain1} from './modules/render/renderMain.js';
import { loginPageController } from './modules/controllers/loginPageController.js';

export const urlApi = 'http://localhost:3000';

const init = async () => {
	router.on({
		'*': () => {
			renderFooter();
		},
		'auth': () => {
			loginPageController();
		},
		'/': () => {
			renderHeaderNavigation();
			renderMain();
		},
		'currencies': () => {
			renderHeaderNavigation('currencies');
			renderMain1();
		},
		'exchange': () => {
			renderHeaderNavigation('exchange');
			renderChange();
		},
		'account': () => {
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

