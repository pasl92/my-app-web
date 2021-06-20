"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.WorkspacesSite = void 0;
var styled_components_1 = require("styled-components");
var ResumeYourWork_1 = require("../MainPage/Components/ResumeYourWork");
var FontSizes_1 = require("../../styledHelpers/FontSizes");
var Colors_1 = require("../../styledHelpers/Colors");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    margin-right: 5%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    margin-right: 5%;\n"])));
var TopSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n    border-radius: 10px;\n    img{\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n    }\n"], ["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n    border-radius: 10px;\n    img{\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n    }\n"])), Colors_1.Colors.black);
var TopPhoteSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    img{\n        width: 100%;\n        height: 300px;\n    }\n"], ["\n    img{\n        width: 100%;\n        height: 300px;\n    }\n"])));
var TopTextSection = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    \n"], ["\n    \n"])));
var MiddleSection = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 2%;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n    border-radius: 10px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 2%;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n    border-radius: 10px;\n"])), Colors_1.Colors.black);
var TitleMiddleDiv = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    margin: 1%;\n    margin-bottom: 1%;\n    margin-left: 3%;\n    font-size: ", ";\n    h3{\n        font-weight: bold;\n    }\n    p{\n        margin-right: 2%;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    margin: 1%;\n    margin-bottom: 1%;\n    margin-left: 3%;\n    font-size: ", ";\n    h3{\n        font-weight: bold;\n    }\n    p{\n        margin-right: 2%;\n    }\n"])), FontSizes_1.fontSize[16]);
var TitleTopDiv = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    margin: 1%;\n    margin-bottom: 1%;\n    font-size: ", ";\n    font-weight: bold;\n    img{\n        margin-right: 2%;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    margin: 1%;\n    margin-bottom: 1%;\n    font-size: ", ";\n    font-weight: bold;\n    img{\n        margin-right: 2%;\n    }\n"])), FontSizes_1.fontSize[18]);
var TitleBottomDiv = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: flex;\n    margin: 1%;\n    margin-bottom: 1%;\n    font-size: ", ";\n    p{\n        margin-left: 2%;\n    }\n    img{\n        width: 60px;\n        height: 70px;\n    }\n"], ["\n    display: flex;\n    margin: 1%;\n    margin-bottom: 1%;\n    font-size: ", ";\n    p{\n        margin-left: 2%;\n    }\n    img{\n        width: 60px;\n        height: 70px;\n    }\n"])), FontSizes_1.fontSize[16]);
var BoxsMiddleDiv = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-around;\n"], ["\n    display: flex;\n    justify-content: space-around;\n"])));
var Box = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    padding: 2%;\n    margin: 1%;\n    margin-bottom: 2%;\n    margin-top: 0;\n    max-width: 25%;\n    background-color: lightgrey;\n    box-shadow: 0px 5px 5px ", ";\n    img{\n        height: 30px;\n        width: 20px;\n    }\n    h3{\n        font-weight: bold;\n        padding-bottom: 2%;\n        padding-top: 2%;\n    }\n\n"], ["\n    display: flex;\n    flex-direction: column;\n    padding: 2%;\n    margin: 1%;\n    margin-bottom: 2%;\n    margin-top: 0;\n    max-width: 25%;\n    background-color: lightgrey;\n    box-shadow: 0px 5px 5px ", ";\n    img{\n        height: 30px;\n        width: 20px;\n    }\n    h3{\n        font-weight: bold;\n        padding-bottom: 2%;\n        padding-top: 2%;\n    }\n\n"])), Colors_1.Colors.black);
exports.WorkspacesSite = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(TopSection, null,
            React.createElement(TopPhoteSection, null,
                React.createElement("img", { src: './panoramic1.png' })),
            React.createElement(TopTextSection, null,
                React.createElement(TitleTopDiv, null,
                    React.createElement("p", null, "Corporate holdings"),
                    " ",
                    React.createElement("img", { src: './icons/cog.png' }),
                    " "),
                React.createElement(TitleBottomDiv, null,
                    " ",
                    React.createElement("img", { src: './icons/entities2.png' }),
                    " ",
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
                    " "))),
        React.createElement(MiddleSection, null,
            React.createElement(TitleMiddleDiv, null,
                React.createElement("h3", null, "Start working on corporate metters"),
                React.createElement("p", null, "Hide")),
            React.createElement(BoxsMiddleDiv, null,
                React.createElement(Box, null,
                    React.createElement("img", { src: './icons/entities2.png' }),
                    React.createElement("h3", null, "Explore your entities"),
                    React.createElement("p", null, "Take  few minutes to look at the most important elements and specificities of your entities")),
                React.createElement(Box, null,
                    React.createElement("img", { src: './icons/entities2.png' }),
                    React.createElement("h3", null, "Explore your entities"),
                    React.createElement("p", null, "Take  few minutes to look at the most important elements and specificities of your entities")),
                React.createElement(Box, null,
                    React.createElement("img", { src: './icons/entities2.png' }),
                    React.createElement("h3", null, "Explore your entities"),
                    React.createElement("p", null, "Take  few minutes to look at the most important elements and specificities of your entities")))),
        React.createElement(ResumeYourWork_1.ResumeYourWork, null)));
};
exports["default"] = exports.WorkspacesSite;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
