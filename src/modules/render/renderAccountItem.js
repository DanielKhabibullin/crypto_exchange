import {el} from 'redom';
import {accountPageController} from '../controllers/accountPageController.js';
import {router} from '../router.js';
import {loadFromSessionStorage} from '../storage.js';

export const renderAccountItem = (account) => {
	let lastTransaction = 'Транзакций не было';
	if (account.transactions.length > 0) {
		lastTransaction = new Date(account.transactions[0].date).
			toLocaleDateString();
	}
	const openDate = new Date(account.date).toLocaleDateString();

	const link = el('a', {href: `#/account/${account.account}`},
		el('p.currencies__list-card-id', `${account.account}`),
		el('p.currencies__list-card-balance', `${account.balance} `),
		el('div.currencies__list-card-info',
			el('div',
				el('p', 'открыт'),
				el('p', `${account.date ? openDate : '19.06.22'}`),
			),
			el('div',
				el('p', 'последняя операция'),
				el('span', `${lastTransaction}`),
			),
		),
	);
	link.addEventListener('click', e => {
		e.preventDefault();
		const token = loadFromSessionStorage('token');
		if (!token) {
			router.navigate('/auth');
		} else {
			history.pushState(null, null, link.href);
			accountPageController(token, account.account);
		}
	});

	const item = el('li.currencies__list-card', link);

	return item;
};
