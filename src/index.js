import './index.html';
import './index.scss';
import {router} from './modules/router.js';
import {renderChange} from './modules/render/renderChange.js';
import {renderCheck} from './modules/render/renderCheck.js';
import {renderFooter} from './modules/render/renderFooter.js';
import {renderHeader} from './modules/render/renderHeader.js';
import {renderHeaderNavigation} from
	'./modules/render/renderHeaderNavigation.js';
import {renderLogin2} from './modules/render/renderLogin.js';
import {renderMain, renderMain1} from './modules/render/renderMain.js';

router.on('*', () => {
	renderHeaderNavigation();
	renderFooter();
});

router.on('/', () => {
	renderMain();
});

router.on('currencies', () => {
	renderMain1();
});

router.on('auth', () => {
	renderHeader();
	renderLogin2();
});

router.on('exchange', () => {
	renderChange();
});

router.on('account', () => {
	renderCheck();
});

router.resolve();
