// import sortArray from 'sort-array';

export const sortBy = (list, choice) => {
	const accountsList = list;
	if (choice === 'transaction') {
		accountsList.sort((a, b) => {
			const aDate = a.transactions.length > 0 ? a.transactions[0].date : '0';
			const bDate = b.transactions.length > 0 ? b.transactions[0].date : '0';
			return aDate.localeCompare(bDate);
		});
	} else {
		accountsList.sort((a, b) => {
			const aValue = a[choice];
			const bValue = b[choice];
			if (typeof aValue === 'string' && typeof bValue === 'string') {
				return aValue.localeCompare(bValue);
			} else if (typeof aValue === 'number' && typeof bValue === 'number') {
				return aValue - bValue;
			} else {
				return 0;
			}
		});
	}
	return accountsList;
};
