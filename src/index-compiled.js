'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

require('./styles/app.css');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//В реальном приложении, имеет смысл стили для компонентов импортировать в коде самих компонентов,
// что даст очень большие удобства для переиспользования целых блоков, включая оформление.

//Этот модуль делает
// module.exports = require('react/lib/ReactDOM');
//Мы из этого файла импортируем функцию

var store = (0, _configureStore2.default)(); //Импортируем файл React.js из react


(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('root'));

//Выводим обычный react app, но обернутый в Provider
//К провайдеру подключен корневой store,
//Он может в любой момент вернуть состояние console.log(store.getState());
//К store подключегн reducer, который обежиняет в себе два других reducer
//Каждый reducer - это функция, которая получает state and action
//state - это его состояние

//const initialState = {
//    year: 2016,
//    photos: []
//};

//action - Объект, который содержит type, например "SET_YEAR" и payload, - это данные. например 2015.
//action возвращает новый state

//Клик по кнопке вызывает action creator, он выдает action и сразу dispatch его. Dispatch передается reducer и он меняет state(выдает новый)

//# sourceMappingURL=index-compiled.js.map