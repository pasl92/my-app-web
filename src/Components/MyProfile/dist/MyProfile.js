"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MyProfile = void 0;
var styled_components_1 = require("styled-components");
var ProfileSection_1 = require("../MyProfile/Components/ProfileSection");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    width: 100%;\n    margin: 1%;\n    margin-right:3%;\n"], ["\n    display: flex;\n    width: 100%;\n    margin: 1%;\n    margin-right:3%;\n"])));
exports.MyProfile = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(ProfileSection_1.ProfileSections, null)));
};
var templateObject_1;
