'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = page;

var _Page = require('../constants/Page');

var initialState = {
  year: 2016,
  photos: []
};

function page() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];


  switch (action.type) {
    case _Page.SET_YEAR:
      return _extends({}, state, { year: action.payload });

    default:
      return state;
  }
}

//# sourceMappingURL=page-compiled.js.map