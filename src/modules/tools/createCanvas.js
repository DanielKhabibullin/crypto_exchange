import {Chart} from 'chart.js';
import {getMonthlyBalances} from './getMonthlyBalances.js';

export const createCanvas = (accountData) => {
	const canvas = document.createElement('canvas');
	canvas.classList.add('canvas');
	canvas.width = 400;
	canvas.height = 200;
	const monthlyBalances = getMonthlyBalances(accountData);
	const months = monthlyBalances.map(item => item.month);
	const balances = monthlyBalances.map(item => item.balance);
	const data = {
		labels: months,
		datasets: [{
			fontColor: '#C6B6D7',
			data: balances,
			yAxisID: 'balance-y-axis',
			borderColor: '#B865D6',
			tension: 0.1,
			fill: false,
		}],
	};

	const options = {
		// scales: {
		// 	yAxes: [{
		// 		id: 'balance-y-axis',
		// 		ticks: {
		// 			callback(value, index, values) {
		// 				return `${value}₽`;
		// 			},
		// 		},
		// 	}],
		// },
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		// scales: {
		// 	xAxes: [{
		// 		ticks: {
		// 			fontColor: '#C6B6D7',
		// 		},
		// 	}],
		// },
		animations: {
			radius: {
				duration: 400,
				easing: 'linear',
				loop: (context) => context.active,
			},
		},
		hoverRadius: 6,
		hoverBackgroundColor: '#B865D6',
	};

	const chart = new Chart(canvas, {
		type: 'line',
		data,
		options,
	});
	return canvas;
};
