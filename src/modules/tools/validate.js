import {loginError, loginInput, passwordError,
	passwordInput} from '../render/renderLogin.js';


export const validateLogin = () => {
	const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
	const loginValue = loginInput.value.trim();

	if (!loginValue) {
		loginError.textContent = 'Please type login';
		return false;
	}

	if (!loginRegex.test(loginValue)) {
		loginError.textContent = 'Login must start with a letter and contain only latin letters and numbers (at least 6 characters).';
		return false;
	}

	loginError.textContent = '';
	return true;
};

export const validatePassword = () => {
	const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
	const passwordValue = passwordInput.value.trim();

	if (!passwordValue) {
		passwordError.textContent = 'Please type password';
		return false;
	}

	if (!passwordRegex.test(passwordValue)) {
		passwordError.textContent = 'Password must contain only latin letters and numbers (at least 6 characters)';
		return false;
	}

	passwordError.textContent = '';
	return true;
};

// export const validateTransaction =
// (accountsData, id, accountNumber, transactionAmount,
// 		accountMessage, amountMessage, transactionSubmit) => {
// 	const accountExists = accountsData.some(accountData =>
// 		accountData.account === accountNumber.value);

// 	const isAmountValid = !isNaN(transactionAmount.value) &&
// 		transactionAmount.value > 0 &&
// 		transactionAmount.value <= accountsData.find(accountData =>
// 			accountData.account === id).balance;

// 	const isAccountValid = accountNumber.value !== id && accountExists;

// 	if (!isAccountValid) {
// 		accountMessage.textContent = isAccountValid ? '' : 'Invalid account number';
// 		accountMessage.style.display = isAccountValid ? 'none' : 'block';
// 	} else {
// 		accountMessage.style.display = 'none';
// 	}

// 	if (!isAmountValid) {
// 		amountMessage.textContent = isAmountValid ? '' :
// 			isNaN(transactionAmount.value) || transactionAmount.value <= 0 ?
// 				'Invalid transaction amount' : 'Insufficient funds';
// 		amountMessage.style.display = isAmountValid ? 'none' : 'block';
// 	} else {
// 		amountMessage.style.display = 'none';
// 	}

// 	transactionSubmit.disabled = !isAccountValid || !isAmountValid;
// };
