import {el, mount} from 'redom';
/* eslint-disable max-len */
const main = document.querySelector('.main');

export const renderCheck1 = () => {
	main.innerHTML = `
	<div class="account__container">
		<div class="account__container-header">
			<h2 class="account__title">Счет №24051911200915061003240821</h2>
			<a class="account__button button" element="[object Object]" href="/currencies">
				<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z" fill="white"></path>
				</svg>
				Вернуться
			</a>
		</div>
		<div class="account__dynamic">
			<div class="account__dynamic-header">
				<h3 class="account__dynamic-title">Динамика</h3>
				<span class="account__dynamic-year">2022</span>
				<select class="account__dynamic-select">
					<option hidden="">Год</option>
					<option>2022</option>
					<option>2021</option>
					<option>2020</option>
				</select>
			</div>
		</div>
		<div class="account__history">
			<h3 class="account__history-title">История переводов</h3>
			<div class="account__table-container">
				<table class="account__table-table">
					<thead class="account__table-thead">
						<tr>
							<th class="account__table-th">Счет</th>
							<th class="account__table-th">Сумма</th>
							<th class="account__table-th">Дата</th>
						</tr>
					</thead>
					<tbody class="account__table-tbody">
						<tr>
							<td class="account__table-td undefined">78533416338616366622402206</td>
							<td class="account__table-td account__table-td-middle">725.03</td>
							<td class="account__table-td account__table-td-date">23.07.2022</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="account__transaction">
			<h3 class="account__title account__transaction-title">Перевод</h3>
			<form class="account__transaction-form">
				<div class="account__transaction-input-wrapper">
					<label class="account__transaction-label">Счет</label>
					<input class="account__transaction-input" name="to">
				</div>
				<div class="account__transaction-input-wrapper">
					<label class="account__transaction-label">Сумма</label>
					<input class="account__transaction-input" name="amount">
				</div><button class="account__button button">Перевести</button>
			</form>
		</div>
	</div>
	`;
};

export const renderCheck = () => {
	const account = el('.account__container',
		el('.account__container-header',
			el('h2.account__title', 'Счет №24051911200915061003240821'),
			el('a.account__button.button', {href: '/currencies'},
				el('svg', {innerHTML: `
					<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z" fill="white"></path>
					</svg>
					`},
				),
				'Вернуться',
			),
		),
		el('.account__dynamic',
			el('.account__dynamic-header',
				el('h3.account__dynamic-title', 'Динамика'),
				el('span.account__dynamic-year', '2022'),
				el('select.account__dynamic-select',
					el('option', {hidden: true}, 'Год'),
					el('option', '2022'),
					el('option', '2021'),
					el('option', '2020'),
				),
			),
		),
		el('.account__history',
			el('h3.account__history-title', 'История переводов'),
			el('.account__table-container',
				el('table.account__table-table',
					el('thead.account__table-thead',
						el('tr',
							el('th.account__table-th', 'Счет'),
							el('th.account__table-th', 'Сумма'),
							el('th.account__table-th', 'Дата'),
						),
					),
					el('tbody.account__table-tbody',
						el('tr',
							el('td.account__table-td.undefined', '78533416338616366622402206'),
							el('td.account__table-td.account__table-td-middle', '725.03'),
							el('td.account__table-td.account__table-td-date', '23.07.2022'),
						),
					),
				),
			),
		),
		el('.account__transaction',
			el('h3.account__title.account__transaction-title', 'Перевод'),
			el('form.account__transaction-form',
				el('.account__transaction-input-wrapper',
					el('label.account__transaction-label', 'Счет'),
					el('input.account__transaction-input', {name: 'to'}),
				),
				el('.account__transaction-input-wrapper',
					el('label.account__transaction-label', 'Сумма'),
					el('input.account__transaction-input', {name: 'amount'}),
				),
				el('button.account__button.button', 'Перевести'),
			),
		),
	);

	mount(main, account);
};
