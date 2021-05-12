"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../../styledHelpers/FontSizes");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left:5%;\n    margin-right: 5%;\n    width: 90%;\n    text-align: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left:5%;\n    margin-right: 5%;\n    width: 90%;\n    text-align: center;\n"])));
var UserProfileWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 0px 5px 5px ", ";\n"], ["\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 0px 5px 5px ", ";\n"])), Colors_1.Colors.black);
var Photo = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-top:10%;\n    img {\n    max-width:40%;\n    border-radius: 10px;\n    }\n"], ["\n    margin-top:10%;\n    img {\n    max-width:40%;\n    border-radius: 10px;\n    }\n"])));
var NameSurename = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-top:10px;\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    font-family: Tahoma;\n"], ["\n    margin-top:10px;\n    color: ", ";\n    font-size: ", ";\n    font-weight:bold;\n    font-family: Tahoma;\n"])), Colors_1.Colors.lightBlue, FontSizes_1.fontSize[14]);
var JobTitle = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin-top: 10px;\n    color: gray;\n"], ["\n    margin-top: 10px;\n    color: gray;\n"])));
var ColoredLine = function (_a) {
    var color = _a.color;
    return (React.createElement("hr", { style: {
            height: 1,
            width: '99.4%'
        } }));
};
var BottomSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin: 3%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin: 3%;\n"])));
var YourNetwork = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n"])));
var YourPublications = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n"])));
var PhotoBorder = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nborder-color: black;\nborder-width: 2px;\npadding: 1%;\n"], ["\nborder-color: black;\nborder-width: 2px;\npadding: 1%;\n"])));
var UnderUserProfile = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left: 5%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left: 5%;\n"])));
var OtherSections = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: flex;\n    margin: 2%;\n    padding: 1%;\n    align-items: center;\n\n    p{\n        margin-left: 10%;\n    }\n    \n"], ["\n    display: flex;\n    margin: 2%;\n    padding: 1%;\n    align-items: center;\n\n    p{\n        margin-left: 10%;\n    }\n    \n"])));
var UserProfile = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(UserProfileWrapper, null,
            React.createElement(Photo, null,
                React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' })),
            React.createElement(NameSurename, null, "Humbrerta Swift"),
            React.createElement(JobTitle, null, "Job title - Company"),
            React.createElement(ColoredLine, { color: "black" }),
            React.createElement(BottomSection, null,
                React.createElement(YourNetwork, null,
                    React.createElement("img", { src: "./icons/network.png" }),
                    "Your network",
                    React.createElement(PhotoBorder, null,
                        React.createElement("img", { src: "./icons/user-plus.png" }))),
                React.createElement(YourPublications, null,
                    React.createElement("img", { src: "./icons/bell.png" }),
                    "Your publications",
                    React.createElement(PhotoBorder, null,
                        React.createElement("img", { src: "./icons/plus.png" }))))),
        React.createElement(UnderUserProfile, null,
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/publications.png" }),
                React.createElement("p", null, "Publications")),
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/ecosystem.png" }),
                React.createElement("p", null, "Ecosystem")),
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/entities.png" }),
                React.createElement("p", null, "Entities")))));
};
exports["default"] = UserProfile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
