"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var styled_reset_1 = require("styled-reset");
var TopBar_1 = require("../src/Components/TopBar/TopBar");
var LeftMenu_1 = require("../src/Components/LeftMenu/LeftMenu");
var MainPage_1 = require("../src/Components/MainPage/MainPage");
var TestSite_1 = require("../src/Components/TestSite/TestSite");
var Publications_1 = require("../src/Components/Publications/Publications");
var MyProfile_1 = require("./Components/MyProfile/MyProfile");
var react_router_dom_1 = require("react-router-dom");
var Page = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: lightgrey;\n    height: auto;\n    font-family: Tahoma;\n"], ["\n    background-color: lightgrey;\n    height: auto;\n    font-family: Tahoma;\n"])));
var LeftAndMainPage = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var App = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(styled_reset_1.Reset, null),
            react_1["default"].createElement(Page, null,
                react_1["default"].createElement(TopBar_1.TopBar, null),
                react_1["default"].createElement(LeftAndMainPage, null,
                    react_1["default"].createElement(LeftMenu_1.LeftMenu, null),
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/TestSite", exact: true },
                            react_1["default"].createElement(TestSite_1.TestSite, null)),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/MainPage", exact: true },
                            react_1["default"].createElement(MainPage_1.MainPage, null)),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/Publications", exact: true },
                            react_1["default"].createElement(Publications_1.Publications, null)),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/MyProfile", exact: true },
                            react_1["default"].createElement(MyProfile_1.MyProfile, null))))))));
};
exports["default"] = App;
var templateObject_1, templateObject_2;
