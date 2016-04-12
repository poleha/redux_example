"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*eslint-disable */
var ping = exports.ping = function ping(store) {
    return function (next) {
        return function (action) {
            console.log("Тип события: " + action.type + ", дополнительные данные события: " + action.payload);
            return next(action);
        };
    };
};
/*eslint-enable */

//var ping = function ping(store) {
//   return function (next) {
//        return function (action) {
//            console.log('ping');
//            return next(action);
//        };
//    };
//};

//# sourceMappingURL=ping-compiled.js.map