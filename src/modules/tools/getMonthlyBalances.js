export const getMonthlyBalances = (accountData) => {
	const monthlyBalances = [];
	let currentBalance = accountData.balance;
	const currentDate = new Date();
	const monthNames = [
		'Янв',
		'Фев',
		'Мар',
		'Апр',
		'Май',
		'Июн',
		'Июл',
		'Авг',
		'Сен',
		'Окт',
		'Ноя',
		'Дек',
	];
	monthlyBalances.push({
		month: monthNames[currentDate.getMonth()],
		balance: currentBalance,
	});

	const currentMonthTransactions = accountData.transactions.filter(
		transaction => new Date(transaction.date).getMonth() ===
		currentDate.getMonth());
	const currentMonthTotalAmount = currentMonthTransactions.
		reduce((total, transaction) => {
			if (transaction.from === accountData.account) {
				return total - transaction.amount;
			} else if (transaction.to === accountData.account) {
				return total + transaction.amount;
			} else {
				return total;
			}
		}, 0);
	currentBalance -= currentMonthTotalAmount;

	for (let i = 1; i <= 5; i++) {
		if (currentDate.getMonth() === 0) {
			currentDate.setMonth(11);
			currentDate.setFullYear(currentDate.getFullYear() - 1);
		} else {
			currentDate.setMonth(currentDate.getMonth() - 1);
		}

		const transactions = accountData.transactions.filter(transaction => {
			const transactionDate = new Date(transaction.date);
			return (
				transactionDate.getMonth() === currentDate.getMonth() &&
				(transactionDate.getFullYear() === currentDate.getFullYear())
			);
		});
		const totalAmount = transactions.reduce((total, transaction) => {
			if (transaction.from === accountData.account) {
				return total - transaction.amount;
			} else if (transaction.to === accountData.account) {
				return total + transaction.amount;
			} else {
				return total;
			}
		}, 0);
		currentBalance += totalAmount;
		monthlyBalances.push({
			month: monthNames[currentDate.getMonth()],
			// + ' ' + currentDate.getFullYear()
			balance: currentBalance,
		});
	}
	return monthlyBalances.reverse();
};
