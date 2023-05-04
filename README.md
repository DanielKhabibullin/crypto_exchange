# crypto_exchange

Проект выложен на «<a href="https://github.com/DanielKhabibullin/crypto_exchange">vercel</a>»

## Сборка и запуск проекта:
### backend: 
<a href="https://github.com/DanielKhabibullin/crypto_exchange_api">Инструкция здесь</a>
### frontend: 
<a href="https://github.com/DanielKhabibullin/webpack_build">Инструкция для установки и команды здесь</a>

### Серверная часть
По умолчанию приложение настроенo на работу с NODE.JS - сервером по адресу: [https://scandalous-flying-bridge.glitch.me/](https://scandalous-flying-bridge.glitch.me/).

Серверную часть можно скачать по адресу: [https://github.com/DanielKhabibullin/crypto_exchange_api](https://github.com/DanielKhabibullin/crypto_exchange_api).

Чтобы изменить адрес серверной части измените константы `urlApi` и `socket` в файле `index.js`

### Логин и пароль
На данный момент для доступа в приложение создана только одна учетная запись:
* Логин: `developer`
* Пароль: `zxcvbn`

<h2>Описание проекта</h2>
<p>Для реализации данного проекта использовался сборщик <strong>Webpack</strong></p>
<p>Для создания html-элементов была выбрана библиотека <strong>REDOM</strong></p>
<p>Также использована кастомная <strong>createElement</strong> функция</p>
<p>Проект написан на JS в стиле ФП</p>
<p>Реализована валидация для полей ввода с описанием ошибок</p>
<p>Для отрисовки графиков баланса была применена библиотека <strong>Chart</strong></p>
<p>Сделана сортирова списков счетов через кастомный селектор</p>
<p>В разделе <strong>Валюты</strong> реализован блок <strong>изменения курса валют в реальном времени</strong> с обновлением в реальном времени через WebSocket</p>
<p>Для перехода по разделам приложения был применен простой минималистичный JavaScript-маршрутизатор <strong>Navigo</strong>