"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../../styledHelpers/FontSizes");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left:5%;\n    margin-right: 5%;\n    width: 90%;\n    text-align: center;\n    font-weight:bold;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left:5%;\n    margin-right: 5%;\n    width: 90%;\n    text-align: center;\n    font-weight:bold;\n"])));
var UserProfileWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 0px 5px 5px ", ";\n    border-radius: 5%;\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n"], ["\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 0px 5px 5px ", ";\n    border-radius: 5%;\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n"])), Colors_1.Colors.black);
var Photo = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-top:10%;\n    img {\n    max-width:40%;\n    border-radius: 10px;\n    }\n"], ["\n    margin-top:10%;\n    img {\n    max-width:40%;\n    border-radius: 10px;\n    }\n"])));
var NameSurename = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-top:10px;\n    font-size: ", ";\n    font-weight:bold;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        }  \n    a {\n        text-decoration:none;\n        color: ", ";\n        }\n"], ["\n    margin-top:10px;\n    font-size: ", ";\n    font-weight:bold;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        }  \n    a {\n        text-decoration:none;\n        color: ", ";\n        }\n"])), FontSizes_1.fontSize[18], FontSizes_1.fontSize[22], Colors_1.Colors.lightBlue);
var JobTitle = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin-top: 10px;\n    color: gray;\n"], ["\n    margin-top: 10px;\n    color: gray;\n"])));
var ColoredLine = function (_a) {
    var color = _a.color;
    return (React.createElement("hr", { style: {
            height: 1,
            width: '99.4%'
        } }));
};
var BottomSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin: 3%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin: 3%;\n"])));
var YourNetwork = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 2%;\n    margin-left: 5%;\n    margin-right: 5%;\n    padding: 2%;\n    &:hover {\n            transition-delay: 0.1s;\n            background-color: lightgrey;\n            border-radius: 10px;\n        } \n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 2%;\n    margin-left: 5%;\n    margin-right: 5%;\n    padding: 2%;\n    &:hover {\n            transition-delay: 0.1s;\n            background-color: lightgrey;\n            border-radius: 10px;\n        } \n"])));
var YourPublications = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 2%;\n    margin-left: 5%;\n    margin-right: 5%;\n    padding:2%;\n    &:hover {\n            transition-delay: 0.1s;\n            background-color: lightgrey;\n            border-radius: 10px;\n        }  \n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 2%;\n    margin-left: 5%;\n    margin-right: 5%;\n    padding:2%;\n    &:hover {\n            transition-delay: 0.1s;\n            background-color: lightgrey;\n            border-radius: 10px;\n        }  \n"])));
var PhotoBorder = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nborder-color: black;\nborder-width: 2px;\npadding: 1%;\n"], ["\nborder-color: black;\nborder-width: 2px;\npadding: 1%;\n"])));
var UnderUserProfile = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left: 5%;\n    font-weight: lighter;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left: 5%;\n    font-weight: lighter;\n"])));
var OtherSections = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: flex;\n    margin: 2%;\n    padding: 1%;\n    align-items: center;\n    &:hover {\n            transition-delay: 0.2s;\n            font-weight: 600;\n        } \n\n    p{\n        margin-left: 10%;\n    }\n\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n    \n"], ["\n    display: flex;\n    margin: 2%;\n    padding: 1%;\n    align-items: center;\n    &:hover {\n            transition-delay: 0.2s;\n            font-weight: 600;\n        } \n\n    p{\n        margin-left: 10%;\n    }\n\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n    \n"])));
var UserProfile = function () {
    var _a;
    var _b = react_1.useState(), apiData = _b[0], setApiData = _b[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1").then(function (res) { return res.json(); }).then(function (json) { return setApiData(json); });
    }, []);
    return (React.createElement(Wrapper, null,
        React.createElement(UserProfileWrapper, null,
            React.createElement(Photo, null,
                React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' })),
            React.createElement(NameSurename, null,
                React.createElement("a", { href: "MyProfile" },
                    " ", apiData === null || apiData === void 0 ? void 0 :
                    apiData.name,
                    " ")),
            React.createElement(JobTitle, null, (_a = apiData === null || apiData === void 0 ? void 0 : apiData.company) === null || _a === void 0 ? void 0 : _a.name),
            React.createElement(ColoredLine, { color: "black" }),
            React.createElement(BottomSection, null,
                React.createElement(YourNetwork, null,
                    React.createElement("img", { src: "./icons/network.png" }),
                    React.createElement("a", { href: "testsite" }, " Your network "),
                    React.createElement(PhotoBorder, null,
                        React.createElement("img", { src: "./icons/user-plus.png" }))),
                React.createElement(YourPublications, null,
                    React.createElement("img", { src: "./icons/bell.png" }),
                    React.createElement("a", { href: "Publications" }, " Your publications "),
                    React.createElement(PhotoBorder, null,
                        React.createElement("img", { src: "./icons/plus.png" }))))),
        React.createElement(UnderUserProfile, null,
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/publications.png" }),
                React.createElement("a", { href: "Publications" },
                    " ",
                    React.createElement("p", null, "Publications"),
                    " ")),
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/ecosystem.png" }),
                React.createElement("a", { href: "testsite" },
                    " ",
                    React.createElement("p", null, "Ecosystem"),
                    " ")),
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/entities.png" }),
                React.createElement("a", { href: "Entities" },
                    " ",
                    React.createElement("p", null, "Entities"),
                    " ")))));
};
exports["default"] = UserProfile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
