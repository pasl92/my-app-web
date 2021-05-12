"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Workspaces = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../styledHelpers/FontSizes");
var WorkspacesDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 2%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 2%;\n"])));
var WorkspacesTitle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    margin: 1%;\n    margin-bottom: 1%;\n    margin-left: 3%;\n    font-size: ", ";\n    font-weight: bold;\n    \n"], ["\n    display: flex;\n    margin: 1%;\n    margin-bottom: 1%;\n    margin-left: 3%;\n    font-size: ", ";\n    font-weight: bold;\n    \n"])), FontSizes_1.fontSize[24]);
var WorkspacesDataDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; \n"], ["\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; \n"])));
var Post = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    margin: 1%;\n    box-shadow: 0px 5px 5px ", ";\n    background-color: whitesmoke;\n    flex: 0 0 auto; \n    &:hover {\n            box-shadow: 0px 10px 15px ", ";\n        } \n    \n\n    img{\n        max-width: 100%;\n        max-height: 100%;    \n        }\n\n    p{\n        margin: 1%;\n        margin-bottom: 10%;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    margin: 1%;\n    box-shadow: 0px 5px 5px ", ";\n    background-color: whitesmoke;\n    flex: 0 0 auto; \n    &:hover {\n            box-shadow: 0px 10px 15px ", ";\n        } \n    \n\n    img{\n        max-width: 100%;\n        max-height: 100%;    \n        }\n\n    p{\n        margin: 1%;\n        margin-bottom: 10%;\n    }\n"])), Colors_1.Colors.black, Colors_1.Colors.black);
exports.Workspaces = function () {
    return (React.createElement(WorkspacesDiv, null,
        React.createElement(WorkspacesTitle, null, "Workspaces"),
        React.createElement(WorkspacesDataDiv, null,
            React.createElement(Post, null,
                "  ",
                React.createElement("img", { src: './testImage.png' }),
                " ",
                React.createElement("p", null, "Test")),
            React.createElement(Post, null,
                "  ",
                React.createElement("img", { src: './testImage.png' }),
                " ",
                React.createElement("p", null, "Test")),
            React.createElement(Post, null,
                "  ",
                React.createElement("img", { src: './testImage.png' }),
                " ",
                React.createElement("p", null, "Test")),
            React.createElement(Post, null,
                "  ",
                React.createElement("img", { src: './testImage.png' }),
                " ",
                React.createElement("p", null, "Test")),
            React.createElement(Post, null,
                "  ",
                React.createElement("img", { src: './testImage.png' }),
                " ",
                React.createElement("p", null, "Test")))));
};
exports["default"] = exports.Workspaces;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
