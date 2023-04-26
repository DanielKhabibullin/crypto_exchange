import sortArray from 'sort-array';

export const sortBy = (list, choice) => {
	const currenciesList = list;
	console.log('currenciesList: ', currenciesList);
	console.log(choice);
	if (choice === 'transaction') {
		sortArray(currenciesList, {
			by: 'date',
			computed: {
				date: (row) => {
					if (row.transactions.length > 0) return row.transactions[0].date;
					return '0';
				},
			},
		});
	} else {
		sortArray(currenciesList, {
			by: `${choice}`,
		});
	}
	return currenciesList;
};
