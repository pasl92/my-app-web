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
var PostsSection = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    padding: 0.5%;\n    margin-bottom: 0.5%;\n    margin-left: 1%;\n    margin-right: 1%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"], ["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    padding: 0.5%;\n    margin-bottom: 0.5%;\n    margin-left: 1%;\n    margin-right: 1%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"])), Colors_1.Colors.black, Colors_1.Colors.black);
var PostsSectionTitle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    margin-bottom: 0.5%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    margin-bottom: 0.5%;\n"])), Colors_1.Colors.lightBlue, FontSizes_1.fontSize[14]);
var PostsSectionText = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n"], ["\n"])));
var PostsSectionBottom = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 0.5%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 0.5%;\n"])), Colors_1.Colors.grey, FontSizes_1.fontSize[12]);
var Posts = function (_a) {
    var posts = _a.posts, loading = _a.loading;
    if (loading) {
        return react_1["default"].createElement("h2", null, "Loading...");
    }
    return (react_1["default"].createElement("div", null, posts.map(function (post) { return (react_1["default"].createElement(PostsSection, { key: post.id, className: 'list-group-item' },
        react_1["default"].createElement(PostsSectionTitle, null, post.title),
        react_1["default"].createElement(PostsSectionText, null, post.body),
        react_1["default"].createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe"))); })));
};
exports["default"] = Posts;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
