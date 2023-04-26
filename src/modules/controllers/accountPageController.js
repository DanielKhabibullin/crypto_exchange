import {main} from '../../index.js';
import {getUserAccount} from '../fetch.js';
import {renderAccountHistoryPage,
} from '../render/renderAccountHistoryPage.js';
import {renderAccountPage} from '../render/renderAccountPage.js';

export const accountPageController = (token, id, history = false) => {
	if (!history) {
		// TODO preloader
		getUserAccount(token, id)
			.then((res) => {
				main.innerHTML = '';
				return renderAccountPage(res.payload);
			})
			.catch((err) => {
				console.log('err.message: ', err.message);
			})
			.finally(() => {
			// TODO preloader
			});
	} else {
		// TODO preloader
		getUserAccount(token, id)
			.then((res) => {
				main.innerHTML = '';
				return renderAccountHistoryPage(res.payload);
			})
			.catch((err) => {
				console.log('err.message: ', err.message);
			})
			.finally(() => {
			// TODO preloader
			});
	}
};
