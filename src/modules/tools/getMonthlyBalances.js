export const getMonthlyBalances = (accountData) => {
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
	const monthlyBalances = [];

	for (let i = 0; i < 6; i++) {
		const monthIndex = new Date().getMonth() - i;
		const monthName = monthNames[monthIndex < 0 ? monthIndex + 12 : monthIndex];
		let totalAmount = accountData.balance;

		for (const transaction of accountData.transactions) {
			const transactionDate = new Date(transaction.date);
			if (transactionDate.getMonth() === monthIndex &&
				transactionDate.getFullYear() === new Date().getFullYear()) {
				if (transaction.to === accountData.account) {
					totalAmount += transaction.amount;
				} else if (transaction.from === accountData.account) {
					totalAmount -= transaction.amount;
				}
			}
		}

		monthlyBalances.push({
			month: monthName,
			balance: totalAmount,
		});
	}

	return monthlyBalances.reverse();
};
