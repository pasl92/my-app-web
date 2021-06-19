"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.InternalReviews = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var TitleDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-weight: 550;\n    margin-left: 5%;\n    margin-bottom: 1%;\n"], ["\n    font-weight: 550;\n    margin-left: 5%;\n    margin-bottom: 1%;\n"])));
var ProposalsDiv = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"], ["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"])), Colors_1.Colors.black);
var ColoredLine = function (_a) {
    var color = _a.color;
    return (React.createElement("hr", { style: {
            height: 1,
            width: '99.4%'
        } }));
};
var ColumnNameDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 600;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 600;\n"])));
var ColumnTextDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 500;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 500;\n"])));
exports.InternalReviews = function () {
    return (React.createElement("div", null,
        React.createElement(TitleDiv, null, "Internal reviews"),
        React.createElement(ProposalsDiv, null,
            React.createElement(ColumnNameDiv, null,
                React.createElement("p", null, "Name"),
                React.createElement("p", null, "Entity"),
                React.createElement("p", null, "Location"),
                React.createElement("p", null, "Expertise"),
                React.createElement("p", null, "Date")),
            React.createElement(ColoredLine, { color: "black" }),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "Name"),
                React.createElement("p", null, "Entity"),
                React.createElement("p", null, "Location"),
                React.createElement("p", null, "Expertise"),
                React.createElement("p", null, "Date")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "Name"),
                React.createElement("p", null, "Entity"),
                React.createElement("p", null, "Location"),
                React.createElement("p", null, "Expertise"),
                React.createElement("p", null, "Date")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "Name"),
                React.createElement("p", null, "Entity"),
                React.createElement("p", null, "Location"),
                React.createElement("p", null, "Expertise"),
                React.createElement("p", null, "Date")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "Name"),
                React.createElement("p", null, "Entity"),
                React.createElement("p", null, "Location"),
                React.createElement("p", null, "Expertise"),
                React.createElement("p", null, "Date")))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
