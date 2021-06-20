"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 60%;\n  align-items: center;\n"], ["\n  display: flex;\n  width: 60%;\n  align-items: center;\n"])));
var Input = styled_components_1["default"].input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 70%;\n  height: 60%;\n  border: 1px solid lightgrey;\n  text-align: center;\n  font-family:Tahoma;\n  font-size: 14px;\n  border-radius: 10px;\n"], ["\n  width: 70%;\n  height: 60%;\n  border: 1px solid lightgrey;\n  text-align: center;\n  font-family:Tahoma;\n  font-size: 14px;\n  border-radius: 10px;\n"])));
var SearchIcon = styled_components_1["default"].img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-size: cover;\n  :hover {\n          cursor: pointer;\n  }  \n"], ["\n  background-size: cover;\n  :hover {\n          cursor: pointer;\n  }  \n"])));
var Search = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Wrapper, null,
            React.createElement(Input, { placeholder: 'Search Legalcluster...' }),
            React.createElement(SearchIcon, { src: "./icons/search.svg", alt: "img" }))));
};
exports["default"] = Search;
var templateObject_1, templateObject_2, templateObject_3;
