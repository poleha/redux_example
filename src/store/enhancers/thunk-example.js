'use strict';

exports.__esModule = true;
exports['default'] = thunkMiddleware;
function thunkMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;
    //Сохраняем dispatch и getState исходного store

    return function (next) {
        //Сохраняем в замыканиях текущий dispatch
        return function (action) {
            if (typeof action === 'function') {
                return action(dispatch, getState);
                //Передаем этой функции исходный dispatch и getState. Почему исходный, а не next?
            }

            return next(action);
            //В стандартном случае возвращаем dispatch(action)
        };
    };
}