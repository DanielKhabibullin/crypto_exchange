import {el, mount} from 'redom';
import {main} from '../../index.js';
/* eslint-disable max-len */

export const renderChange1 = () => {
	main.innerHTML = `
	<div class="exchange__container">
				<h2 class="exchange__title">Обмен валюты</h2>
				<span class="exchange__text">Счет</span>
				<span class="exchange__text-white">24051911200915061003240821</span><br><span class="exchange__text">Баланс </span>
				<span class="exchange__text-white exchange__balance">6 795 296.36</span>
				<div class="exchange__wrapper">
					<div class="exchange__rates-wrapper">
						<h3 class="exchange__rates-title">Изменение курса в режиме реального времени</h3>
						<div class="exchange__tbody">
							<div class="exchange__tr"><span class="exchange__td-first">CAD/UAH</span><span class="exchange__td-second"></span><span class="exchange__td-third">42.98
							<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">CNH/CAD</span><span class="exchange__td-second"></span><span class="exchange__td-third">67.6<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">CNH/CAD</span><span class="exchange__td-second"></span><span class="exchange__td-third">46.25<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 6.5L0.602886 0.5H8.39711L4.5 6.5Z" fill="#F10000"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">ETH/RUB</span><span class="exchange__td-second"></span><span class="exchange__td-third">89.17<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">RUB/HKD</span><span class="exchange__td-second"></span><span class="exchange__td-third">84.26<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">CHF/USD</span><span class="exchange__td-second"></span><span class="exchange__td-third">87.39<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">RUB/AUD</span><span class="exchange__td-second"></span><span class="exchange__td-third">68.44<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
							<div class="exchange__tr"><span class="exchange__td-first">USD/JPY</span><span class="exchange__td-second"></span><span class="exchange__td-third">82.07<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"></path>
									</svg></span></div>
						</div>
					</div>
					<div class="exchange__right-wrapper">
						<div class="exchange__right-wrapper">
							<h3 class="exchange__right-title">Обмен валюты</h3>
							<form class="exchange__form">
								<div class="exchange__form-input">
									<div class="exchange__form-input-wrapper"><label class="exchange__form-label">Откуда</label><select class="exchange__form-select" name="from">
											<option>AUD</option>
											<option>BTC</option>
											<option>BYR</option>
											<option>CAD</option>

										</select></div>
									<div class="exchange__form-input-wrapper"><label class="exchange__form-label">Куда</label><select class="exchange__form-select" name="to">
											<option>AUD</option>
											<option>BTC</option>
											<option>BYR</option>
											<option>CAD</option>
										</select></div>
									<div class="exchange__form-input-wrapper"><span class="exchange__form-error"></span><label class="exchange__form-label">Сумма</label><input class="exchange__form-select" name="amount"></div>
								</div>
								<button class="exchange__form-submit button">Обменять</button>
							</form>
						</div>
						<div>
							<table>
								<thead>
									<tr>
										<th class="exchange__right-th" colspan="2">Мои валюты</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="exchange__right-td-code">AUD</td>
										<td class="exchange__right-td-amount">18.16</td>
									</tr>
									<tr>
										<td class="exchange__right-td-code">BTC</td>
										<td class="exchange__right-td-amount">3 081.22</td>
									</tr>
									<tr>
										<td class="exchange__right-td-code">BYR</td>
										<td class="exchange__right-td-amount">48.75</td>
									</tr>
									<tr>
										<td class="exchange__right-td-code">CAD</td>
										<td class="exchange__right-td-amount">251.48</td>
									</tr>
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
	`;
};

export const renderChange = () => {
	main.innerHTML = '';
	const exchange = el('.exchange__container',
		el('h2.exchange__title', 'Обмен валюты'),
		el('span.exchange__text', 'Счет'),
		el('span.exchange__text-white', '24051911200915061003240821'),
		el('br'),
		el('span.exchange__text', 'Баланс '),
		el('span.exchange__text-white.exchange__balance', '6 795 296.36'),
		el('.exchange__wrapper',
			el('.exchange__rates-wrapper',
				el('h3.exchange__rates-title', 'Изменение курса в режиме реального времени'),
				el('.exchange__tbody',
					el('.exchange__tr',
						el('span.exchange__td-first', 'CAD/UAH'),
						el('span.exchange__td-second'),
						el('span.exchange__td-third', '42.98',
							el('svg', {innerHTML: '<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="#0EFF0A"/></svg>'}),
						),
					),
					// more exchange rates here // TODO red svg
				),
			),
			el('.exchange__right-wrapper',
				el('h3.exchange__right-title', 'Обмен валюты'),
				el('form.exchange__form',
					el('.exchange__form-input',
						el('.exchange__form-input-wrapper',
							el('label.exchange__form-label', 'Откуда'),
							el('select.exchange__form-select', {name: 'from'},
								el('option', 'AUD'),
								el('option', 'BTC'),
								el('option', 'BYR'),
								el('option', 'CAD'),
							),
						),
						el('.exchange__form-input-wrapper',
							el('label.exchange__form-label', 'Куда'),
							el('select.exchange__form-select', {name: 'to'},
								el('option', 'AUD'),
								el('option', 'BTC'),
								el('option', 'BYR'),
								el('option', 'CAD'),
							),
						),
						el('.exchange__form-input-wrapper',
							el('span.exchange__form-error'),
							el('label.exchange__form-label', 'Сумма'),
							el('input.exchange__form-select', {name: 'amount'}),
						),
					),
					el('button.exchange__form-submit.button', {type: 'submit'}, 'Обменять'),
				),
				el('div',
					el('table',
						el('thead',
							el('tr',
								el('th.exchange__right-th', {colspan: '2'}, 'Мои валюты'),
							),
						),
						el('tbody',
							el('tr',
								el('td.exchange__right-td-code', 'AUD'),
								el('td.exchange__right-td-amount', '18.16'),
							),
							// more currency rows here
						),
					),
				),
			),
		),
	);

	const amountInput = exchange.querySelector('input[name="amount"]');
	const submitButton = exchange.querySelector('.exchange__form-submit');

	mount(main, exchange);

	return {amountInput, submitButton};
};
