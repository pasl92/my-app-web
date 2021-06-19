"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PanelInformations = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var PanelInformationsDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"], ["\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n    padding: 3%;\n    padding-top: 0;\n    margin: 3%;\n    margin-top: 0;\n"])), Colors_1.Colors.black);
var InfoSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    p{\n        color: gray;\n        padding: 1%;\n        margin-bottom: 0.5%;\n        margin-top: 2%;\n    }\n    h3{\n        background-color: whitesmoke;\n        color: ", ";\n        width: max-content;\n        padding: 2%;\n        border-radius: 10px;;\n        font-weight: 550;\n        margin-right: 2%;\n        box-shadow: 0px 1px 1px ", ";\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    p{\n        color: gray;\n        padding: 1%;\n        margin-bottom: 0.5%;\n        margin-top: 2%;\n    }\n    h3{\n        background-color: whitesmoke;\n        color: ", ";\n        width: max-content;\n        padding: 2%;\n        border-radius: 10px;;\n        font-weight: 550;\n        margin-right: 2%;\n        box-shadow: 0px 1px 1px ", ";\n    }\n"])), Colors_1.Colors.lightBlue, Colors_1.Colors.black);
var ManyInfoDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var TitleDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-weight: 550;\n    margin-left: 5%;\n    margin-bottom: 1%;\n"], ["\n    font-weight: 550;\n    margin-left: 5%;\n    margin-bottom: 1%;\n"])));
var ManyInternationalInfoDiv = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var ContractorDiv = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    background-color: whitesmoke;\n    border-radius: 10px;;\n    font-weight: 550;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    box-shadow: 0px 1px 1px ", ";\n    align-items: center;\n    width: 50%;\n    img{\n        width: 40px;\n        height: 40px;\n        border-radius: 10px;\n        margin-left: 3%;\n        margin-right: 2%;\n        padding: 1%1%;\n    }\n    h2{\n        color: ", ";\n        width: max-content;\n        font-weight: 550;\n        margin-right: 2%;\n    }\n    p{\n        color: gray;\n        padding: 0%;\n        margin-bottom: 0%;\n        margin-top: 0%;\n        margin-left: 4%;\n    }\n"], ["\n    display: flex;\n    background-color: whitesmoke;\n    border-radius: 10px;;\n    font-weight: 550;\n    margin-right: 2%;\n    margin-bottom: 2%;\n    box-shadow: 0px 1px 1px ", ";\n    align-items: center;\n    width: 50%;\n    img{\n        width: 40px;\n        height: 40px;\n        border-radius: 10px;\n        margin-left: 3%;\n        margin-right: 2%;\n        padding: 1%1%;\n    }\n    h2{\n        color: ", ";\n        width: max-content;\n        font-weight: 550;\n        margin-right: 2%;\n    }\n    p{\n        color: gray;\n        padding: 0%;\n        margin-bottom: 0%;\n        margin-top: 0%;\n        margin-left: 4%;\n    }\n"])), Colors_1.Colors.black, Colors_1.Colors.lightBlue);
exports.PanelInformations = function () {
    return (React.createElement("div", null,
        React.createElement(TitleDiv, null, "Panel Informations"),
        React.createElement(PanelInformationsDiv, null,
            React.createElement(InfoSection, null,
                React.createElement("p", null, "Hourly fee"),
                " ",
                React.createElement("h3", null, "610$ / hour")),
            React.createElement(InfoSection, null,
                React.createElement("p", null, "Terms and conditions"),
                React.createElement(ManyInfoDiv, null,
                    React.createElement("h3", null, "Monthly 10k$ retainer - see with Jeanny Smith"),
                    " ")),
            React.createElement(InfoSection, null,
                React.createElement("p", null, "Services and projexts"),
                React.createElement(ManyInfoDiv, null,
                    React.createElement("h3", null, "Corporate M&A and international acquisitions"),
                    " ")),
            React.createElement(InfoSection, null,
                React.createElement("p", null, "Internal correspondants"),
                React.createElement(ManyInternationalInfoDiv, null,
                    React.createElement(ContractorDiv, null,
                        React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' }),
                        React.createElement("h2", null, "Janusz Tracz"),
                        " ",
                        React.createElement("p", null, "Message"),
                        " ",
                        React.createElement("p", null, "Profile")),
                    React.createElement(ContractorDiv, null,
                        React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' }),
                        React.createElement("h2", null, "Adam Skock"),
                        " ",
                        React.createElement("p", null, "Message"),
                        " ",
                        React.createElement("p", null, "Profile")),
                    React.createElement(ContractorDiv, null,
                        React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' }),
                        React.createElement("h2", null, "Jan Kowalski"),
                        " ",
                        React.createElement("p", null, "Message"),
                        " ",
                        React.createElement("p", null, "Profile")))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
