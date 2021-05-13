"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ProfileSections = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var ProfileSectionsDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n    flex-direction: column;\n"], ["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n    flex-direction: column;\n"])), Colors_1.Colors.black);
var RightSite = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"])));
exports.ProfileSections = function () {
    return (React.createElement(ProfileSectionsDiv, null,
        React.createElement(RightSite, null,
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ")),
        React.createElement(RightSite, null,
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ")),
        React.createElement(RightSite, null,
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... "))));
};
var templateObject_1, templateObject_2;
