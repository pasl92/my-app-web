"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LatestPublications = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../styledHelpers/FontSizes");
var LatestPublicationsDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n"], ["\n    display: flex;\n    background-color: whitesmoke;\n    box-shadow: 0px 5px 5px ", ";\n"])), Colors_1.Colors.black);
var LeftSite = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-image: url(\"testImage.png\");\n    box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.52);\n    width: 30%;\n    display: flex;\n    align-items: flex-end;\n    &:hover {\n            box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.9);\n        } \n    \n    p{\n        margin: 3%;\n        color: whitesmoke;\n    }\n"], ["\n    background-image: url(\"testImage.png\");\n    box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.52);\n    width: 30%;\n    display: flex;\n    align-items: flex-end;\n    &:hover {\n            box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.9);\n        } \n    \n    p{\n        margin: 3%;\n        color: whitesmoke;\n    }\n"])));
var RightSite = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    padding: 1%;\n"])));
var TitleLatestPublications = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    font-size: ", ";\n    font-weight: bold;\n    padding: 1%;\n\n"], ["\n    display: flex;\n    font-size: ", ";\n    font-weight: bold;\n    padding: 1%;\n\n"])), FontSizes_1.fontSize[24]);
var LastPublicationsWrapper = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n"], ["\n"])));
var Publication = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    padding: 1%;\n    img{\n        width:10%;\n        border-radius: 10px;\n    }\n    p{\n        margin: 1%;\n        margin-left: 2%;\n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"], ["\n    display: flex;\n    padding: 1%;\n    img{\n        width:10%;\n        border-radius: 10px;\n    }\n    p{\n        margin: 1%;\n        margin-left: 2%;\n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"])));
var FooterLatestPublications = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding-top: 1%;\n    padding-left: 1%;\n    font-weight: bold;\n    font-size: ", ";\n    a{\n        text-decoration:none;\n    }\n"], ["\n    padding-top: 1%;\n    padding-left: 1%;\n    font-weight: bold;\n    font-size: ", ";\n    a{\n        text-decoration:none;\n    }\n"])), FontSizes_1.fontSize[20]);
var PublicationTextUser = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var UserDiv = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 3%;\n    margin-left: 2%;\n"], ["\n    color: ", ";\n    font-size: ", ";\n    margin-top: 3%;\n    margin-left: 2%;\n"])), Colors_1.Colors.grey, FontSizes_1.fontSize[12]);
exports.LatestPublications = function () {
    var _a = react_1.useState(), apiData0 = _a[0], setApiData0 = _a[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(function (res) { return res.json(); }).then(function (json) { return setApiData0(json); });
    }, []);
    var _b = react_1.useState(), apiData1 = _b[0], setApiData1 = _b[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/2").then(function (res) { return res.json(); }).then(function (json) { return setApiData1(json); });
    }, []);
    var _c = react_1.useState(), apiData2 = _c[0], setApiData2 = _c[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/3").then(function (res) { return res.json(); }).then(function (json) { return setApiData2(json); });
    }, []);
    return (React.createElement(LatestPublicationsDiv, null,
        React.createElement(LeftSite, null,
            React.createElement("p", null, apiData0 === null || apiData0 === void 0 ? void 0 : apiData0.body)),
        React.createElement(RightSite, null,
            React.createElement(TitleLatestPublications, null, "Latest publications"),
            React.createElement(LastPublicationsWrapper, null,
                React.createElement(Publication, null,
                    " ",
                    React.createElement("img", { src: "testimagepublications.png" }),
                    React.createElement(PublicationTextUser, null,
                        React.createElement("p", null, apiData0 === null || apiData0 === void 0 ? void 0 : apiData0.body),
                        " ",
                        React.createElement(UserDiv, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe"))),
                React.createElement(Publication, null,
                    " ",
                    React.createElement("img", { src: "testimagepublications.png" }),
                    " ",
                    React.createElement(PublicationTextUser, null,
                        React.createElement("p", null, apiData1 === null || apiData1 === void 0 ? void 0 : apiData1.body),
                        " ",
                        React.createElement(UserDiv, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")),
                    " "),
                React.createElement(Publication, null,
                    " ",
                    React.createElement("img", { src: "testimagepublications.png" }),
                    " ",
                    React.createElement(PublicationTextUser, null,
                        React.createElement("p", null, apiData2 === null || apiData2 === void 0 ? void 0 : apiData2.body),
                        " ",
                        React.createElement(UserDiv, null, "Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe")))),
            React.createElement(FooterLatestPublications, null,
                React.createElement("a", { href: "Publications" }, " See more publications")))));
};
exports["default"] = exports.LatestPublications;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
