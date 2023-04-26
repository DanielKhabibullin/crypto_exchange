import {el} from 'redom';

export const renderAccountItem = (account) => {
	let lastTransaction = 'Транзакций не было';
	if (account.transactions.length > 0) {
		lastTransaction = new Date(account.transactions[0].date).
			toLocaleDateString();
	}
	const openDate = new Date(account.date).toLocaleDateString();

	const item = el('li.currencies__list-card',
		el('a', {href: `#/account/${account.account}`},
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
		),
	);

	return item;
};


// el('ul.currencies__list', data.map(renderListItem)),
