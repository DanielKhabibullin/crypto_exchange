import {el} from 'redom';
import {router} from '../router.js';
import {loadFromSessionStorage} from '../storage.js';

export const renderAccountItem = (account) => {
	let lastTransaction = 'Транзакций не было';
	if (account.transactions.length > 0) {
		lastTransaction = new Date(account.transactions[0]?.date).
			toLocaleDateString();
	}
	const openDate = account.date ? new Date(account.date).toLocaleDateString() :
	'19.06.21';

	const link = el('a.currencies__list-link',
		{href: `account/${account.account}`},
		el('p.currencies__list-card-id', `${account.account}`),
		el('p.currencies__list-card-balance', `${account.balance} `),
		el('div.currencies__list-card-info',
			el('div',
				el('p', 'открыт'),
				el('p', `${openDate}`),
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
			router.navigate(`account/${account.account}`);
		}
	});

	const item = el('li.currencies__list-card', link);

	return item;
};
