"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TopBar = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../styledHelpers/Colors");
var Search_1 = require("./Components/Search/Search");
var react_dropdown_hook_1 = require("react-dropdown-hook");
var DropDownMenu_1 = require("./Components/DropDownMenu/DropDownMenu");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    background: lightcyan;\n    box-shadow: 1px 1px 12px ", ";\n    display: flex;\n    \n"], ["\n    width: 100%;\n    background: lightcyan;\n    box-shadow: 1px 1px 12px ", ";\n    display: flex;\n    \n"])), Colors_1.Colors.black);
var LeftSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    background-color: lightblue;\n    width: 20%;\n    padding-left: 1%;\n    align-items: center;\n"], ["\n    display: flex;\n    background-color: lightblue;\n    width: 20%;\n    padding-left: 1%;\n    align-items: center;\n"])));
var Logo = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nbackground-color: lightgoldenrodyellow;\n    img{\n        height: 30px;\n    }\n"], ["\nbackground-color: lightgoldenrodyellow;\n    img{\n        height: 30px;\n    }\n"])));
var Home = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background-color: lightpink;\n    padding-left: 5%;\n"], ["\n    background-color: lightpink;\n    padding-left: 5%;\n"])));
var HomeInscription = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    padding-left: 3%;\n    padding-right: 50%;\n\n"], ["\n    padding-left: 3%;\n    padding-right: 50%;\n\n"])));
var NotificationsWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\nbackground-color: lightseagreen;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: 20%;\n    padding: 0.2%;\n    padding-right: 2%;\n  "], ["\nbackground-color: lightseagreen;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: 20%;\n    padding: 0.2%;\n    padding-right: 2%;\n  "])));
var NotificationButtons = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    background-color:", ";\n            :hover {\n            background-color: lightblue;\n    }  \n    padding: 2%;\n    margin-left: 2%;\n    display: flex;\n    background-color: lightgrey;\n    border-radius: 50%;\n    align-items: center;\n"], ["\n    background-color:", ";\n            :hover {\n            background-color: lightblue;\n    }  \n    padding: 2%;\n    margin-left: 2%;\n    display: flex;\n    background-color: lightgrey;\n    border-radius: 50%;\n    align-items: center;\n"])), Colors_1.Colors.white);
var NotificationIcon = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    position: relative;\n    float: left;\n"], ["\n    position: relative;\n    float: left;\n"])));
var NotifyBadge = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    position: relative;\n    float: left;\n"], ["\n    position: relative;\n    float: left;\n"])));
var Arrow = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\nbackground-color: lightgreen;\n    display: flex;\n    justify-content: flex-end;\n    img {\n    :hover {\n          cursor: pointer;\n  }  \n  }\n"], ["\nbackground-color: lightgreen;\n    display: flex;\n    justify-content: flex-end;\n    img {\n    :hover {\n          cursor: pointer;\n  }  \n  }\n"])));
exports.TopBar = function () {
    var _a = react_dropdown_hook_1["default"](), wrappRef = _a[0], dropdownOpen = _a[1], toggleDropdown = _a[2];
    var menuHandler = function () {
        toggleDropdown();
    };
    return (React.createElement(Wrapper, null,
        React.createElement(LeftSection, { ref: wrappRef, onClick: menuHandler },
            React.createElement(Logo, null,
                React.createElement("img", { src: '/logo.png' })),
            React.createElement(Home, null,
                React.createElement("img", { src: './icons/house2.png' })),
            React.createElement(HomeInscription, null, "Home"),
            React.createElement(Arrow, null,
                React.createElement("img", { src: './icons/arrow-down.svg', alt: "Drop down menu arrow" })),
            dropdownOpen && React.createElement(DropDownMenu_1.DropDownMenu, null)),
        React.createElement(Search_1["default"], null),
        React.createElement(NotificationsWrapper, null,
            React.createElement(NotificationButtons, null,
                React.createElement("img", { src: "./icons/house.png" })),
            React.createElement(NotificationButtons, null,
                React.createElement("img", { src: "./icons/comments.png" })),
            React.createElement(NotificationButtons, null,
                React.createElement("img", { src: "./icons/bell.png" })))));
};
exports["default"] = exports.TopBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
