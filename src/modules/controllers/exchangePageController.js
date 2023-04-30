import {createCurrencyBuy, getUserCurrencies} from '../fetch.js';
import {renderExchange, renderExchangeFormWrapper,
	renderTable} from '../render/renderExchange.js';
import {renderHeader} from '../render/renderHeader.js';
import {loadFromSessionStorage} from '../storage.js';

const showError = (message) => {
	const errorElement = document.querySelector('.exchange__form-error');
	errorElement.textContent = message;
	errorElement.style.display = 'block';
};

const showSuccess = (message) => {
	const successElement = document.querySelector('.exchange__form-success');
	successElement.textContent = message;
	successElement.style.display = 'block';

	setTimeout(() => {
		successElement.style.display = 'none';
	}, 3000);
};

export const exchangePageController = async () => {
	const token = loadFromSessionStorage('token');
	const response = await getUserCurrencies(token);
	const currencies = response.payload;
	const formResult = await renderExchangeFormWrapper();
	const {
		formWrapper,
		fromSelect,
		toSelect,
		amount,
		exchangeSubmit,
	} = formResult;
	fromSelect.value = response.defaultCurrency;
	toSelect.value = response.defaultCurrency;
	exchangeSubmit.setAttribute('disabled', 'true');

	renderExchange(formResult, currencies);
	renderHeader('exchange');

	fromSelect.addEventListener('change', () => {
		const fromCurrency = fromSelect.value;
		const toCurrency = toSelect.value;

		if (fromCurrency === toCurrency) {
			toSelect.value = response.defaultCurrency;
		}
	});

	toSelect.addEventListener('change', () => {
		const fromCurrency = fromSelect.value;
		const toCurrency = toSelect.value;

		if (fromCurrency === toCurrency) {
			fromSelect.value = response.defaultCurrency;
		}
	});

	amount.addEventListener('input', () => {
		if (amount.value === '' || amount.value <= 0) {
			exchangeSubmit.setAttribute('disabled', 'true');
		} else {
			exchangeSubmit.removeAttribute('disabled');
		}
	});

	formWrapper.addEventListener('submit', async e => {
		e.preventDefault();

		const fromCurrency = fromSelect.value;
		const toCurrency = toSelect.value;
		const amountValue = parseFloat(amount.value);

		if (isNaN(amountValue) || amountValue <= 0) {
			showError('Введите корректную сумму');
			return;
		}

		const currencies = await getUserCurrencies(token);

		if (!currencies.payload[fromCurrency]) {
			showError('У вас нет счета в выбранной валюте');
			return;
		}

		const fromAmount = currencies.payload[fromCurrency].amount;

		if (fromAmount < amountValue) {
			showError('Недостаточно средств на счете');
			return;
		}

		try {
			const response =
				await createCurrencyBuy(fromCurrency, toCurrency, amountValue, token);
			const {error} = response;

			if (error) {
				showError(error);
				return;
			}

			const updatedCurrencies = await getUserCurrencies(token);
			const updatedTable = await renderTable(updatedCurrencies.payload);

			const table = document.querySelector('.exchange__table');
			if (table) {
				table.parentNode.replaceChild(updatedTable, table);
			}
			showSuccess('Обмен выполнен успешно');
			const form = document.querySelector('.exchange__form');
			form.reset();
			fromSelect.value = response.defaultCurrency;
			toSelect.value = response.defaultCurrency;
			exchangeSubmit.setAttribute('disabled', 'true');
		} catch (error) {
			showError('Произошла ошибка при обмене валют');
			console.error(error);
		}
	});
};

