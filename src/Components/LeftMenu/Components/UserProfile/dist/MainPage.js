"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MainPage = void 0;
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: lightskyblue;\n    height: 100%;\n    width: 100%;\n"], ["\n    background-color: lightskyblue;\n    height: 100%;\n    width: 100%;\n"])));
exports.MainPage = function () {
    return (React.createElement(Wrapper, null,
        React.createElement("div", null, "TEST")));
};
var templateObject_1;
