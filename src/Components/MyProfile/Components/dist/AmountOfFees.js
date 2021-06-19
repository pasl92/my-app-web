"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AmountOfFees = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var TitleDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-weight: 550;\n    margin-left: 5%;\n    margin-bottom: 1%;\n"], ["\n    font-weight: 550;\n    margin-left: 5%;\n    margin-bottom: 1%;\n"])));
var ProposalsDiv = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"], ["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"])), Colors_1.Colors.black);
var ColumnNameDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 600;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 600;\n"])));
var ColumnTextDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 500;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding: 2%;\n    padding-bottom: 0;\n    font-weight: 500;\n"])));
exports.AmountOfFees = function () {
    return (React.createElement("div", null,
        React.createElement(TitleDiv, null, "Amount of fees"),
        React.createElement(ProposalsDiv, null,
            React.createElement(ColumnNameDiv, null,
                React.createElement("p", null, "Year"),
                React.createElement("p", null, "Cost center"),
                React.createElement("p", null, "Total amount"),
                React.createElement("p", null, "Law firm")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "2019"),
                React.createElement("p", null, "SC 153"),
                React.createElement("p", null, "2500$"),
                React.createElement("p", null, "Linklaters")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "2018"),
                React.createElement("p", null, "SC 153"),
                React.createElement("p", null, "3500$"),
                React.createElement("p", null, "Linklaters")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "2017"),
                React.createElement("p", null, "SC 153"),
                React.createElement("p", null, "4500$"),
                React.createElement("p", null, "Linklaters")),
            React.createElement(ColumnTextDiv, null,
                React.createElement("p", null, "2016"),
                React.createElement("p", null, "SC 153"),
                React.createElement("p", null, "5500$"),
                React.createElement("p", null, "Linklaters")))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
