"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LatestPublications = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../styledHelpers/FontSizes");
var LatestPublicationsDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n"], ["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n"])), Colors_1.Colors.black);
var LeftSite = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-image: url(\"testImage.png\");\n    box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.52);\n    width: 30%;\n    display: flex;\n    align-items: flex-end;\n    &:hover {\n            box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.9);\n        } \n    \n    p{\n        margin: 3%;\n        color: whitesmoke;\n    }\n"], ["\n    background-image: url(\"testImage.png\");\n    box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.52);\n    width: 30%;\n    display: flex;\n    align-items: flex-end;\n    &:hover {\n            box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.9);\n        } \n    \n    p{\n        margin: 3%;\n        color: whitesmoke;\n    }\n"])));
var RightSite = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"])));
var TitleLatestPublications = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    font-size: ", ";\n    font-weight: bold;\n    padding: 1%;\n\n"], ["\n    display: flex;\n    font-size: ", ";\n    font-weight: bold;\n    padding: 1%;\n\n"])), FontSizes_1.fontSize[24]);
var LastPublicationsWrapper = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n"], ["\n"])));
var Publication = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    padding: 1%;\n    img{\n        width:10%;\n        border-radius: 10px;\n    }\n    p{\n        margin: 1%;\n        margin-left: 2%;\n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"], ["\n    display: flex;\n    padding: 1%;\n    img{\n        width:10%;\n        border-radius: 10px;\n    }\n    p{\n        margin: 1%;\n        margin-left: 2%;\n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"])));
var FooterLatestPublications = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding-top: 2%;\n    padding-left: 1%;\n"], ["\n    padding-top: 2%;\n    padding-left: 1%;\n"])));
exports.LatestPublications = function () {
    return (React.createElement(LatestPublicationsDiv, null,
        React.createElement(LeftSite, null,
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ")),
        React.createElement(RightSite, null,
            React.createElement(TitleLatestPublications, null, "Latest publications"),
            React.createElement(LastPublicationsWrapper, null,
                React.createElement(Publication, null,
                    " ",
                    React.createElement("img", { src: "testimagepublications.png" }),
                    " ",
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...")),
                React.createElement(Publication, null,
                    " ",
                    React.createElement("img", { src: "testimagepublications.png" }),
                    " ",
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...")),
                React.createElement(Publication, null,
                    " ",
                    React.createElement("img", { src: "testimagepublications.png" }),
                    " ",
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."))),
            React.createElement(FooterLatestPublications, null, "Test link "))));
};
exports["default"] = exports.LatestPublications;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
