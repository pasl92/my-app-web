"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MainPage = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../styledHelpers/Colors");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    background-color: pink;\n    margin: 1%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    background-color: pink;\n    margin: 1%;\n"])));
var LatestPublications = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n"], ["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n"])), Colors_1.Colors.black);
var LeftSite = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background: url(\"testImage.png\");\n    width: 40%;\n    display: flex;\n    align-items: flex-end;\n    \n    p{\n        margin: 3%;\n        color: black;\n    }\n"], ["\n    background: url(\"testImage.png\");\n    width: 40%;\n    display: flex;\n    align-items: flex-end;\n    \n    p{\n        margin: 3%;\n        color: black;\n    }\n"])));
var RightSite = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"])));
var TitleLatestPublications = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var LastPublicationsWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n"], ["\n"])));
var Publication = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    padding: 3%;\n    img{\n        width:60px;\n    }\n"], ["\n    display: flex;\n    padding: 3%;\n    img{\n        width:60px;\n    }\n"])));
var FooterLatestPublications = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n"], ["\n"])));
exports.MainPage = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(LatestPublications, null,
            React.createElement(LeftSite, null,
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ")),
            React.createElement(RightSite, null,
                React.createElement(TitleLatestPublications, null, "Latest publications"),
                React.createElement(LastPublicationsWrapper, null,
                    React.createElement(Publication, null,
                        " ",
                        React.createElement("img", { src: "testimagepublications.png" }),
                        " TEST"),
                    React.createElement(Publication, null,
                        " ",
                        React.createElement("img", { src: "testimagepublications.png" }),
                        " TEST"),
                    React.createElement(Publication, null,
                        " ",
                        React.createElement("img", { src: "testimagepublications.png" }),
                        " TEST")),
                React.createElement(FooterLatestPublications, null, "Test link ")))));
};
exports["default"] = exports.MainPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
