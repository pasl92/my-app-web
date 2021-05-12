"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ResumeYourWork = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var Search_1 = require("../../TopBar/Components/Search/Search");
var FontSizes_1 = require("../../../styledHelpers/FontSizes");
var ResumeYourWorkDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-top: 3%;\n    display: flex;\n    flex-direction: column;\n"], ["\n    margin-top: 3%;\n    display: flex;\n    flex-direction: column;\n"])));
var TopSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    margin-bottom: 1%;\n    align-items: center;\n"], ["\n    display: flex;\n    margin-bottom: 1%;\n    align-items: center;\n"])));
var ResumeYourWorkTitle = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    margin-bottom: 0%;\n    margin-left: 3%;\n    margin-right: 5%;\n    font-size: ", ";\n    font-weight: bold;\n"], ["\n    display: flex;\n    margin-bottom: 0%;\n    margin-left: 3%;\n    margin-right: 5%;\n    font-size: ", ";\n    font-weight: bold;\n"])), FontSizes_1.fontSize[24]);
var Fallowed = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n"], ["\n"])));
var PostsSection = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    padding: 0.5%;\n    margin-bottom: 0.5%;\n    margin-left: 1%;\n    margin-right: 1%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"], ["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    padding: 0.5%;\n    margin-bottom: 0.5%;\n    margin-left: 1%;\n    margin-right: 1%;\n    box-shadow: 0px 2px 5px ", ";\n    &:hover {\n            box-shadow: 0px 4px 20px ", ";\n        } \n"])), Colors_1.Colors.black, Colors_1.Colors.black);
var PostsSectionTitle = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    margin-bottom: 0.5%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    margin-bottom: 0.5%;\n"])), Colors_1.Colors.lightBlue, FontSizes_1.fontSize[14]);
var PostsSectionText = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n"], ["\n"])));
var PostsSectionBottom = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 0.5%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 0.5%;\n"])), Colors_1.Colors.grey, FontSizes_1.fontSize[12]);
exports.ResumeYourWork = function () {
    return (React.createElement(ResumeYourWorkDiv, null,
        React.createElement(TopSection, null,
            React.createElement(ResumeYourWorkTitle, null, "Resume your Work"),
            React.createElement(Search_1["default"], null),
            React.createElement(Fallowed, null, "Fallowed...")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
        React.createElement(PostsSection, null,
            React.createElement(PostsSectionTitle, null, "Word company SAS"),
            React.createElement(PostsSectionText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."),
            React.createElement(PostsSectionBottom, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe"))));
};
exports["default"] = exports.ResumeYourWork;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
