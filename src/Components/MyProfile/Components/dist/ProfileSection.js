"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ProfileSections = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../styledHelpers/FontSizes");
var react_1 = require("react");
var ProfileSectionsDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    box-shadow: 0px 5px 5px ", ";\n    flex-direction: column;\n    padding: 3%;\n"], ["\n    width: 100%;\n    display: flex;\n    box-shadow: 0px 5px 5px ", ";\n    flex-direction: column;\n    padding: 3%;\n"])), Colors_1.Colors.black);
var TopSection = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    p{\n        margin-left: 1%;\n        font-size: ", ";\n    }\n    img{\n        margin-left: 1%;\n    }\n"], ["\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    p{\n        margin-left: 1%;\n        font-size: ", ";\n    }\n    img{\n        margin-left: 1%;\n    }\n"])), FontSizes_1.fontSize[18]);
var BottomSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background-color: lightgrey;\n    display: flex;\n    margin-top: 3%;\n    padding: 2%;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n"], ["\n    background-color: lightgrey;\n    display: flex;\n    margin-top: 3%;\n    padding: 2%;\n    justify-content: space-evenly;\n    border-radius: 10px;\n    box-shadow: 0px 2px 2px ", ";\n"])), Colors_1.Colors.black);
var PhotoUserDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    width: 30%;\n    img {\n        max-width: 50%;\n        border-radius: 10px;\n    }\n    a{\n        text-decoration:none;\n        margin-left: 3%;\n        margin-top: 4%;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 30%;\n    img {\n        max-width: 50%;\n        border-radius: 10px;\n    }\n    a{\n        text-decoration:none;\n        margin-left: 3%;\n        margin-top: 4%;\n    }\n"])));
var DataUserDiv = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    img {\n        max-width:20%;\n        border-radius: 10px;\n    }\n    h3{\n        font-weight: bold;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    img {\n        max-width:20%;\n        border-radius: 10px;\n    }\n    h3{\n        font-weight: bold;\n    }\n"])));
var RighrSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n"])));
var ButttonSection = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n    img{\n        width: 20px;\n    }\n"], ["\n    display: flex;\n    justify-content: flex-end;\n    img{\n        width: 20px;\n    }\n"])));
var EmailSection = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n"], ["\n"])));
exports.ProfileSections = function () {
    var _a, _b;
    var _c = react_1.useState(), apiData = _c[0], setApiData = _c[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1").then(function (res) { return res.json(); }).then(function (json) { return setApiData(json); });
    }, []);
    return (React.createElement(ProfileSectionsDiv, null,
        React.createElement(TopSection, null,
            React.createElement("img", { src: "./icons/comments.png" }),
            React.createElement("p", null, "Message"),
            React.createElement("img", { src: "./icons/plus.png" }),
            React.createElement("p", null, "Create a request"),
            React.createElement("img", { src: "./icons/bell.png" }),
            React.createElement("p", null, "Add to a cluster"),
            React.createElement("img", { src: "./icons/bell.png" })),
        React.createElement(BottomSection, null,
            React.createElement(PhotoUserDiv, null,
                React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' }),
                " ",
                React.createElement("a", { href: "MyProfile" }, "SEE PROFILE")),
            React.createElement(DataUserDiv, null,
                React.createElement("h3", null, apiData === null || apiData === void 0 ? void 0 : apiData.name),
                React.createElement("h3", null, (_a = apiData === null || apiData === void 0 ? void 0 : apiData.company) === null || _a === void 0 ? void 0 : _a.name),
                React.createElement("p", null, (_b = apiData === null || apiData === void 0 ? void 0 : apiData.address) === null || _b === void 0 ? void 0 : _b.city),
                React.createElement("p", null, apiData === null || apiData === void 0 ? void 0 : apiData.username)),
            React.createElement(RighrSection, null,
                React.createElement(ButttonSection, null,
                    React.createElement("button", { type: "button" },
                        React.createElement("img", { src: "./icons/edit.png" }))),
                React.createElement(EmailSection, null,
                    React.createElement("p", null, apiData === null || apiData === void 0 ? void 0 : apiData.email),
                    React.createElement("p", null, apiData === null || apiData === void 0 ? void 0 : apiData.phone))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
