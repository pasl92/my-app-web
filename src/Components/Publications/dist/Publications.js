"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Publications = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../styledHelpers/Colors");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n\n"], ["\n    display: flex;\n\n"])));
var PublicationsSite = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding-left: 50%;\n    padding-top:4%;\n    img{\n        box-shadow: 1px 1px 12px ", ";\n    }\n"], ["\n    padding-left: 50%;\n    padding-top:4%;\n    img{\n        box-shadow: 1px 1px 12px ", ";\n    }\n"])), Colors_1.Colors.black);
exports.Publications = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(PublicationsSite, null, "Tutaj b\u0119dzi\u0119 podstrona Publikacje")));
};
var templateObject_1, templateObject_2;
