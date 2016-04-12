'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _ping = require('./enhancers/ping');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  var logger = (0, _reduxLogger2.default)();
  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_ping.ping), // <!-- добавляем enhancer в цепочку middleware'ов
  (0, _redux.applyMiddleware)(logger));

  //A store holds the whole state tree of your application.
  //The only way to change the state inside it is to dispatch an action on it.
  //A store is not a class. It’s just an object with a few methods on it.
  //To create it, pass your root reducing function to createStore.
  //http://redux.js.org/docs/api/Store.html

  //Store Methods

  //getState()
  //dispatch(action)
  //subscribe(listener)
  //replaceReducer(nextReducer)  Не используется в обычной среде

  if (module.hot) {
    module.hot.accept('../reducers', function () {
      //module.hot.accept('../reducers', function () {
      var nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
} // <!-- подключаем наш enhancer

//# sourceMappingURL=configureStore-compiled.js.map