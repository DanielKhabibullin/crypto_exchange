import {el} from 'redom';

export const renderAccountItem = (account) => {
	const lastTransaction = account.transactions ?
	new Date(account.transactions[0]?.date).toLocaleString() :
	'Транзакций не было';
	// TODO

	const item = el('li.currencies__list-card',
		el('a', {href: `#/account/${account.account}`},
			el('p.currencies__list-card-id', `${account.account}`),
			el('p.currencies__list-card-balance', `${account.balance} `),
			el('div.currencies__list-card-info',
				el('div',
					el('p', 'открыт'),
					el('p', '10.03.2016'),
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
