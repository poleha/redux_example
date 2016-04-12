'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setYear = setYear;

var _Page = require('../constants/Page');

function setYear(year) {

    return {
        type: _Page.SET_YEAR,
        payload: year
    };
}

//Это action creator. Он создает action.

//# sourceMappingURL=PageActions-compiled.js.map