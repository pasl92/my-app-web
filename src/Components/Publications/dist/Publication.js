"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../styledHelpers/Colors");
var FontSizes_1 = require("../../styledHelpers/FontSizes");
var EntitieSection = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: whitesmoke;\n    margin: 0.5%;\n    display: flex;\n    width: 96.5%;\n    height: 150px;\n    padding: 0.5%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"], ["\n    background-color: whitesmoke;\n    margin: 0.5%;\n    display: flex;\n    width: 96.5%;\n    height: 150px;\n    padding: 0.5%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"])), Colors_1.Colors.black, Colors_1.Colors.black);
var EntitieDiv = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n        \n"], ["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n        \n"])));
var LastPublicationsWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n"], ["\n"])));
var PublicationDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    padding: 1%;\n    img{\n        width:10%;\n        border-radius: 10px;\n    }\n    p{\n        margin: 1%;\n        margin-left: 2%;\n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"], ["\n    display: flex;\n    padding: 1%;\n    img{\n        width:10%;\n        border-radius: 10px;\n    }\n    p{\n        margin: 1%;\n        margin-left: 2%;\n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"])));
var PublicationTextUser = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var UserDiv = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 3%;\n    margin-left: 2%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 3%;\n    margin-left: 2%;\n"])), Colors_1.Colors.grey, FontSizes_1.fontSize[12]);
var Publication = function (_a) {
    var publication = _a.publication, loading = _a.loading;
    if (loading) {
        return react_1["default"].createElement("h2", null, "Loading...");
    }
    return (react_1["default"].createElement(EntitieDiv, null, publication.map(function (publication) { return (react_1["default"].createElement(EntitieSection, { key: publication.id, className: 'list-group-item' },
        react_1["default"].createElement(LastPublicationsWrapper, null,
            react_1["default"].createElement(PublicationDiv, null,
                " ",
                react_1["default"].createElement("img", { src: "testimagepublications.png" }),
                react_1["default"].createElement(PublicationTextUser, null,
                    react_1["default"].createElement("p", null, publication === null || publication === void 0 ? void 0 : publication.body),
                    " ",
                    react_1["default"].createElement(UserDiv, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")))))); })));
};
exports["default"] = Publication;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
