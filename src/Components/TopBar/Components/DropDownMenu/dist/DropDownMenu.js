"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.DropDownMenu = void 0;
var react_1 = require("react");
var FontSizes_1 = require("../../../../styledHelpers/FontSizes");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 4%;\n    left: 16%;\n    background-color: white;\n    border:1px solid gray;\n    border-radius: 10px;\n    #filterInput{\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        input{\n        height: 40%;\n        width: 80%;\n        font-size: ", ";\n        outline:none;\n        border-radius: 10px;\n        padding: 1%;\n        padding-left: 7%;\n        }\n    }\n"], ["\n    position: absolute;\n    top: 4%;\n    left: 16%;\n    background-color: white;\n    border:1px solid gray;\n    border-radius: 10px;\n    #filterInput{\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        input{\n        height: 40%;\n        width: 80%;\n        font-size: ", ";\n        outline:none;\n        border-radius: 10px;\n        padding: 1%;\n        padding-left: 7%;\n        }\n    }\n"])), FontSizes_1.fontSize[18]);
var InnerWarpper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    overflow-y: scroll;\n    max-height: 250px;\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n"], ["\n    overflow-y: scroll;\n    max-height: 250px;\n    text-decoration: none;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n"])));
var MenuItem = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n    display:flex;\n    justify-content:start;\n    align-items:center;\n    margin: 2%;\n    padding: 1%;\n    padding-right: 2%;\n    padding-left: 2%;\n    text-decoration: none;\n    border-radius: 10px;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n    img{\n        height: 25px;\n        width:25px;\n        margin-right: 20px;\n        border-radius: 4px;\n    }\n    p{\n        margin: 2px 2px;\n        font-size: ", ";\n        \n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"], ["\n\n    display:flex;\n    justify-content:start;\n    align-items:center;\n    margin: 2%;\n    padding: 1%;\n    padding-right: 2%;\n    padding-left: 2%;\n    text-decoration: none;\n    border-radius: 10px;\n    a {\n        text-decoration:none;\n        color: black;\n        }\n    img{\n        height: 25px;\n        width:25px;\n        margin-right: 20px;\n        border-radius: 4px;\n    }\n    p{\n        margin: 2px 2px;\n        font-size: ", ";\n        \n    }\n    &:hover {\n            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);\n        }  \n"])), FontSizes_1.fontSize[16]);
var AccountWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n"], ["\n"])));
var TitleMenuItem = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: ", ";\n    font-weight: bold;\n    color: gray;\n    margin: 3%;\n    margin-bottom: 5%;\n"], ["\n    font-size: ", ";\n    font-weight: bold;\n    color: gray;\n    margin: 3%;\n    margin-bottom: 5%;\n"])), FontSizes_1.fontSize[14]);
exports.DropDownMenu = function () {
    var _a = react_1.useState(''), inputText = _a[0], setInputText = _a[1];
    var inputHandler = function (e) {
        var text = e.target.value;
        setInputText(text);
    };
    return (React.createElement(Wrapper, null,
        React.createElement("div", { id: "filterInput" },
            React.createElement("input", { type: "text", value: inputText, onChange: inputHandler, placeholder: "Filter..." })),
        React.createElement(InnerWarpper, null,
            React.createElement(TitleMenuItem, null,
                React.createElement("p", null, "Platform")),
            'Home'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement("a", { href: "MainPage" },
                React.createElement(MenuItem, { onClick: function () { return "myhref('MainPage');"; } },
                    React.createElement("img", { src: './icons/house2.png' }),
                    "Home")),
            'Publication'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                "  ",
                React.createElement("img", { src: './icons/publications.png' }),
                " ",
                React.createElement("a", { href: "Publications" }, "Publication")),
            'People'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/people.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "People"),
                " "),
            'Entities'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/entities2.png' }),
                " ",
                React.createElement("a", { href: "Entities" }, "Entities")),
            'Administration'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/administration.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "Administration")),
            React.createElement(TitleMenuItem, null,
                React.createElement("p", null, "Workspaces")),
            'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/entities2.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "Client contract")),
            'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/entities2.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "Supplier contract")),
            'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/entities.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "Corporate")),
            'Group norms'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/people.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "Group norms"),
                " "),
            'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/entities.png' }),
                " ",
                React.createElement("a", { href: "TestSite" }, "Real estate contracts"))),
        React.createElement(AccountWrapper, null,
            React.createElement("hr", null),
            React.createElement(TitleMenuItem, null,
                React.createElement("p", null, "Account")),
            React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './testimagepublications.png' }),
                " ",
                React.createElement("a", { href: "MyProfile" }, "Profile")),
            React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/privacy.png' }),
                " ",
                React.createElement("a", { href: "testsite" }, "Privacy")),
            React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/settings.png' }),
                " ",
                React.createElement("a", { href: "testsite" }, "Settings")),
            React.createElement("hr", null),
            React.createElement(MenuItem, null,
                " ",
                React.createElement("img", { src: './icons/logout.png' }),
                " ",
                React.createElement("a", { href: "testsite" }, "Logout"),
                " "))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
