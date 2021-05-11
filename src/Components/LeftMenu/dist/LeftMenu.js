"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LeftMenu = void 0;
var styled_components_1 = require("styled-components");
var UserProfile_1 = require("./Components/UserProfile/UserProfile");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    height: 100vh;\n    width: 25%;\n    margin-left: 1%;\n"], ["\n    display: flex;\n    height: 100vh;\n    width: 25%;\n    margin-left: 1%;\n"])));
exports.LeftMenu = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(UserProfile_1["default"], null)));
};
var templateObject_1;
