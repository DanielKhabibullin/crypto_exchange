import {el, mount} from 'redom';
/* eslint-disable max-len */
const main = document.querySelector('.main');

export const renderMain2 = () => {
	main.innerHTML = `
	<div class="currencies__container">
		<h2 class="currencies__title">Здравствуйте, Александр!</h2>
		<button class="currencies__button button">Открыть новый счет</button>
		<div class="currencies__wrapper">
			<h3 class="currencies__wrapper-title">Мои счета</h3>
			<div class="currencies__sort">
				<span class="currencies__sort-title">Сортировка:</span>
				<select class="currencies__sort-select">
					<option id="account">Номер счёта</option>
					<option id="balance">Баланс</option>
					<option id="date">Дата открытия</option>
					<option id="last">Дата последней транзакции</option>
					</select>
			</div>
			<ul class="currencies__list">
				<li class="currencies__list-card">
					<a element="[object Object]" href="/account">
						<p class="currencies__list-card-id">74213041477477406320783754</p>
						<p class="currencies__list-card-balance">1 673.47</p>
						<div class="currencies__list-card-info">
							<div>
								<p>открыт</p>
								<p>10.03.2016</p>
							</div>
							<div>
								<p>последняя операция</p>
								<time datetime="2022-07-16T10:36:01.474Z">16.07.2022, 13:36</time>
							</div>
						</div>
					</a>
				</li>
				<li class="currencies__list-card">
					<a element="[object Object]" href="/account">
						<p class="currencies__list-card-id">20242487166007786614516318</p>
						<p class="currencies__list-card-balance">0</p>
						<div class="currencies__list-card-info">
							<div>
								<p>открыт</p>
								<p>10.03.2016</p>
							</div>
							<div>
								<p>последняя операция</p><span>Транзакций не было</span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
	`;
};

const renderListItem = (data) => {
	const lastTransaction = data.lastTransaction ? new Date(data.lastTransaction).toLocaleString() : 'Транзакций не было';

	return el('li.currencies__list-card',
		el('a', {href: `/account/${data.id}`},
			el('p.currencies__list-card-id', data.id),
			el('p.currencies__list-card-balance', data.balance),
			el('div.currencies__list-card-info',
				el('div',
					el('p', 'открыт'),
					el('p', new Date(data.opened).toLocaleDateString()),
				),
				el('div',
					el('p', 'последняя операция'),
					el('time', {datetime: data.lastTransaction}, lastTransaction),
				),
			),
		),
	);
};

export const renderMain = async () => {
	const data = await fetch('https://my-json-server.typicode.com/alexandr-gnrk/demo/accounts').then(res => res.json());

	const currencies = el('.currencies__container',
		el('h2.currencies__title', 'Здравствуйте, Александр!'),
		el('button.currencies__button.button', 'Открыть новый счет'),
		el('.currencies__wrapper',
			el('h3.currencies__wrapper-title', 'Мои счета'),
			el('.currencies__sort',
				el('span.currencies__sort-title', 'Сортировка:'),
				el('select.currencies__sort-select',
					el('option#account', 'Номер счёта'),
					el('option#balance', 'Баланс'),
					el('option#date', 'Дата открытия'),
					el('option#last', 'Дата последней транзакции'),
				),
			),
			el('ul.currencies__list', data.map(renderListItem)),
		),
	);

	mount(main, currencies);
};

export const renderMain1 = () => {
	const main = el('.currencies__container',
		el('h2.currencies__title', 'Здравствуйте, Александр!'),
		el('button.currencies__button.button', 'Открыть новый счет'),
		el('.currencies__wrapper',
			el('h3.currencies__wrapper-title', 'Мои счета'),
			el('.currencies__sort',
				el('span.currencies__sort-title', 'Сортировка:'),
				el('select.currencies__sort-select',
					el('option#account', 'Номер счёта'),
					el('option#balance', 'Баланс'),
					el('option#date', 'Дата открытия'),
					el('option#last', 'Дата последней транзакции'),
				),
			),
			el('ul.currencies__list',
				el('li.currencies__list-card',
					el('a', {href: '/account'},
						el('p.currencies__list-card-id', '74213041477477406320783754'),
						el('p.currencies__list-card-balance', '1 673.47'),
						el('div.currencies__list-card-info',
							el('div',
								el('p', 'открыт'),
								el('p', '10.03.2016'),
							),
							el('div',
								el('p', 'последняя операция'),
								el('time', {datetime: '2022-07-16T10:36:01.474Z'}, '16.07.2022, 13:36'),
							),
						),
					),
				),
				el('li.currencies__list-card',
					el('a', {href: '/account'},
						el('p.currencies__list-card-id', '20242487166007786614516318'),
						el('p.currencies__list-card-balance', '0'),
						el('div.currencies__list-card-info',
							el('div',
								el('p', 'открыт'),
								el('p', '10.03.2016'),
							),
							el('div',
								el('p', 'последняя операция'),
								el('span', 'Транзакций не было'),
							),
						),
					),
				),
			),
		),
	);

	mount(document.querySelector('.main'), main);
};

