"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../styledHelpers/Colors");
var FontSizes_1 = require("../styledHelpers/FontSizes");
var lodash_1 = require("lodash");
var EntitieSection = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: whitesmoke;\n    margin: 0.5%;\n    display: flex;\n    width: 96.5%;\n    height: 150px;\n    padding: 0.5%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"], ["\n    background-color: whitesmoke;\n    margin: 0.5%;\n    display: flex;\n    width: 96.5%;\n    height: 150px;\n    padding: 0.5%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"])), Colors_1.Colors.black, Colors_1.Colors.black);
var PostsSectionTitle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    margin-bottom: 0.5%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    margin-bottom: 0.5%;\n"])), Colors_1.Colors.lightBlue, FontSizes_1.fontSize[14]);
var PostsSectionBottom = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 0.5%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 0.5%;\n"])), Colors_1.Colors.grey, FontSizes_1.fontSize[12]);
var EntitieDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n        \n"], ["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n        \n"])));
var EntitiePhoto = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var EntitieRightSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 2%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 2%;\n"])));
var EntitieList = function (_a) {
    var entities = _a.entities, loading = _a.loading;
    if (loading) {
        return react_1["default"].createElement("h2", null, "Loading...");
    }
    var companyName = ['Subsid Corp ltd', 'World Company SAS'];
    return (react_1["default"].createElement(EntitieDiv, null, entities.map(function (entities) { return (react_1["default"].createElement(EntitieSection, { key: entities.id, className: 'list-group-item' },
        react_1["default"].createElement(EntitiePhoto, null,
            react_1["default"].createElement("img", { src: entities.thumbnailUrl })),
        react_1["default"].createElement(EntitieRightSection, null,
            react_1["default"].createElement(PostsSectionTitle, null, lodash_1["default"].sample(companyName)),
            react_1["default"].createElement(PostsSectionBottom, null, "Caracas 1050,Distrito Capital")))); })));
};
exports["default"] = EntitieList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
