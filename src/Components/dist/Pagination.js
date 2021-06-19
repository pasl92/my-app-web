"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var PaginationDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    text-decoration: none;\n"], ["\n    display: flex;\n    justify-content: center;\n    text-decoration: none;\n"])));
var Pagi = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 1%;\n"], ["\n    margin: 1%;\n"])));
var Pagination = function (_a) {
    var site = _a.site, postsPerPage = _a.postsPerPage, totalPosts = _a.totalPosts, paginate = _a.paginate;
    var pageNumbers = [];
    for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (react_1["default"].createElement(PaginationDiv, null, pageNumbers.map(function (number) { return (react_1["default"].createElement(Pagi, { key: number, className: 'page-item' },
        react_1["default"].createElement("a", { onClick: function () { return paginate(number); }, href: site, className: 'page-link' }, number))); })));
};
exports["default"] = Pagination;
var templateObject_1, templateObject_2;
