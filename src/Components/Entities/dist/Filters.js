"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Filters = void 0;
var FontSizes_1 = require("../../styledHelpers/FontSizes");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../styledHelpers/Colors");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    top: 16%;\n    left: 20%;\n    width: 30%;\n    min-width: 520px;\n    background-color: whitesmoke;\n    border:1px solid gray;\n    padding: 1%;\n    box-shadow: 0px 2px 5px black;\n"], ["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    top: 16%;\n    left: 20%;\n    width: 30%;\n    min-width: 520px;\n    background-color: whitesmoke;\n    border:1px solid gray;\n    padding: 1%;\n    box-shadow: 0px 2px 5px black;\n"])));
var TopSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    color: gray;\n    font-size: ", ";\n    margin-bottom: 2%;\n"], ["\n    display: flex;\n    color: gray;\n    font-size: ", ";\n    margin-bottom: 2%;\n"])), FontSizes_1.fontSize[12]);
var MiddleSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    img{\n        max-width: 12px;\n        max-height: 12px;\n        padding-top: 0.5%;\n        margin-left: 2%;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    img{\n        max-width: 12px;\n        max-height: 12px;\n        padding-top: 0.5%;\n        margin-left: 2%;\n    }\n"])));
var FilterRow = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    padding: 1%;\n    p{\n        margin-left: 7%;\n    }\n    background-color: lightgrey;\n    border-radius: 10px;\n    margin-bottom: 1%;\n"], ["\n    display: flex;\n    padding: 1%;\n    p{\n        margin-left: 7%;\n    }\n    background-color: lightgrey;\n    border-radius: 10px;\n    margin-bottom: 1%;\n"])));
var InputElement = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color: whitesmoke;\n    border-radius: 10px;\n    margin-left: 4%;\n    padding-top: 0.5%;\n    padding-right: 2%;\n    padding-left: 2%;\n    font-size: ", ";\n    color: darkgrey;\n"], ["\n    background-color: whitesmoke;\n    border-radius: 10px;\n    margin-left: 4%;\n    padding-top: 0.5%;\n    padding-right: 2%;\n    padding-left: 2%;\n    font-size: ", ";\n    color: darkgrey;\n"])), FontSizes_1.fontSize[12]);
var BottomSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    margin-top: 2%;\n    img{\n        max-width: 12px;\n        max-height: 12px;\n        padding-top: 0.5%;\n        margin-left: 2%;\n    }\n    p{\n        margin-left: 3%;\n    }\n    background-color: whitesmoke;\n    color: ", ";\n"], ["\n    display: flex;\n    margin-top: 2%;\n    img{\n        max-width: 12px;\n        max-height: 12px;\n        padding-top: 0.5%;\n        margin-left: 2%;\n    }\n    p{\n        margin-left: 3%;\n    }\n    background-color: whitesmoke;\n    color: ", ";\n"])), Colors_1.Colors.lightBlue);
exports.Filters = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(TopSection, null,
            React.createElement("p", null, "Rows are filtered by the following conditions starting the top...     Coming soon...")),
        React.createElement(MiddleSection, null,
            React.createElement(FilterRow, null,
                React.createElement("img", { src: './icons/close.png' }),
                " ",
                React.createElement("p", null, "Where"),
                " ",
                React.createElement("p", null, "Company"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                " ",
                React.createElement("p", null, "Contains"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                React.createElement(InputElement, null, "Type...")),
            React.createElement(FilterRow, null,
                React.createElement("img", { src: './icons/close.png' }),
                " ",
                React.createElement("p", null, "Where"),
                " ",
                React.createElement("p", null, "Status"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                " ",
                React.createElement("p", null, "Is"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                React.createElement(InputElement, null, "Type..."),
                React.createElement("p", null, "In"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                " ",
                React.createElement(InputElement, null, "Entity..."),
                " "),
            React.createElement(FilterRow, null,
                React.createElement("img", { src: './icons/close.png' }),
                " ",
                React.createElement("p", null, "And"),
                " ",
                React.createElement("p", null, "Company"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                " ",
                React.createElement("p", null, "Contains"),
                " ",
                React.createElement("img", { src: './icons/arrow.png' }),
                React.createElement(InputElement, null, "Type..."))),
        React.createElement(BottomSection, null,
            React.createElement("img", { src: './icons/plus.png' }),
            " ",
            React.createElement("p", null, "Add Filter"),
            " ",
            React.createElement("p", null, "choose property"),
            " ",
            React.createElement("img", { src: './icons/arrow.png' }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
