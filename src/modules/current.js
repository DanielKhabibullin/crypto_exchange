const ul = document.createElement('ul');
document.body.append(ul);

const renderExchange = ({from, to, rate, change}) => {
	const li = document.createElement('li');

	li.textContent = `${from}/${to}......${rate}..${change === 1 ? '↑' : '↓'}`;
	li.style.color = change === 1 ? 'green' : 'tomato';

	ul.prepend(li);
	if (ul.childNodes.length > 10) {
		ul.childNodes[10].remove();
	}
};


// вызываем Websocket и получим объект для отслеживания сокета
//
const socket = new WebSocket('ws://localhost:3000/currency-feed');

socket.addEventListener('message', message => {
	// получаем ответ от сервера в формате JSON, распарсим его
	renderExchange(JSON.parse(message.data));
});

socket.addEventListener('error', err => {
	console.log(err);
});
