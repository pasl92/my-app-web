"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ExpertiseSections = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var ExpertiseSectionsDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"], ["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"])), Colors_1.Colors.black);
var InfoSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    p{\n        color: gray;\n        padding: 1%;\n        margin-bottom: 0.5%;\n        margin-top: 2%;\n    }\n    h3{\n        background-color: whitesmoke;\n        color: ", ";\n        width: max-content;\n        padding: 2%;\n        border-radius: 10px;;\n        font-weight: 550;\n        margin-right: 2%;\n        box-shadow: 0px 1px 1px ", ";\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    p{\n        color: gray;\n        padding: 1%;\n        margin-bottom: 0.5%;\n        margin-top: 2%;\n    }\n    h3{\n        background-color: whitesmoke;\n        color: ", ";\n        width: max-content;\n        padding: 2%;\n        border-radius: 10px;;\n        font-weight: 550;\n        margin-right: 2%;\n        box-shadow: 0px 1px 1px ", ";\n    }\n"])), Colors_1.Colors.lightBlue, Colors_1.Colors.black);
var ManyInfoDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
exports.ExpertiseSections = function () {
    return (React.createElement(ExpertiseSectionsDiv, null,
        React.createElement(InfoSection, null,
            React.createElement("p", null, "Expertise"),
            " ",
            React.createElement("h3", null, "Mergers and acquisition")),
        React.createElement(InfoSection, null,
            React.createElement("p", null, "Specialites"),
            React.createElement(ManyInfoDiv, null,
                React.createElement("h3", null, "Cross border operation"),
                " ",
                React.createElement("h3", null, "Transaction over 500M$"))),
        React.createElement(InfoSection, null,
            React.createElement("p", null, "Admission to practice law"),
            React.createElement(ManyInfoDiv, null,
                React.createElement("h3", null, "Paris bar association"),
                " ",
                React.createElement("h3", null, "Tunisian bar association"))),
        React.createElement(InfoSection, null,
            React.createElement("p", null, "Countries"),
            React.createElement(ManyInfoDiv, null,
                React.createElement("h3", null, "Tunisia"),
                " ",
                React.createElement("h3", null, "Poland"),
                " ",
                React.createElement("h3", null, "Italy")))));
};
var templateObject_1, templateObject_2, templateObject_3;
