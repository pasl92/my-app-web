"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../../../styledHelpers/Colors");
var FontSizes_1 = require("../../../../styledHelpers/FontSizes");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left:5%;\n    margin-right: 5%;\n    width: 90%;\n    text-align: center;\n    font-weight:bold;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left:5%;\n    margin-right: 5%;\n    width: 90%;\n    text-align: center;\n    font-weight:bold;\n"])));
var UserProfileWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 0px 5px 5px ", ";\n\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n"], ["\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 0px 5px 5px ", ";\n\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n"])), Colors_1.Colors.black);
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
var YourNetwork = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        } \n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        } \n"])), FontSizes_1.fontSize[22]);
var YourPublications = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        }  \n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        }  \n"])), FontSizes_1.fontSize[22]);
var PhotoBorder = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nborder-color: black;\nborder-width: 2px;\npadding: 1%;\n"], ["\nborder-color: black;\nborder-width: 2px;\npadding: 1%;\n"])));
var UnderUserProfile = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left: 5%;\n    font-weight: lighter;\n"], ["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5%;\n    margin-left: 5%;\n    font-weight: lighter;\n"])));
var OtherSections = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: flex;\n    margin: 2%;\n    padding: 1%;\n    align-items: center;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        } \n\n    p{\n        margin-left: 10%;\n    }\n\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n    \n"], ["\n    display: flex;\n    margin: 2%;\n    padding: 1%;\n    align-items: center;\n    &:hover {\n            transition-delay: 0.2s;\n            font-size: ", ";\n        } \n\n    p{\n        margin-left: 10%;\n    }\n\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n    \n"])), FontSizes_1.fontSize[22]);
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://jsonplaceholder.typicode.com/todos/1";
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
;
var UserProfile = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(UserProfileWrapper, null,
            React.createElement(Photo, null,
                React.createElement("img", { src: './testimagepublications.png', alt: 'Logo' })),
            React.createElement(NameSurename, null,
                React.createElement("a", { href: "MyProfile" }, " Humbrerta Swift ")),
            React.createElement(JobTitle, null, "Job title - Company"),
            React.createElement(ColoredLine, { color: "black" }),
            React.createElement(BottomSection, null,
                React.createElement(YourNetwork, null,
                    React.createElement("img", { src: "./icons/network.png" }),
                    React.createElement("a", { href: "testsite" }, " Your network "),
                    React.createElement(PhotoBorder, null,
                        React.createElement("img", { src: "./icons/user-plus.png" }))),
                React.createElement(YourPublications, null,
                    React.createElement("img", { src: "./icons/bell.png" }),
                    React.createElement("a", { href: "testsite" }, " Your publications "),
                    React.createElement(PhotoBorder, null,
                        React.createElement("img", { src: "./icons/plus.png" }))))),
        React.createElement(UnderUserProfile, null,
            React.createElement(OtherSections, null,
                React.createElement("img", { src: "./icons/publications.png" }),
                React.createElement("a", { href: "testsite" },
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
                React.createElement("a", { href: "testsite" },
                    " ",
                    React.createElement("p", null, "Entities"),
                    " ")))));
};
exports["default"] = UserProfile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
