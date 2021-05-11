"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MainPage = void 0;
var styled_components_1 = require("styled-components");
var LatestPublications_1 = require("./Components/LatestPublications");
var Workspaces_1 = require("./Components/Workspaces");
var ResumeYourWork_1 = require("./Components/ResumeYourWork");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    margin-right:3%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    margin-right:3%;\n"])));
exports.MainPage = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(LatestPublications_1.LatestPublications, null),
        React.createElement(Workspaces_1.Workspaces, null),
        React.createElement(ResumeYourWork_1.ResumeYourWork, null)));
};
exports["default"] = exports.MainPage;
var templateObject_1;
