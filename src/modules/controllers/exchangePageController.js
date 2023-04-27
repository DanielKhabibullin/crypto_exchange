import {renderExchange} from '../render/renderExchange.js';
import {renderHeaderNavigation} from '../render/renderHeaderNavigation.js';


export const exchangePageController = (userCurrencies, token) => {
	renderHeaderNavigation('exchange');
	renderExchange(userCurrencies);
};
